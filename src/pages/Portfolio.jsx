import Header from '../components/Header';
import Project from '../components/Project';

let projects = [
    {
        name: "Mosaic Planner",
        screenshot: "/indurkhya-portfolio/images/planner-screenshot.png",
        github: "https://github.com/ramitaarora/mosaic-planner",
        deploy: "https://mosaic-planner-112e49ce3b90.herokuapp.com/",
        description: `This project is a full-stack application that combines different aspects of a traditional planner: a calendar, schedule, daily items, reminders/notes, and goals. A user will be able to add, view, update and delete anything via the dashboard.`,
        tech: ['React', 'JavaScript', 'MySQL', 'Sequelize', 'Node', 'Express']
    },
    {
        name: "Meal Match",
        screenshot: "/indurkhya-portfolio/images/meal-match-screenshot.png",
        github: "https://github.com/ramitaarora/meal-match",
        deploy: "https://ramitaarora.github.io/meal-match/",
        description: `This project is a front-end recipe web application that allows users to "match" with their ideal meal or drink, much like a dating app. When a user opens the webpage, they will see a list of options to filter their meals, "dislike" the presented meals to flip through them, or "like" a meal and view the recipe. The user will also be able to search by recipe name, meal type or ingredients.`,
        tech: ['React', 'JavaScript', 'CSS']
    },
    {
        name: "Chit Chat",
        screenshot: "/indurkhya-portfolio/images/chit-chat-screenshot.png",
        github: "https://github.com/ramitaarora/chit-chat",
        deploy: "https://chit-chat-wechatalot-00f4f8dc2d8e.herokuapp.com/",
        description: `A full-stack web chat application where a user may sign up and log in, edit their profile, add friends, chat with friends. As a collaboration project, Ramita contributed by building the database with routes and controllers from the front end to the back end. She also set up the web socket to display messages in real time to different users, as well as save the chat history.`,
        tech: ['React', 'Node.js', 'Apollo GraphQL', 'MongoDB', 'Socket.io']
    }
]

export default function Portfolio() {
    return (
        <div id="portfolio" className="min-w-screen m-4 flex flex-column justify-center align-center">
            <Header header='Portfolio' /> 

            <div id="project-cards" className="min-w-screen flex flex-row flex-wrap justify-center align-center">
            {projects.map((item, index) => {
                return <Project key={index} name={item.name} screenshot={item.screenshot} github={item.github} deploy={item.deploy} description={item.description} tech={item.tech}/>
            })}
            </div>
            
        </div>
    )
}