import Believer from "../assets/images/believer.jpg";
import DreamOn from "../assets/images/dreamon.jpg";
import ShortWave from "../assets/images/shortwave.jpg";
import Origins from "../assets/images/origins.png";
import TieMeDown from "../assets/images/gryffin.png";
import Hyonna from "../assets/images/hyonna.jpg";
import Enigma from "../assets/images/DerniereEnigma.png";
import BelieverAudio from "../assets/audio/Believer.mp3";
import DreamOnAudio from "../assets/audio/DreamOn.mp3";
import ShortwaveAudio from "../assets/audio/Shortwave.mp3";
import NaturalAudio from "../assets/audio/Natural.mp3";
import TieMeDownAudio from "../assets/audio/TieMeDown.mp3";
import HyonnaAudio from "../assets/audio/Hyonna.mp3";
import EnigmaAudio from "../assets/audio/DerniereEnigma.mp3";

export const albumArr = [
  {
    id: 1,
    song: "Believer",
    artist: "IMAGINE DRAGON",
    img: Believer,
    bgColor: "rgba(92, 233, 189, 0.6)",
    // duration: 270000,
    audioUrl: BelieverAudio,
  },
  {
    id: 2,
    song: "Dernière Enigma",
    artist: "Kamro",
    img: Enigma,
    bgColor: "rgb(255, 57, 57)",
    // duration: 270000,
    audioUrl: EnigmaAudio,
  },
  {
    id: 3,
    song: "Shortwave",
    artist: "RYAN GRIGDRY",
    img: ShortWave,
    bgColor: "rgba(178, 111, 20, 1)",
    // duration: 270000,
    audioUrl: ShortwaveAudio,
  },
  {
    id: 4,
    song: "Dream On",
    artist: "ROGER TERRY",
    img: DreamOn,
    bgColor: "rgba(140, 51, 67, 1)",
    // duration: 270000,
    audioUrl: DreamOnAudio,
  },
  {
    id: 5,
    song: "Natural",
    artist: "IMAGINE DRAGON",
    img: Origins,
    bgColor: "rgba(54, 111, 40, 1)",
    // duration: 270000,
    audioUrl: NaturalAudio,
  },
  {
    id: 6,
    song: "Tie Me Down",
    artist: "GRYFFIN",
    img: TieMeDown,
    bgColor: "rgba(140, 51, 67, 1)",
    // duration: 270000,
    audioUrl: TieMeDownAudio,
  },
  {
    id: 7,
    song: "Chaff & Dust",
    artist: "HYONNA",
    img: Hyonna,
    bgColor: "rgba(85, 56, 163, 1)",
    // duration: 270000,
    audioUrl: HyonnaAudio,
  },
];

// Duration has been commented out as it was used when the app was implemented using setTimer placeholder
