import React from 'react';
import PropTypes from 'prop-types';
import scss from './../index.scss';

class Navigation extends React.Component{
  render(){
    return (
      <ul className={scss.navigation}>
        {
          this.props.components.map((name) => {
            return (
              <li key={name}>
                <a href={`#${name}`}>{name}</a>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

Navigation.propTypes = {
  components: PropTypes.array.isRequired
};

export default Navigation;
