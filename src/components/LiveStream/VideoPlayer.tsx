import React, { useEffect } from 'react';
import { AgoraVideoPlayer } from 'agora-rtc-react';
import { IRemoteUser, ICameraVideoTrack, IMicrophoneAudioTrack } from 'agora-rtc-sdk-ng';

interface VideoPlayerProps {
  users: IRemoteUser[];
  tracks: [IMicrophoneAudioTrack, ICameraVideoTrack] | null;
}

export function VideoPlayer({ users, tracks }: VideoPlayerProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {tracks && (
        <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
          <AgoraVideoPlayer
            videoTrack={tracks[1]}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-sm">
            You (Host)
          </div>
        </div>
      )}
      {users.length > 0 &&
        users.map((user) => {
          if (user.videoTrack) {
            return (
              <div key={user.uid} className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <AgoraVideoPlayer
                  videoTrack={user.videoTrack}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-sm">
                  User {user.uid}
                </div>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}