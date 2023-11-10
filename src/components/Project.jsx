export default function Project({ name, screenshot, github, deploy }) {
    return (
        <a href={deploy}><div id="project-card" className="m-3 flex flex-column text-center text-white ">
            <h2 className="text-xl mb-1">{name}</h2>    
            <img id="project-img" src={screenshot} width="600"/>

            <div id="project-text" className="flex flex-row justify-evenly mt-1">
                <a href={github}><h3>Github Repo</h3></a>
                <a href={deploy}><h3>Deployed Project</h3></a>
            </div>  
        </div></a>
    );
}