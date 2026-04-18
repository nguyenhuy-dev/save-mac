import { useCallback, useRef } from 'react';

import win1 from "../assets/sounds/win.mp3";

import lose1 from "../assets/sounds/lose.mp3";

import correct1 from "../assets/sounds/correct1.mp3";
import correct2 from "../assets/sounds/ting.mp3";

import wrong1 from "../assets/sounds/shocked.mp3";
import wrong2 from "../assets/sounds/huh.mp3";
import wrong3 from "../assets/sounds/huh2.mp3";
import wrong4 from "../assets/sounds/quack.mp3";

const SOUNDS = {
  correct: [correct1, correct2],
  wrong: [wrong1, wrong2, wrong3, wrong4],
  win: [win1],
  lose: [lose1],
};

export const useAudio = () => {
  const bgmRef = useRef<HTMLAudioElement | null>(null);

  // 🎲 Lấy 1 sound ngẫu nhiên trong mảng
  const getRandomSound = (list: string[]) => {
    return list[Math.floor(Math.random() * list.length)];
  };

  // 🔊 Phát âm thanh hiệu ứng
  const playSound = useCallback((type: keyof typeof SOUNDS) => {
    const list = SOUNDS[type];
    if (!list || list.length === 0) return;

    const sound = getRandomSound(list); // chọn random
    const audio = new Audio(sound);
    audio.currentTime = 0;

    audio.play().catch(() => {});
  }, []);

  // 🎵 Phát nhạc nền (nếu bạn có bgm)
  const playBgm = useCallback(() => {
    if (!bgmRef.current) return;
    bgmRef.current.loop = true;
    bgmRef.current.volume = 0.3;
    bgmRef.current.play().catch(() => {});
  }, []);

  const stopBgm = useCallback(() => {
    if (bgmRef.current) {
      bgmRef.current.pause();
    }
  }, []);

  return { playSound, playBgm, stopBgm };
};