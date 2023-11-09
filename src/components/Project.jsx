export default function Project({ name, screenshot, github, deploy }) {
    return (
        <div id="project" className="">
        {console.log(name, screenshot, github, deploy)}
            <img src={screenshot}/>
        </div>
    );
}