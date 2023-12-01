import Header from '../components/Header';
import Project from '../components/Project';

let projects = [
    {
        name: "Meal Match",
        screenshot: "/images/meal-match-screenshot.png",
        github: "https://github.com/ramitaarora/meal-match",
        deploy: "https://ramitaarora.github.io/meal-match/",
        description: `This project is a front-end recipe web application that allows users to "match" with their ideal meal or drink, much like a dating app. When a user opens the webpage, they will see a list of options to filter their meals, "dislike" the presented meals to flip through them, or "like" a meal and view the recipe. The user will also be able to search by recipe name, meal type or ingredients.`,
        tech: ['React', 'JavaScript', 'CSS']
    },
    {
        name: "Chit Chat",
        screenshot: "/images/chit-chat-screenshot.png",
        github: "https://github.com/ramitaarora/chit-chat",
        deploy: "https://chit-chat-wechatalot-00f4f8dc2d8e.herokuapp.com/",
        description: `A full-stack web chat application where a user may sign up and log in, edit their profile, add friends, chat with friends. A collaboration project with Justin Chun, William Gomez, Eric Lee and Jamie Han. Ramita contributed to building the database with routes and controllers from the front end to the back end. She also set up the web socket to display messages in real time to different users, as well as save the chat history.`,
        tech: ['React', 'CSS', 'Node.js', 'Express.js', 'Apollo GraphQL', 'MongoDB', 'Socket.io']
    },
    {
        name: "Tech Blog",
        screenshot: "/images/tech-blog-screenshot.png",
        github: "https://github.com/ramitaarora/mvc-tech-blog",
        deploy: "https://mvc-tech-blog-indurkhya-ecc84c878b3c.herokuapp.com/",
        description: `This project is a full-stack CRUD website, similar to WordPress and other CMS websites. Users may sign up and log in to write, edit and delete blog posts. They may also comment on other user's blog posts.`,
        tech: ['JavaScript', 'CSS', 'SQL', 'MySQL', 'Sequelize']
    },
    {
        name: "Weather Dashboard",
        screenshot: "/images/weather-screenshot.png",
        github: "https://github.com/ramitaarora/weather-dashboard",
        deploy: "https://ramitaarora.github.io/weather-dashboard/",
        description: `A front-end weather dashboard that fetches from the OpenWeather API and displays the current forecast, as well as the 5-day forecast. Users are able to search by city to display the weather.`,
        tech: ['JavaScript', 'CSS', 'Fetch API']
    },
]

export default function Portfolio() {
    return (
        <div id="body-style" className="min-w-screen m-4 flex flex-column justify-center align-center">
            <Header header='Portfolio' /> 

            <div id="project-cards" className="min-w-screen mt-3 flex flex-row flex-wrap justify-center align-center">
            {projects.map((item, index) => {
                return <Project key={index} name={item.name} screenshot={item.screenshot} github={item.github} deploy={item.deploy} description={item.description} tech={item.tech}/>
            })}
            </div>
            
        </div>
    )
}