import LaptopSvg from './illustration-laptop-mobile.svg';

function Laptop(){
    return (
        <section className="flex flex-col mb-14 mt-14">
            <img src={LaptopSvg} />
            <div className="m-auto flex flex-col">
                <h2 className="m-auto mt-10 mb-10 font-bold text-2xl text-indigo-900">
                    Free, open, simple
                </h2>
                <p className="m-auto w-10/12 text-center text-gray-600">
                    Blogr is a free and open source application backed by a large community
                    of helpful developers. it supports features such as code syntax highlighting, RSS feed, social media integration, third party communicating tools, and works seamlessly with Google Analytics.
                    The architecture is clean and is relatively easy to learn.
                </p>
            </div>
            <div className="m-auto flex flex-col">
                <h2 className="m-auto mt-10 mb-10 font-bold text-2xl text-indigo-900">
                    Powerful tooling
                </h2>
                <p className="m-auto w-10/12 text-center text-gray-600">
                    Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze,
                    but capable of producing even the most complicated sites.
                </p>
            </div>
        </section>
    )
}


export default Laptop;