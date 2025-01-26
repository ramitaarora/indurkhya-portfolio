import Header from '../components/Header';

export default function About() {
    return (
        <div id="about" className="m-5">
            <Header header='About Me' />
            <div id="about-section" className="flex flex-row justify-center">
                <p className="text-white ml-6">
                Ramita Indurkhya is a web developer. 
                <br></br><br></br>
                When she was younger, she would frequently build play websites for fun. Later on as she was pursuing music, she was prompted to make a website that served as a portfolio and decided to do it herself. Her websites attracted her clients and aided building her business for both her recording and teaching studios.
                <br></br><br></br>
                Several years later, she re-kindled her interest for building websites and went on to complete the Full Stack Web Development Certificate at Pasadena City College in August 2023 and the UCLA Full Stack Web Development Bootcamp in November 2023.
                <br></br><br></br>
                Presently, Ramita is continuing her journey in practicing building front-end and full-stack applications and volunteering with the Pleasant Hill Instructional Garden in developing their website. She enjoys developing her projects with React, SQL, Express and Node.
                </p>

                <img src="/indurkhya-portfolio/images/ramita.JPG" width="300px" alt="ramita" className="m-5 rounded-full"/>
            </div>
            
        </div>
        
    )
}