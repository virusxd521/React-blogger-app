import Phones from './illustration-phones.svg'

function Phone(){
    return (
        <section className="text-white">
            <img src={Phones} className="relative mt-20" />
            <div className=" -mt-44 bg-gray-700 rounded-tr-large rounded-bl-large pt-32 pb-20 ">
                <h2 className="mt-20 mb-10 text-center font-bold text-4xl">State of the Art Infrastructure</h2>
                <p className="text-gray-300 text-center leading-7 w-10/12 m-auto">With reliability and speed in mind, worldwide 
                data centers provide the backbone
                for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are,
                keeping your site competitive.
                </p>
            </div>
        </section>
    )
}

export default Phone;