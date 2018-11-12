import React, { Component } from 'react';
import './Fret.css';
import { getNoteByIndex } from '../../../../services/helpers';

class Fret extends Component {
  render() {
    return (
      <div className="Fret">
        <div className="Wire" />
        <div className="NoteText">{getNoteByIndex(this.props.note)}</div>
        <div className="Wire" />
        <div className="FretSteelBorder" />
      </div>
    );
  }
}

export default Fret;
