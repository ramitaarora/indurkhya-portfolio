import Header from '../components/Header';
import Project from '../components/Project';

let projects = [
    {
        name: "Meal Match",
        screenshot: "/images/meal-match-screenshot.png",
        github: "https://github.com/ramitaarora/meal-match",
        deploy: "https://ramitaarora.github.io/meal-match/",
    },
    {
        name: "Tech Blog",
        screenshot: "/images/tech-blog-screenshot.png",
        github: "https://github.com/ramitaarora/mvc-tech-blog",
        deploy: "https://mvc-tech-blog-indurkhya-ecc84c878b3c.herokuapp.com/",
    },
    {
        name: "Weather Dashboard",
        screenshot: "/images/weather-screenshot.png",
        github: "https://github.com/ramitaarora/weather-dashboard",
        deploy: "https://ramitaarora.github.io/weather-dashboard/",
    },
    {
        name: "Travel Guide",
        screenshot: "/images/travel-guide-screenshot.png",
        github: "https://github.com/ramitaarora/travel-guide",
        deploy: "https://ramitaarora.github.io/travel-guide/",
    },
    {
        name: "Wine Wizard",
        screenshot: "/images/wine-wizard-screenshot.png",
        github: "https://github.com/ramitaarora/wine-wizard",
        deploy: "https://wine-wizard-a6de255e2c53.herokuapp.com/",
    },
    {
        name: "Coding Quiz",
        screenshot: "/images/coding-quiz-screenshot.png",
        github: "https://github.com/ramitaarora/coding-quiz-challenge",
        deploy: "https://ramitaarora.github.io/coding-quiz-challenge/",
    },
]

export default function Portfolio() {
    return (
        <div id="body-style" className="min-w-screen m-5 flex flex-column justify-center align-center">
            <Header header='Portfolio' /> 

            <div id="project-cards" className="min-w-screen mt-3 w-full flex flex-row flex-wrap justify-center align-center">
            {projects.map((item, index) => {
                return <Project key={index} name={item.name} screenshot={item.screenshot} github={item.github} deploy={item.deploy} />
            })}
            </div>
            
        </div>
    )
}