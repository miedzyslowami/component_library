import React from 'react';
import PropTypes from 'prop-types';
import MobileMenu from './../MobileMenu/MobileMenu';
import Logo from './../Logo/Logo';
import scss from './ScrollDownMenu.scss';


class ScrollDownMenu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            menuItems:['About','Works','Contact'],
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
            <h1 className={scss.main__heading}></h1>
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

export default ScrollDownMenu;
