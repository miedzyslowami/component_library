import React from 'react';
import PropTypes from 'prop-types';

/**pointless comment */
class Footer extends React.Component{
  render(){
      return <div>Hello {this.props.message}</div>
  }
}

Footer.propTypes = {
  /** Message to display */
  message: PropTypes.string
};

Footer.defaultProps = {
  message: 'World'
};

export default Footer;
