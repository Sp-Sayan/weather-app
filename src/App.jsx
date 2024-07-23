import Home from "./pages/home/home";
import "./pages/home/home.css";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import { rain, snow, cloudy, mist, clear } from "./data/ConditionCode";

function App() {
  const [bgcode, setBgCode] = useState(999);
  const [bg, setBg] = useState();
  const appRef = useRef(null);

  const bgCheck = (e) => {
    console.log("bgCheck called with:", e);
    setBgCode(e);
  };
  useEffect(() => {
    const bgSet = () => {
      if (rain.includes(bgcode)) {
        setBg("./Rain.webm");
      } else if (snow.includes(bgcode)) {
        setBg("/Snow.webm");
      } else if (cloudy.includes(bgcode)) {
        setBg("/Cloudy.mp4");
      } else if (mist.includes(bgcode)) {
        setBg("/Mist.webm");
      } else if (clear.includes(bgcode)) {
        setBg("/clear.mp4");
      } else {
        setBg("/preview.mp4");
      }
    };

    if (bgcode) {
      bgSet();
    }
  }, [bgcode]);
  return (
    <div className="app" ref={appRef}>
      <video
        autoPlay
        muted
        loop
        src={bg}
        className="bg-video"
        type="video/mp4"
      ></video>
      <Home onFetch={bgCheck} />
    </div>
  );
}
export default App;
