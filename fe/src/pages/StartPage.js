import React from "react";
import PoweredByBuzz from "../images/powered_by_buzz.png";
import BuzzARVR from "../images/buzz_arvr.png";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "orange",
    left: 0,
    top: 0,
    display: "block",
  },
  buzz_arvr: {
    position: "absolute",
    left: "33vw",
    top: "40vh",
    width: "33vw",
    height: "auto",
    animation: "$my-animation 1s infinite",
  },
  "@keyframes my-animation": {
    "0%": {
      transform: "scale(1, 1)"
    },
    "80%": {
      transform: "scale(1.1, 1.1)"
    },
    "100%": {
      transform: "scale(1, 1)"
    }
  },
  powered_by_Buzz: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: "200px",
  },
  circularProgress: {
    position: "absolute",
    left: "45%",
    top: "45%",
    width: "200px",
  },
});

export default function StartPage(props) {
  const [count, setCount] = React.useState(true);
  React.useEffect(() => {
    console.log("Hello");
    var scene = document.querySelector("a-scene");
    console.log(scene);
    if (scene.hasLoaded) {
      setCount(false);
    } else {
      scene.addEventListener('loaded', () => setCount(false));
    }
    document.querySelector('a-scene').addEventListener('loaded', () => console.log("loaded"));
  }, []);

  const classes = useStyles();
  console.log(props.aSceneStatus);

  return (
    <div className={classes.container}>
      <Link to="/ar"><img
        src={BuzzARVR}
        alt={"Buzz ARVR logo"}
        className={classes.buzz_arvr}
      />
      </Link>
      <img
        src={PoweredByBuzz}
        alt={"Powered by buzz"}
        className={classes.powered_by_Buzz}
      />

      {count ? <CircularProgress className={classes.circularProgress} /> : null}
    </div>
  );
}
