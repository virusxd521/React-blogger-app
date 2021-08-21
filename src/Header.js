import React from 'react'
import Logo from './logo.svg'
import Start from './Button-start';
import Learn from './Button-learn';
import Hamburger from './Hamburger';
import Close from './Close';
import Ul from './HeaderUl';
import MediaQuery from 'react-responsive';
import SignUp from './SignUpButton';
import HeaderList from './HeaderList';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clicked: false,
            li_clicked: false
            
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log(this.state.clicked);
        this.setState({clicked: !this.state.clicked});
    }

    render(){
        
        if(this.state.clicked){
            return (
                // 
                    <div 
                    className=
                    "bg-header-image bg-red-400 flex flex-col bg-left text-white rounded-bl-large pb-32"
                    >
                        <MediaQuery minWidth={1000}>
                            <p>ssss</p>
                        </MediaQuery>
                        <MediaQuery maxWidth={1000}>
                            <div className="flex space-x-40 pt-8">
                                <img src={Logo} className="pt-6 pl-6" />
                                <Close onClick={this.handleClick} />
                            </div>
                            <div 
                            className="rounded-10 text-center bg-white text-gray-600 ml-auto mr-auto mt-10 w-10/12"
                            >
                                <Ul />
                                <hr className="w-11/12 ml-auto mr-auto" />
                                <p className="m-6 text-lg font-bold">Login</p>
                                <button className="font-bold text-white mb-8 p-3 rounded-30 pl-10 pr-10 bg-gradient-to-r from-red-400 to-red-500">Sign up</button>
                            </div>
                        </MediaQuery>
                    </div>
                // </MediaQuery>
            )

        } else {
            return (
                    <div 
                    className=
                    "bg-header-image bg-red-400 flex flex-col bg-no-repeat bg-center bg-280%  lg:bg-170% lg:bg-left  text-white rounded-bl-large pb-32"
                    >
                        <MediaQuery minWidth={1000}>
                            <div className="flex pt-8">
                                <div className="flex">
                                    <img src={Logo} className="ml-20 pt-6 pl-6 " />
                                    <HeaderList />
                                </div>
                                <div className="flex flex-row ml-auto mr-20 items-end">
                                    <p>Login</p>
                                    <SignUp />
                                </div>
                            </div>
                            <MediaQuery maxWidth={1000}>
                                <h1 className="text-center font-extrabold text-3xl w-11/12 ml-auto mr-auto mt-24">
                                    A modern <br /> 
                                    publishing platform
                                </h1>
                            </MediaQuery> 

                            <MediaQuery minWidth={1000}>
                                <h1 className="text-center font-extrabold  w-11/12 ml-auto mr-auto mt-24 text-4xl w-full">
                                    A modern publishing platform
                                </h1>
                            </MediaQuery>
                            <p className="mt-8 m-auto text-center" >Grow you audience and build your online brand</p>
                            <div className="m-auto">
                                <Start />
                                <Learn />
                            </div>
                        </MediaQuery>
                        <MediaQuery maxWidth={1000}>
                            <div className="flex pt-8">
                                <img src={Logo} className="pt-6 pl-6 " />
                                <Hamburger  onClick={this.handleClick} />
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
                        </MediaQuery>
                    </div>
                
            )

        }
    }

}


export default Header;