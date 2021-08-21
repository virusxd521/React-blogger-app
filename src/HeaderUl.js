import React from 'react';
import DownArrow  from './icon-arrow-dark.svg';


class Ul extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ul_clicked: false
        }

    }

    render(){
        return (
            <ul className="hover: cursor-pointer">
                <li className="flex m-4 text-lg font-bold">
                    <a className="ml-24">Product</a>
                    <img src={DownArrow} className="w-2.5 h-2.5 mt-auto mb-auto ml-4" />
                </li>
                <li className="flex m-4 text-lg font-bold">
                    <a className="ml-24">Company</a>
                    <img src={DownArrow} className="w-2.5 h-2.5 mt-auto mb-auto ml-4" />
                </li>
                <li className="flex m-4 text-lg font-bold">
                    <a className="ml-24">Contect</a>
                    <img src={DownArrow} className="w-2.5 h-2.5 mt-auto mb-auto ml-4" />
                </li>
            </ul>
        )
    }
}


export default Ul;