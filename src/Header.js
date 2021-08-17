import React from 'react'
import Logo from './logo.svg'
import Start from './Button-start';
import Learn from './Button-learn';
import Hamburger from './Hamburger';

function Header(){
    return (
        <div 
        className=
        "bg-header-image bg-red-400 flex flex-col bg-center  text-white rounded-bl-large pb-32"
        >
            <div className="flex space-x-40 pt-8">
                <img src={Logo} className="pt-6 pl-6" />
                <Hamburger />
            </div>
            <h1 className="text-center font-extrabold text-3xl w-11/12 ml-auto mr-auto mt-24">
                A modern <br /> 
                publishing platform
            </h1>
            <p className="mt-8 m-auto text-center" >Grow you audience and build your online brand</p>
            <div className="m-auto">
                <Start />
                <Learn />
            </div>
        </div>
    )
}


export default Header;