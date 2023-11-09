import Header from '../components/Header';

export default function About() {
    return (
        <div id="body-style" className="m-5">
            <Header header='About Me' />
            <div id="about-section" className="flex flex-row justify-center">
                <p className="text-white">
                Ramita Indurkhya is an aspiring web developer. 
                <br></br><br></br>
                She has been designing websites for quite a few years on her own. When she was younger, she would frequently build play websites for fun. Later on as she was pursuing music, she was prompted to make a website that served as a portfolio and decided to do it herself. 
                <br></br><br></br>
                Several years later, she re-kindled her interest for building websites and signed up for Codeacademy, learning HTML and CSS for the first time. She then went on to complete the Full Stack Web Development Certificate at Pasadena City College in 2023. 
                <br></br><br></br>
                Presently, Ramita is taking the UCLA Coding Bootcamp. She is continuing her journey from web design to development and has a great interest in Front End Engineering.
                </p>

                <img src="/images/ramita.JPG" width="300px" alt="ramita" className="m-5 rounded-full"/>
            </div>
            
        </div>
        
    )
}