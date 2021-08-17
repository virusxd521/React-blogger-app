import Editor from './illustration-editor-mobile.svg';

function Intro(){
    return (
        <section className="flex flex-col">
            <h1 className="m-auto mt-20 text-center mb-6 font-bold text-2xl w-10/12  text-indigo-900 ">Designed for the future</h1>
            <img src={Editor} className="m-auto max-w-xs"/>
            <div>
                <h2 className="mt-10 mb-10 text-center w-9/12 m-auto font-bold text-2xl text-indigo-900">
                    Introducing an extensible editor
                </h2>
                <p className="w-10/12 m-auto text-center text-gray-600">
                    Blogr fatures an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                    The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown.
                    Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
                </p>
            </div>
            <div>
                <h2 className="mt-10 mb-10 text-center w-9/12 m-auto font-bold text-2xl text-indigo-900" >Robust content management</h2>
                <p className="w-10/12 m-auto text-center text-gray-600">
                    Flexible content management enables users to easily move through posts.
                    Increase the useability of your blog by adding customized categories,sections, format or flow. With this functionality, you're in full control.
                </p>
            </div>
        </section>
    )
}

export default Intro;