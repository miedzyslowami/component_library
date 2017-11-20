import React from 'react';
import PropTypes from 'prop-types';

/**pointless comment */
class HelloWorld extends React.Component{
  render(){
      return <div>Hello {this.props.message}</div>
  }
}

HelloWorld.propTypes = {
  /** Message to display */
  message: PropTypes.string
};

HelloWorld.defaultProps = {
  message: 'World'
};

export default HelloWorld;
