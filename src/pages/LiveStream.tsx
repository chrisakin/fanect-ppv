import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useClient, useMicrophoneAndCameraTracks, config } from '../lib/agora';
import { VideoPlayer } from '../components/LiveStream/VideoPlayer';
import { Controls } from '../components/LiveStream/Controls';
import type { IAgoraRTCRemoteUser } from 'agora-rtc-sdk-ng';

export function LiveStream() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [users, setUsers] = useState<IAgoraRTCRemoteUser[]>([]);
  const [start, setStart] = useState(false);
  const [inCall, setInCall] = useState(false);
  
  const client = useClient();
  const { ready, tracks } = useMicrophoneAndCameraTracks();

  useEffect(() => {
    let init = async (channelName: string) => {
      client.on("user-published", async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        if (mediaType === "video") {
          setUsers((prevUsers) => [...prevUsers, user]);
        }
        if (mediaType === "audio") {
          user.audioTrack?.play();
        }
      });

      client.on("user-unpublished", (user, mediaType) => {
        if (mediaType === "audio") {
          user.audioTrack?.stop();
        }
        if (mediaType === "video") {
          setUsers((prevUsers) => prevUsers.filter((u) => u.uid !== user.uid));
        }
      });

      client.on("user-left", (user) => {
        setUsers((prevUsers) => prevUsers.filter((u) => u.uid !== user.uid));
      });

      try {
        await client.join(config.appId, channelName, null, null);
        if (tracks) {
          await client.publish(tracks);
          setStart(true);
        }
      } catch (error) {
        console.error(error);
        navigate('/events');
      }
    };

    if (ready && tracks && id) {
      init(id);
      setInCall(true);
    }

    return () => {
      client.removeAllListeners();
      if (tracks) {
        tracks[0].close();
        tracks[1].close();
      }
      client.leave();
    };
  }, [client, ready, tracks, id, navigate]);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-black/30 p-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/events" className="inline-flex items-center text-gray-400 hover:text-white">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Events
          </Link>
        </div>
      </div>

      {/* Stream Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {start && tracks && (
          <>
            <VideoPlayer tracks={tracks} users={users} />
            <Controls tracks={tracks} setStart={setStart} setInCall={setInCall} />
          </>
        )}

        {/* Stream Info */}
        <div className="mt-6">
          <h1 className="text-2xl font-bold text-white mb-2">Live Music Festival 2024</h1>
          <p className="text-gray-400">
            Experience the energy and excitement of our annual music festival, streaming live from multiple stages.
          </p>
        </div>
      </div>
    </div>
  );
}