import Phones from './illustration-phones.svg'

function Phone(){
    return (
        <section className="text-white ">
            <img src={Phones} className="relative mt-20 lg:float-left -mt-10  lg:max-w-sm lg:-mt-12 lg:absolute lg:w-4/12 lg:ml-16"  />
            <div className="-mt-44 bg-gray-700 rounded-tr-large rounded-bl-large flex flex-col w-full pt-32 pb-20 lg:pt-8 lg:mt-20 lg:pb-18 ">
                <h2 className="mt-20 mb-10 text-center font-bold text-4xl lg:mt-8 lg:ml-auto lg:w-1/2 lg:mr-32 lg:mb-4 lg:inline-block lg:text-2xl ">State of the Art Infrastructure</h2>
                <p className="text-gray-300 text-center leading-7 w-10/12 m-auto lg:m-0 lg:ml-auto lg:mr-32 lg:w-5/12 lg:text-left  lg:text-xs lg:leading-6">With reliability and speed in mind, worldwide 
                data centers provide the backbone
                for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are,
                keeping your site competitive.
                </p>
            </div>
        </section>
    )
}

export default Phone;