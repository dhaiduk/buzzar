import React from "react";
import "./App.css";
import * as THREE from "three";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StartPage from "./components/StartPage";
import ARPage from "./components/ARPage";
import Container from "@material-ui/core/Container";


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
      <React.Fragment>
        <Container>
          <Router>
            <div>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/ar">Users</Link>
              <Switch>
                <Route path="/about">
                  <ARPage name="Shiori" />
                </Route>
                <Route path="/ar">
                  <Users />
                </Route>
                <Route path="/">
                  <StartPage aSceneStatus={this.aSceneLoaded} />
                </Route>
              </Switch>
            </div>
          </Router>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
