import React from 'react';
import PropTypes from 'prop-types';

class Navigation extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <ul className="navigation">
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
