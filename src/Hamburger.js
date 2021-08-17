import React from 'react';
import HamburgerSvg from './icon-hamburger.svg'

class Hamburger extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clicked: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log("heyyyy");
    }

    render(){
        return (
            <button onClick={this.handleClick} className="mt-6">
                <img src={HamburgerSvg} />
            </button>
        )
    }

}


export default Hamburger;