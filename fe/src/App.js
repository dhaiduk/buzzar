//import logo from './logo.svg';
import React from 'react';
//import ReactDOM from 'react-dom'
import './App.css';
import * as THREE from "three";

class App extends React.Component {
  componentDidMount() {
    var scene  = document.querySelector('a-scene').object3D;
    var geometry = new THREE.BoxGeometry( 0.1, 0.1, 0.1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    cube.position.set(0, 0.2, 0.1);;
    scene.add( cube );
    console.log(scene)
    document.querySelector('a-scene').addEventListener('loaded', function () {console.log("a-scene loaded")})
  };

  render() {
    return <div ref={ref => (this.mount = ref)} />;
  }
}

export default App;
