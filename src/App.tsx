import { PlayerProvider } from "./context/PlayerContext";
import Homepage from "./pages/Homepage/Homepage";
import classes from "./App.module.scss";

function App() {
  return (
    <div className={classes["app-container"]}>
      <PlayerProvider>
        <Homepage />
      </PlayerProvider>
    </div>
  );
}

export default App;
