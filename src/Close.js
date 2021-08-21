import React from 'react';
import CloseSvg from './icon-close.svg';

function Close(props){
        return (
            <button onClick={props.onClick} className="mt-6 ml-auto">
                <img src={CloseSvg} />
            </button>
        )
}


export default Close;