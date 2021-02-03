import React from "react";
import PoweredByBuzz from "../images/powered_by_buzz.png";
import BuzzARVR from "../images/buzz_arvr.png";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    left: 0,
    top: 0,
    display: "none",
  },
  buzz_arvr: {
    position: "absolute",
    left: "10vw",
    top: "30vh",
    width: "80vw",
    height: "auto",
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
  const classes = useStyles();
  console.log(props.aSceneStatus);
  return (
    <div className={classes.container}>
      <img
        src={BuzzARVR}
        alt={"Buzz ARVR logo"}
        className={classes.buzz_arvr}
      />
      <img
        src={PoweredByBuzz}
        alt={"Powered by buzz"}
        className={classes.powered_by_Buzz}
      />
      {props.aSceneStatus ? <CircularProgress className={classes.circularProgress}/> : null }
    </div>
  );
}
