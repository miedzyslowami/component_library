import React from 'react';
import PropTypes from 'prop-types';
import MobileMenu from './../MobileMenu/MobileMenu';
import Logo from './../Logo/Logo';
import scss from './ScrollDownMenu.scss';

/** Menu rolldown rollup that scrolls into picked section */
class ScrollDownMenu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            menuItems:this.props.menuItems,
            className:'',
            showMenu:false
        }
    }
    dropDownMenu = ()=>{
      this.state.showMenu===false ? this.setState({className:scss.show__menu,showMenu:true}) : this.setState({className:'',showMenu:false});
    }

    render() {
        let menuItems = this.state.menuItems.map((item,i)=>{
            return <li data-name={item} key={i}>{item}</li>
        })
        return (
          <header className={scss.header}>
            <h1 className={scss.main__heading}>{this.props.mainHeading}</h1>
              <div className={scss.wrapper} >
                <Logo/>
                <nav className={scss.mobile__menu} id={scss.mobile__menu}>
                <MobileMenu handleClick={this.dropDownMenu}/>
                <ul id={scss.navigation} className={this.state.className}>
                {menuItems}
                </ul></nav>
              </div>
          </header>
        )
    }
}

ScrollDownMenu.propTypes = {
    /** List of items to include in navigation  */
  menuItems: PropTypes.array.isRequired,
  /** Title of the page in h1; h1 is set outside viewPort by default; it is still accesible by readers  */
  mainHeading: PropTypes.string.isRequired
};

ScrollDownMenu.defaultProps = {
  menuItems:['About','Works','Contact'],
  mainHeading: 'Portfolio'
};
export default ScrollDownMenu;
