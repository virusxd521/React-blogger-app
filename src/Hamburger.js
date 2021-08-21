import React from 'react';
import HamburgerSvg from './icon-hamburger.svg'

function Hamburger(props){
        return (
            <button onClick={props.onClick} className="mt-6 ml-auto mr-8">
                <img src={HamburgerSvg} />
            </button>
        )
}


export default Hamburger;