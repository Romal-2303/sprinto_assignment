import ArrowWithTail from "../../assets/icons/ArrowWithTail";
import classes from "./Homepage.module.scss";
import styles from "../../designSystem/_classes.module.scss";
import Player from "../../components/Player/Player";
import { albumArr } from "../../utils/mockData";
import { usePlayer } from "../../context/PlayerContext";
import { useRef, useEffect } from "react";

const Homepage = () => {
  const { activeSong, songClickHandler }: any = usePlayer();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleSongClick = (receivedIndex: number) => () => {
    if (audioRef.current) {
      audioRef.current.load();
    }

    songClickHandler(receivedIndex)();
  };

  return (
    <div className={`${classes["homepage-container"]}`}>
      <div
        className={`${classes["homepage-content"]} ${styles["hide-scrollbar"]}`}
      >
        <div className={classes["back-arrow-container"]}>
          <ArrowWithTail />
        </div>
        <div className={classes["liked-text"]}>Liked Songs</div>

        <div className={classes["album-wrapper"]}>
          {albumArr.map((el, index) => (
            <div
              className={classes["album-container"]}
              onClick={handleSongClick(index)}
              key={index}
            >
              <div className={classes["image-container"]}>
                <img src={el.img} height={"100%"} width="100%" />
              </div>
              <p className={classes["song-text"]}>{el.song}</p>
              <p className={classes["artist-text"]}>{el.artist}</p>
              <div
                className={classes["circular-gradient"]}
                style={{
                  background: `radial-gradient(circle, ${el.bgColor} 0%,rgba(0, 0, 0, 0) 80%)`,
                }}
              ></div>
            </div>
          ))}
        </div>
        <div className={classes["player-wrapper"]}>
          <Player
            key={activeSong.id || activeSong.song + activeSong.artist}
            audioRef={audioRef}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
