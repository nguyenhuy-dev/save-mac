import { useCallback, useRef } from 'react';

const SOUNDS = {
  correct: "https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg",
  wrong: "https://actions.google.com/sounds/v1/cartoon/slip_and_fall.ogg",
  win: "https://actions.google.com/sounds/v1/crowds/crowd_cheer.ogg",
  door: "https://actions.google.com/sounds/v1/doors/wood_door_open_close.ogg",
  bgm: "https://actions.google.com/sounds/v1/science_fiction/computer_beeps_and_whirs.ogg" // Light techy background
};

export const useAudio = () => {
  const bgmRef = useRef<HTMLAudioElement | null>(null);

  const playSound = useCallback((type: keyof typeof SOUNDS) => {
    const audio = new Audio(SOUNDS[type]);
    if (type !== 'bgm') {
      audio.play().catch(() => {});
    }
  }, []);

  const playBgm = useCallback(() => {
    if (!bgmRef.current) {
      bgmRef.current = new Audio(SOUNDS.bgm);
      bgmRef.current.loop = true;
      bgmRef.current.volume = 0.3;
    }
    bgmRef.current.play().catch(() => {});
  }, []);

  const stopBgm = useCallback(() => {
    if (bgmRef.current) {
      bgmRef.current.pause();
    }
  }, []);

  return { playSound, playBgm, stopBgm };
}
