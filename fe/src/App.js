import React from 'react';
import './App.css';
import 'aframe';
import {Entity, Scene} from 'aframe-react';
function App() {
  return (
    <div className="App">
     <Scene className = {"a-frame-wrapper"}
      light = "defaultLightEnable: false"
      inspector = "url: https://aframe.io/releases/0.4.0/aframe-inspector.min.js"
      >
      <Entity id = "wall" primitive="a-box" color= {"red"}
        position={{x:0, y:0, z:-25}}
        scale={{x:20, y:50, z:2}}>
      </Entity>
      <Entity id = "skyElemet" primitive="a-sky"  radius = {"1000"} color={"#6EBAA7"}
        scale={{x:1, y:1, z:1}}>
      </Entity>
     </Scene>
    </div>
  );
}

export default App;
