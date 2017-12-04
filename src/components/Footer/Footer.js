import React from 'react';
import PropTypes from 'prop-types';
import scss from './Footer.scss';

/** Footer to each  page */
class Footer extends React.Component {
    render() {
        return (
          <div className={scss.footer}>
          <p className={scss.copyrights}>©{this.props.year} by {this.props.author}</p>
          </div>
        )
    }
}


Footer.propTypes = {
  /** Set person who owns copyrights*/
  author: PropTypes.string.isRequired,
    /** Set year of creation*/
  year:PropTypes.string.isRequired
};

Footer.defaultProps = {
  author: 'Małgorzata Grajewska',
  year: '2017'
};

export default Footer;
