import React from 'react';
import PropTypes from 'prop-types';

/**pointless comment */
class ProgressBar extends React.Component{
  render(){
      return <div>Hello {this.props.message}</div>
  }
}

ProgressBar.propTypes = {
  /** Message to display */
  message: PropTypes.string
};

ProgressBar.defaultProps = {
  message: 'World'
};

export default ProgressBar;
