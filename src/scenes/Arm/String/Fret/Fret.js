import React, { Component } from 'react';
import './Fret.css';
import { getNoteByIndex } from '../../../../services/helpers';

class Fret extends Component {
  setStyle() {
    return {
      backgroundColor: this.props.firstFret ? '#DEB887' : '#D2691E',
      color: this.props.active ? '#00FF00' : '#FFFFFF'
    };
  }

  render() {
    return (
      <div className="Fret" style={this.setStyle()}>
        <div className="Wire" />
        <div className="NoteText">{getNoteByIndex(this.props.note)}</div>
        <div className="Wire" />
        <div className="FretSteelBorder" />
      </div>
    );
  }
}

export default Fret;
