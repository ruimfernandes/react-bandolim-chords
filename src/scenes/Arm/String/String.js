import React, { Component } from 'react';
import Fret from './Fret/Fret';
import './String.css';

class String extends Component {
  renderFrets() {
    return this.props.notes.map((note, index) => {
      return <Fret key={index} note={note} />;
    });
  }

  render() {
    return <div className="String">{this.renderFrets()}</div>;
  }
}

export default String;
