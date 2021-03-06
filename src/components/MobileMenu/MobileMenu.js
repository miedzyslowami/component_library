import React from 'react';
import PropTypes from 'prop-types';
import scss from './MobileMenu.scss';
/** Clicable icon to mobile menu */
class MobileMenu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
                className:scss.unrotate__icon,
                rotate:false
        }
    }
    handleClick = (e) =>{
        this.state.rotate===false ?  this.setState({className:scss.rotate__icon,rotate:true}) : this.setState({className:scss.unrotate__icon,rotate:false});
        this.props.handleClick(e);
    }
    render() {
        return (
            <div id={scss.menu__icon} className={this.state.className} onClick={this.handleClick}>
                  <svg id={scss.flower} xmlns='http://www.w3.org/2000/svg' x="0px" y="0px" viewBox="0 0 488.979 488.979" role="img" aria-labelledby="title desc">
                    <title id="title">Menu icon</title>
                    <desc id="desc">Flower</desc>
                    <path id={scss.flower__petal__1} d='M312.187,66.206C303.422,30.711,282.542,0,245.98,0c-36.569,0-58.866,29.183-58.866,65.744   c0,36.57,55.378,78.545,58.866,154.829C302.951,188.373,323.864,113.45,312.187,66.206z' />
                  	<path id={scss.flower__petal__2} d='M176.812,422.772c8.764,35.496,29.645,66.207,66.215,66.207c36.56,0,58.857-29.184,58.857-65.746   c0-36.569-55.372-78.543-58.857-154.827C186.046,300.606,165.143,375.529,176.812,422.772z' />
                  	<path id={scss.flower__petal__3} d='M61.022,204.811c31.666,18.285,95.69-8.685,163.505,26.437c0.597-65.442-53.835-121.005-100.578-134.522   c-35.121-10.158-72.153-7.435-90.446,24.231C15.226,152.631,29.339,186.526,61.022,204.811z' />
                  	<path id={scss.flower__petal__4} d='M427.977,284.168c-31.658-18.293-95.707,8.685-163.505-26.453c-0.613,65.451,53.843,121.02,100.586,134.53   c35.121,10.148,72.145,7.434,90.446-24.241C473.781,336.34,459.643,302.445,427.977,284.168z' />
                  	<path id={scss.flower__petal__5} d='M223.046,255.161c-56.375-33.243-131.719-13.875-166.777,19.845c-26.389,25.338-42.532,58.77-24.255,90.437   c18.277,31.674,54.712,36.394,86.393,18.094C150.074,365.26,158.719,296.338,223.046,255.161z' />
                  	<path id={scss.flower__petal__6} d='M265.944,233.802c56.367,33.258,131.72,13.883,166.785-19.853c26.356-25.338,42.516-58.764,24.239-90.445   c-18.293-31.65-54.71-36.363-86.376-18.086C338.933,123.695,330.263,192.656,265.944,233.802z' />
                  </svg>
          </div>
        )
    }
}

MobileMenu.propTypes = {
    /** function performed on icon  */
  handleClick: PropTypes.func.isRequired,
};

MobileMenu.defaultProps = {
  handleClick: function handleClick(e){console.log('activate sibling component change on click')}
};

export default MobileMenu;
