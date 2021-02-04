import React from "react";
import "./App.css";
import * as THREE from "three";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StartPage from "./pages/StartPage";
import ARPage from "./pages/ARPage";
import Container from "@material-ui/core/Container";

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
              {/*<Link to="/">Start</Link>
              <Link to="/ar">AR</Link>*/}
              <Switch>
                <Route path="/ar">
                  <ARPage name ="John"/>
                </Route>
                <Route path="/">
                  <StartPage />
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
