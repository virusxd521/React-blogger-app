import Logo from './logo.svg'

function Footer(){
    return (
        <footer className="bg-gray-800 text-white rounded-tr-large flex flex-col">
            <img src={Logo} className="m-auto mt-12" />
            <div className="m-auto mt-10">
                <div>
                    <p className="text-center font-bold mb-6 mt-6 text-base">Product</p>
                    <ul className="text-center text-gray-400">
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Marketplace</li>
                        <li>Features</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div>
                    <p className="text-center font-bold mb-6 mt-6 text-base">Company</p>
                    <ul className="text-center text-gray-400">
                        <li>About</li>
                        <li>Team</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="pb-12">
                    <p className="text-center font-bold mb-6 mt-6 text-base">Connect</p>
                    <ul className="text-center text-gray-400">
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