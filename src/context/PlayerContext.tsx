import { createContext, ReactNode, useContext, useState } from "react";
import { albumArr } from "../utils/mockData";

type PlayerContextType = {
  activeSong: (typeof albumArr)[0];
  activeSongIndex: number;
  playStatus: boolean;
  setPlayStatus: () => void;
  nextClickHandler: () => void;
  previousClickHandler: () => void;
  pauseClickHandler: () => void;
  playClickHandler: () => void;
  songClickHandler: () => void;
};

const PlayerContext = createContext<PlayerContextType | null>(null);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const [activeSongIndex, setActiveSongIndex] = useState<number>(0);
  const [playStatus, setPlayStatus] = useState<boolean>(true);

  const nextClickHandler = () => {
    setActiveSongIndex((prevState) => {
      if (prevState + 1 > albumArr.length - 1) {
        return albumArr.length - 1;
      } else {
        return prevState + 1;
      }
    });
  };
  const previousClickHandler = () => {
    setActiveSongIndex((prevState) => {
      if (prevState - 1 < 0) {
        return 0;
      } else {
        return prevState - 1;
      }
    });
  };
  const pauseClickHandler = (receivedInterval: any) => () => {
    clearInterval(receivedInterval);
    setPlayStatus(true);
  };

  const playClickHandler = () => {
    setPlayStatus(false);
  };

  const songClickHandler = (receivedIndex: number) => () => {
    setPlayStatus(false);
    setActiveSongIndex(receivedIndex);
  };

  const value = {
    activeSong: albumArr[activeSongIndex],
    playStatus,
    setPlayStatus,
    nextClickHandler,
    previousClickHandler,
    pauseClickHandler,
    playClickHandler,
    songClickHandler,
  } as any;

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
