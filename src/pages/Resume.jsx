import Header from '../components/Header';

export default function Resume() {
    return (
        <div id="body-style" className="min-w-screen m-5 flex flex-column justify-center align-center text-white">
            <Header header='Resume' />

            <div id="text" className="ml-6">
                <h3 className="mt-3 text-lg">Download my resume <a href="https://drive.google.com/file/d/1lQMbOYH9p79SvMjsRIc_xlhxfwMv9AfD/view?usp=sharing" className="underline">here</a>.</h3>
                <div className="mt-3">
                    <h2 className="text-xl">Front-End Proficiencies</h2>
                    <ul className="ml-3">
                        <li>- HTML</li>
                        <li>- CSS</li>
                        <li>- JavaScript</li>
                        <li>- jQuery</li>
                        <li>- Tailwind</li>
                        <li>- Bootstrap</li>
                        <li>- React</li>
                    </ul>

                    <h2 className="text-xl mt-3">Back-End Proficiencies</h2>
                    <ul className="ml-3">
                        <li>- APIs</li>
                        <li>- Node.js</li>
                        <li>- Express.js</li>
                        <li>- MySQL, Sequelize</li>
                        <li>- MongoDB, Mongoose</li>
                        <li>- GraphQL</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}