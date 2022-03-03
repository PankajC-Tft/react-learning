import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import SketchGAN from "./screens/SketchGAN";
import DCGAN from "./screens/DCGAN";
import CycleGAN from "./screens/CycleGAN";
import ColorGAN from "./screens/ColorGAN";


function App() {
  return (
    <>
      <p>Video Player</p>
      {/* <div style={{ margin: '20px auto', maxWidth: '500px' }}>
        <div id="player" data-plyr-provider="youtube" data-plyr-embed-id="bTqVqk7FSmY"></div>
      </div> */}
      <div class="plyr__video-embed" id="player">
        <iframe
          src="https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
          allowfullscreen
          allowtransparency
          allow="autoplay"
        ></iframe>
      </div>
    </>
  );
}

export default App;