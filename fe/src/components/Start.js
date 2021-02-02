import React, { Component } from 'react';
import PoweredByBuzz from '../images/powered_by_buzz.png';
import BuzzARVR from '../images/buzz_arvr.png';
import "./Start.css";
export default class Start extends Component {
  render() {
    return (
    <React.Fragment>
      <img src={BuzzARVR} alt={"Buzz ARVR logo"} className="buzz_arvr" />
      <img src={PoweredByBuzz} alt={"Powered by buzz"} className="powered_by_Buzz" />
    </React.Fragment>
    );
  }
} 