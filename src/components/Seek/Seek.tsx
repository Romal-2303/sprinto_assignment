import { useEffect, useRef, useState } from "react";
import classes from "./Seek.module.scss";
import { usePlayer } from "../../context/PlayerContext";

interface SeekProps {
  duration?: number;
  customTimer: any;
  fill: number;
  setFill: React.Dispatch<React.SetStateAction<number>>;
  playClicked: boolean;
  audioRef: any;
}

const Seek = ({
  customTimer,
  duration = 10000,
  fill,
  setFill,
  playClicked,
  audioRef,
}: SeekProps) => {
  const { playStatus, setPlayStatus }: any = usePlayer();
  const isDragging = useRef<any>(false);
  const seekContainerRef = useRef<HTMLDivElement | null>(null);

  // with setTimeout
  // useEffect(() => {
  //   if (!playStatus) {
  //     customTimer.current = setInterval(() => {
  //       setFill((prevState: number) => {
  //         if (Math.round(prevState) === 100) {
  //           setPlayStatus(true);
  //           clearInterval(customTimer.current);
  //           return 100;
  //         } else {
  //           return prevState + 100 / (duration / 1000);
  //         }
  //       });
  //     }, 1000);
  //   }

  //   return () => {
  //     clearInterval(customTimer.current);
  //   };
  // }, [duration, playClicked]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      const current = audio.currentTime;
      const duration = audio.duration;
      const percent = (current / duration) * 100;

      if (percent === 100) {
        setPlayStatus(true);
      }

      setFill(percent);
    };

    audio.addEventListener("timeupdate", updateProgress);

    // Cleanup function
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, [audioRef]);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !seekContainerRef.current) return;

    const rect = seekContainerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const percentage = (mouseX / rect.width) * 100;
    const clampedPercentage = Math.min(100, Math.max(0, percentage));

    setFill(clampedPercentage);

    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = (audio.duration * clampedPercentage) / 100;
    }
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !seekContainerRef.current) return;

    const rect = seekContainerRef.current.getBoundingClientRect();
    const touchX = e.touches[0].clientX - rect.left;
    const percentage = (touchX / rect.width) * 100;
    const clampedPercentage = Math.min(100, Math.max(0, percentage));

    setFill(clampedPercentage);

    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = (audio.duration * clampedPercentage) / 100;
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const handleTouchCancel = () => {
    isDragging.current = false;
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!seekContainerRef.current) return;

    const rect = seekContainerRef.current.getBoundingClientRect();
    let clickX = e.clientX ?? 0;

    const percentage = ((clickX - rect.left) / rect.width) * 100;
    const clampedPercentage = Math.min(100, Math.max(0, percentage));

    setFill(clampedPercentage);

    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = (audio.duration * clampedPercentage) / 100;
    }
  };

  return (
    <div
      ref={seekContainerRef}
      className={classes["seek-container"]}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
      onClick={handleClick}
    >
      <div className={classes["filled-color"]} style={{ width: `${fill}%` }}>
        <div className={classes["controller-circle"]}></div>
      </div>
    </div>
  );
};

export default Seek;
