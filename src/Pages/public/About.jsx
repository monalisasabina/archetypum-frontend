import "./About.css"
import architectureTeam from "../../assets/Pictures/Diverse Team in Front of House.png"

function About(){
    return(
        <div className="about-wrapper">
            <div className="about-container">
                
                <h1>About Us</h1>
            
            </div>

            <div className="about-content">

                <div className="about-image">
                    <img src={architectureTeam} alt="Diverse Team in Front of House" />
                </div>

                <div className="about-text">
                    <p>
                        At  <strong> Archetypum-Africa</strong>, we believe that great architecture is more than just buildings. It’s about creating spaces that inspire, connect, and endure. Our work blends functionality with creativity, bringing together innovative design and sustainable practices to meet the needs of modern living.
                    </p>
                
                    <p>
                       From concept to completion, we collaborate closely with our clients to transform ideas into timeless structures. Whether it’s residential, commercial, or community projects, our focus is on delivering thoughtful designs that reflect identity, culture, and purpose.
                    </p>

                    <p>
                        With every project, we strive to balance aesthetics and practicality, creating spaces that not only look beautiful but also improve the way people live, work, and interact.
                     </p>

                    <p>
                       At  <strong> Archetypum-Africa</strong>, architecture is not just about structures; it’s about shaping environments that tell stories, foster connections, and leave a lasting impact for generations to come.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default About