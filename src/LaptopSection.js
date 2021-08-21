import LaptopSvg from './illustration-laptop-mobile.svg';
import LaptopSvgDesktop from './illustration-laptop-desktop.svg';
import MediaQuery from 'react-responsive';

function Laptop(){
    return (
        <section className="flex flex-col mb-14 mt-14 lg:grid grid-cols-2 grid-row-2 w-full">
            <MediaQuery maxWidth={1000}>
                <img src={LaptopSvg} />
            </MediaQuery>
            <MediaQuery minWidth={1000}>
                <img src={LaptopSvgDesktop} className="col-start-1 col-end-2 row-span-2 -ml-40" />
            </MediaQuery>
            <div className="m-auto flex flex-col lg:col-start-2 col-end-2">
                <h2 className="m-auto mt-10 mb-10 font-bold text-2xl text-indigo-900 lg:m-0 lg:mt-20 lg:mb-6 lg:font-medium">
                    Free, open, simple
                </h2>
                <p className="m-auto w-10/12 text-center text-gray-600 lg:m-0 lg:text-left lg:font-light">
                    Blogr is a free and open source application backed by a large community
                    of helpful developers. it supports features such as code syntax highlighting, RSS feed, social media integration, third party communicating tools, and works seamlessly with Google Analytics.
                    The architecture is clean and is relatively easy to learn.
                </p>
            </div>
            <div className="m-auto flex flex-col lg:col-start-2 col-end-2">
                <h2 className="m-auto mt-10 mb-10 font-bold text-2xl text-indigo-900 lg:m-0 lg:mt-10 lg:mb-6 lg:font-medium">
                    Powerful tooling
                </h2>
                <p className="m-auto w-10/12 text-center text-gray-600 lg:m-0 lg:text-left lg:font-light">
                    Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze,
                    but capable of producing even the most complicated sites.
                </p>
            </div>
        </section>
    )
}


export default Laptop;