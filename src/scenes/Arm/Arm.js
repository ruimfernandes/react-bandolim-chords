import React, { Component } from 'react';
import String from './String/String';
import StringInfo from './StringInfo/StringInfo';
import { Chord } from '../../services/chord';
import { Bandolim } from '../../services/bandolim';
import './Arm.css';

class Arm extends Component {
  constructor() {
    super();
    this.bandolim = new Bandolim();
    this.chord = new Chord('C');

    console.log('yoooo ', this.bandolim.toFrets(this.chord.notes));
    this.state = {
      firstActive: -1,
      secondActive: -1,
      thirdActive: -1,
      fourthActive: -1
    };

    /*this.state = {
      firstActive: this.bandolim.toFrets(this.chord.notes)[0],
      secondActive: this.bandolim.toFrets(this.chord.notes)[1],
      thirdActive: this.bandolim.toFrets(this.chord.notes)[2],
      fourthActive: this.bandolim.toFrets(this.chord.notes)[3]
    };*/
  }

  render() {
    return (
      <div className="Arm">
        <StringInfo notes={this.bandolim.firstString} />
        <String
          notes={this.bandolim.firstString}
          active={this.state.firstActive}
        />
        <String
          notes={this.bandolim.secondString}
          active={this.state.secondActive}
        />
        <String
          notes={this.bandolim.thirdString}
          active={this.state.thirdActive}
        />
        <String
          notes={this.bandolim.fourthString}
          active={this.state.fourthActive}
        />
      </div>
    );
  }
}

export default Arm;
