import Editor from './illustration-editor-mobile.svg';
import EditorDesktop from './illustration-editor-desktop.svg';
import MediaQuery from 'react-responsive';

// ml-auto -mr-36

function Intro(){
    return (
        <section >
            <h1 className="m-auto mt-20 text-center mb-6 font-bold text-2xl w-10/12  text-indigo-900 ">Designed for the future</h1>
            <div className="flex flex-col lg:grid grid-rows-2 grid-cols-2 overflow-hidden">
                <MediaQuery maxWidth={1000}>
                    <img src={Editor} className="m-auto max-w-xs "/>
                </MediaQuery>
                <MediaQuery minWidth={1000}>
                    <img src={EditorDesktop} className="max-w-2xl row-span-2 col-start-2 col-end-2 justify-self-end -mr-44" />
                </MediaQuery>
                {/* <MediaQuery maxWidth={1000}> */}
                    <div className="col-start-1 col-end-1 row-start-1 row-span-1">
                        <h2 className="mt-10 mb-10 text-center w-9/12 m-auto font-bold text-2xl text-indigo-900 lg:mb-6 lg:text-left lg:w-8/12">
                            Introducing an extensible editor
                        </h2>
                        <p className="w-10/12 ml-auto mr-auto text-gray-600 lg:text-left lg:w-8/12 lg:font-light">
                            Blogr fatures an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                            The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown.
                            Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
                        </p>
                    </div>
                    <div>
                        <h2 className="mt-10 mb-10 text-center w-9/12 m-auto font-bold text-2xl text-indigo-900 lg:mb-6 lg:text-left lg:w-8/12 lg:mt-0" >Robust content management</h2>
                        <p className="w-10/12 ml-auto mr-auto text-center text-gray-600 lg:text-left lg:w-8/12 lg:font-light">
                            Flexible content management enables users to easily move through posts.
                            Increase the useability of your blog by adding customized categories,sections, format or flow. With this functionality, you're in full control.
                        </p>
                    </div>
                {/* </MediaQuery> */}
            </div>
        </section>
    )
}

export default Intro;