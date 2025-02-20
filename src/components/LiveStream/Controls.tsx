import React from 'react';
import { Mic, MicOff, Video, VideoOff } from 'lucide-react';
import { IMicrophoneAudioTrack, ICameraVideoTrack } from 'agora-rtc-sdk-ng';

interface ControlsProps {
  tracks: [IMicrophoneAudioTrack, ICameraVideoTrack] | null;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  setInCall: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Controls({ tracks, setStart, setInCall }: ControlsProps) {
  const [trackState, setTrackState] = React.useState({ video: true, audio: true });

  const mute = async (type: "audio" | "video") => {
    if (!tracks) return;
    if (type === "audio") {
      await tracks[0].setEnabled(!trackState.audio);
      setTrackState((ps) => ({ ...ps, audio: !ps.audio }));
    } else if (type === "video") {
      await tracks[1].setEnabled(!trackState.video);
      setTrackState((ps) => ({ ...ps, video: !ps.video }));
    }
  };

  const leaveChannel = async () => {
    await tracks?.[0].close();
    await tracks?.[1].close();
    setStart(false);
    setInCall(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center space-x-4">
        <button
          onClick={() => mute("audio")}
          className={`p-3 rounded-full ${
            trackState.audio ? 'bg-emerald-600' : 'bg-red-600'
          } hover:opacity-80 transition`}
        >
          {trackState.audio ? <Mic /> : <MicOff />}
        </button>
        <button
          onClick={() => mute("video")}
          className={`p-3 rounded-full ${
            trackState.video ? 'bg-emerald-600' : 'bg-red-600'
          } hover:opacity-80 transition`}
        >
          {trackState.video ? <Video /> : <VideoOff />}
        </button>
        <button
          onClick={leaveChannel}
          className="px-6 py-2 rounded-full bg-red-600 hover:bg-red-700 transition"
        >
          Leave
        </button>
      </div>
    </div>
  );
}