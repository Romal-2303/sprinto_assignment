import MediaPrevious from "../../assets/icons/MediaPrevious";
import Pause from "../../assets/icons/Pause";
import Play from "../../assets/icons/Play";
import Seek from "../Seek/Seek";
import classes from "./Player.module.scss";
import { usePlayer } from "../../context/PlayerContext";
import { useRef, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

interface PlayerProps {
  audioRef: any;
}

const Player = ({ audioRef }: PlayerProps) => {
  const {
    activeSong,
    playStatus,
    setPlayStatus,
    nextClickHandler,
    previousClickHandler,
    pauseClickHandler,
    playClickHandler,
  }: any = usePlayer();

  const customTimer = useRef<any>(null);
  const [fill, setFill] = useState<number>(0);
  const [playClicked, setPlayClicked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlay = () => {
    audioRef.current?.play();
    setPlayClicked((prevState) => !prevState);
    setFill((prevState) => {
      if (prevState === 100) {
        return 0;
      }
      return prevState;
    });
    playClickHandler();
  };

  const handlePause = () => {
    pauseClickHandler(customTimer.current)();
    audioRef.current?.pause();
  };

  return (
    <div className={classes["player-container"]}>
      <div className={classes["seek-container"]}>
        <Seek
          key={activeSong.id || activeSong.song + activeSong.artist}
          customTimer={customTimer}
          duration={activeSong.duration}
          fill={fill}
          setFill={setFill}
          playClicked={playClicked}
          audioRef={audioRef}
        />
      </div>
      <div className={classes["song-info-container"]}>
        <div className={classes["info-container"]}>
          <div className={classes["image-container"]}>
            <img src={activeSong.img} height="100%" width="100%" />
          </div>
          <div className={classes["song-container"]}>
            <p className={classes["song-text"]}>{activeSong.song}</p>
            <p className={classes["artist-text"]}>{activeSong.artist}</p>
          </div>
        </div>
        <div className={classes["controller-container"]}>
          <div
            className={classes["icon-container"]}
            onClick={() => {
              setFill(0);
              setPlayStatus(false);
              if (audioRef.current) {
                audioRef.current.load();
              }
              previousClickHandler();
            }}
          >
            <MediaPrevious />
          </div>

          {isLoading ? (
            <LoadingSpinner width={24} height={24} weight={1} />
          ) : playStatus ? (
            <div className={classes["icon-container"]} onClick={handlePlay}>
              <Play />
            </div>
          ) : (
            <div className={classes["icon-container"]} onClick={handlePause}>
              <Pause />
            </div>
          )}

          <div
            className={classes["icon-container"]}
            onClick={() => {
              setFill(0);
              setPlayStatus(false);
              if (audioRef.current) {
                audioRef.current.load();
              }
              nextClickHandler();
            }}
          >
            <MediaPrevious rotation={180} />
          </div>
        </div>
        <audio
          ref={audioRef}
          onLoadStart={() => setIsLoading(true)}
          onCanPlay={() => setIsLoading(false)}
          onWaiting={() => setIsLoading(true)}
          onPlaying={() => setIsLoading(false)}
          autoPlay
        >
          <source src={activeSong.audioUrl} type="audio/ogg"></source>
        </audio>
      </div>
    </div>
  );
};

export default Player;
