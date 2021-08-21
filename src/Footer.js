import Logo from './logo.svg';
import MediaQuery from 'react-responsive';


function Footer(){
    return (
        <footer className="bg-gray-800 text-white rounded-tr-large flex flex-col lg:flex-row pb-20">
            <img src={Logo} className="m-auto mt-12  lg:w-20 lg:inline-block lg:max-h-8 lg:ml-40 lg:mr-0" />
            <div className="m-auto mt-10 lg:flex flex-row lg:m-0 lg:mr-auto lg:ml-56 lg:space-x-32 lg:mt-5">
                <div>
                    <p className="text-center font-bold mb-6 mt-6 text-base lg:text-sm lg:text-left">Product</p>
                    <ul className="text-center text-gray-400 lg:text-sm lg:text-left">
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Marketplace</li>
                        <li>Features</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div>
                    <p className="text-center font-bold mb-6 mt-6 text-base lg:text-sm lg:text-left">Company</p>
                    <ul className="text-center text-gray-400 lg:text-sm lg:text-left">
                        <li>About</li>
                        <li>Team</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <p className="text-center font-bold mb-6 mt-6 text-base lg:text-sm lg:text-left">Connect</p>
                    <ul className="text-center text-gray-400 lg:text-sm lg:text-left">
                        <li>Contact</li>
                        <li>Newsletter</li>
                        <li>Linkedin</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer