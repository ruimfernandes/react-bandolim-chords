import React, { Component } from 'react';
import './StringInfo.css';

class StringInfo extends Component {
  renderFrets() {
    return this.props.notes.map((note, index) => {
      return (
        <div className="Item" key={index}>
          {index}
        </div>
      );
    });
  }

  render() {
    return <div className="StringInfo">{this.renderFrets()}</div>;
  }
}

export default StringInfo;
