import Header from '../components/Header';

const frontEnd = ["HTML", "CSS", "JavaScript", "jQuery", "Tailwind", "Bootstrap", "Photoshop", "Canva", "React"];
const backEnd = ["Python", "APIs", "Node.js", "Express.js", "MySQL", "Sequelize", "MongoDB", "Mongoose", "GraphQL"];

export default function Resume() {
    return (
        <div id="body-style" className="min-w-screen m-5 flex flex-column justify-center align-center text-white">
            <Header header='Resume' />
            <div className="flex flex-row justify-center align-center">

                <div id="text" className="ml-6">
                    <h2 className="mt-3 mb-5 text-xl text-center flex flex-row justify-center">Download my resume:
                        <a href="https://drive.google.com/file/d/1lQMbOYH9p79SvMjsRIc_xlhxfwMv9AfD/view?usp=sharing" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="ml-5 text-slate-400 hover:text-white" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg>
                        </a>
                    </h2>
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