import React from "react";
import "./App.css";
import * as THREE from "three";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Start from './components/Start'
import Container from '@material-ui/core/Container';


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
    return (<React.Fragment>
        <Container>
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
                <Start />
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
