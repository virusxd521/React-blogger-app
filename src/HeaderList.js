
import LightArrow from './icon-arrow-light.svg';

function HeaderList(){
            return (
                    <ul className="ml-10 flex space-x-5 self-end">
                        <li className="flex flex-col">
                            <div className="flex">
                                <a>Product</a>
                                <img src={LightArrow} className="ml-2 h-2 self-center" />
                            </div>
                        </li>
                        <li className="flex">
                            <a>Company</a>
                            <img src={LightArrow} className="ml-2 h-2 self-center"/>
                        </li>
                        <li className="flex">
                            <a>Connect</a>
                            <img src={LightArrow} className="ml-2 h-2 self-center" />
                        </li>
                    </ul>
                )
}

export default HeaderList;