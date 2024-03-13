export default function Project({ name, screenshot, github, deploy, description, tech }) {
    return (
        <div id="project-card" className="m-4 flex flex-column text-center text-white w-2/5">
            <a href={deploy}><div id="project-header" className="flex flex-column text-center">
                <h2 className="text-xl mb-1">{name}</h2>
                <div className="flex flex-row flex-wrap justify-center align-center justify-evenly mt-2">
                    {tech.map((item, index) => <p key={index} className="mr-1">{item}</p>)}
                </div>
                <img id="project-img" src={screenshot} width="600" className="self-center"/>
            </div></a>
            
            <div id="project-text" className="flex flex-row justify-evenly mt-1">
                <a href={github} className="flex flex-row" target="_blank">
                    <h3>Github Repo</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-2 text-slate-400 hover:text-white" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                    </svg>
                </a>
                <a href={deploy} className="flex flex-row" target="_blank">
                    <h3>Deployed Project</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-2 text-slate-400 hover:text-white" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                    </svg>
                </a>
            </div>  

            <div id="project-description" className="mt-3 flex flex-column justify-center align-center">
                <p>{description}</p>
            </div>
        </div>
    );
}