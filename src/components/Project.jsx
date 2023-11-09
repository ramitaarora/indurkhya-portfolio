export default function Project({ name, screenshot, github, deploy }) {
    return (
        <div id="project-card" className="m-3">
            <img src={screenshot} width="600"/>
        </div>
    );
}