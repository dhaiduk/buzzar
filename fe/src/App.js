//import logo from './logo.svg';
import React from "react";
//import ReactDOM from 'react-dom';
//import CircularProgress from '@material-ui/core/CircularProgress';
import "./App.css";
import * as THREE from "three";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "hello" };
  }

  changeState() {
    this.setState({
      message: "hi",
    });
  }
  componentDidMount() {
    var scene = document.querySelector("a-scene").object3D;
    var geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 0.2, 0.1);
    scene.add(cube);
    console.log(scene);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    this.setState({
      message: "hi",
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/users">Users</Link>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
