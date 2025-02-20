import { createClient, createMicrophoneAndCameraTracks } from 'agora-rtc-react';

const appId = import.meta.env.VITE_AGORA_APP_ID || '';
export const config = { mode: "live", codec: "vp8", appId };

export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();