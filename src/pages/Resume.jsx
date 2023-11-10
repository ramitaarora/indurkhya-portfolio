import Header from '../components/Header';

const frontEnd = ["HTML", "CSS", "JavaScript", "jQuery", "Tailwind", "Bootstrap", "Photoshop", "Canva", "React"];
const backEnd = ["Python", "APIs", "Node.js", "Express.js", "MySQL", "Sequelize", "MongoDB", "Mongoose", "GraphQL"];

export default function Resume() {
    return (
        <div id="body-style" className="min-w-screen m-5 flex flex-column justify-center align-center text-white">
            <Header header='Resume' />
            <div className="flex flex-row justify-center align-center">

                <div id="text" className="ml-6">
                    <h3 className="mt-3 text-lg text-center">Download my resume <a href="https://drive.google.com/file/d/1lQMbOYH9p79SvMjsRIc_xlhxfwMv9AfD/view?usp=sharing" className="underline">here</a>.</h3>
                    <div>
                        <h2 className="text-xl mt-3 text-center">Front-End Proficiencies</h2>
                        <ul className="ml-3 mt-4 flex flex-row flex-wrap align-center justify-center text-center">
                            {frontEnd.map((skill, index) => {
                                return <div id="skill" className="m-3 hover:animate-bounce"><li id="skill-text" key={index}>{skill}</li></div>
                            })}
                        </ul>

                        <h2 className="text-xl mt-3 text-center">Back-End Proficiencies</h2>
                        <ul className="ml-3 mt-4 flex flex-row flex-wrap align-center justify-center text-center">
                        {backEnd.map((skill, index) => {
                            return <div id="skill" className="m-3 hover:animate-bounce"><li id="skill-text" key={index}>{skill}</li></div>
                        })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}