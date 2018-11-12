import React, { Component } from 'react';
import String from './String/String';
import { Chord } from '../../services/chord';
import { Bandolim } from '../../services/bandolim';
import './Arm.css';

class Arm extends Component {
  constructor() {
    super();
    this.bandolim = new Bandolim();
    this.chord = new Chord('C');
  }

  render() {
    return (
      <div className="Arm">
        <String notes={this.bandolim.firstString} />
        <String notes={this.bandolim.secondString} />
        <String notes={this.bandolim.thirdString} />
        <String notes={this.bandolim.fourthString} />
      </div>
    );
  }
}

export default Arm;
