import React from 'react';
import PropTypes from 'prop-types';
import scss from './Footer.scss';

class Footer extends React.Component {
  constructor(props){
    super(props)
      this.variables = scss.variables;
  }

    render() {
      console.log(Object.values(scss));
        return (
          <div className={scss.footer}>
          <p className={scss.copyrights}>©{this.props.year} by {this.props.author}</p>
          </div>
        )
    }
}


Footer.propTypes = {
  author: PropTypes.string.isRequired,
  year:PropTypes.string.isRequired
};

Footer.defaultProps = {
  author: 'Małgorzata Grajewska',
  year: '2017'
};

export default Footer;
