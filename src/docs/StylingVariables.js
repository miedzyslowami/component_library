import React from 'react';
import './../globalStyles/atom-one-dark.css';
// This way is easy, but adds 170K gzipped to bundle since all langs are included.
// import Highlight from 'react-highlight';

class StylingVariables extends React.Component {
  render() {
    return (
      <div>Plik css{this.props.variables}</div>
    )
  }
}

export default StylingVariables;
