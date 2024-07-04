import './About.css'
import aboutImg from '../../assets/images/about.jpeg'

function About () {
    return (
    <section id="about">
    <div className="about">
        <h2 className="title">About Me</h2>
        <img className="about-img" src= {aboutImg} alt="" />
        <p className="info">
            I am an ambitious and driven individual with experience in various fields. I have recently graduated with a
            degree in Computer Engineering from Linnaeus University and am seeking opportunities to advance my career in
            this domain. I possess strong skills in forklift operation, machine handling, and computer installation, as well
            as experience working as a teaching assistant. My goal is to combine my education and work experience to
            contribute to a successful organization and continue growing as a professional in computer engineering.
        </p>
        </div>
    </section>
    )
}


export default About