import React from 'react';
import scss from './Logo.scss';
/** Animated wave of text (3times);all configuration is made in scss file */
class Logo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text:[]
        }
    }
    componentWillMount(){
        //logo text is extracted from scss file//
        let textFromCss = Object.getOwnPropertyNames(scss)[0].substring(1,(Object.getOwnPropertyNames(scss)[0].length-1));
        this.setState({text:[...textFromCss]});
    }
    render() {
        let text = this.state.text.map((letter,i)=>{
            return <div key={i} className={scss.text +' '+ scss[`text__${i + 1}`]}>{letter}</div>
        })
        return (
                <div className={scss.logo} id={scss.logo}>
                    {text}
                </div>
        )
    }
}

export default Logo;
