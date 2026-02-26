import homePic from "../../Pictures/Modern Architecture Design in ARCHICAD.png"
import "./Home.css"
import { useNavigate } from "react-router-dom"

function Home(){

    const navigate = useNavigate();

    return(
        <div className= "home-container">

            <div className="home-content">

                {/* Left Content */}
                <div className="home-text">

                    {/* Header */}
                    <div className="home-header">
                       <h1>Designing Spaces That Inspire</h1>

                       <p>
                          Welcome to <strong>Archetypum-Africa</strong>, where we transform visions into reality through innovative and sustainable architectural designs
                       </p>
                    </div>

                    {/* Buttons */}
                    <div className="home-buttons">
                        <button 
                              className="home-button"
                              onClick={() => navigate("/projects")}
                            >View Projects
                        </button>

                        <button 
                               className="home-button"
                               onClick={() => navigate("/contact_us")}
                            >Get in Touch
                        </button>
                    </div>
                </div>

                {/* Right Content */}
                <div className="home-image">
                    <img src={homePic} alt="House Design Picture" />
                </div>
            </div>

        </div>
        
    )
}
export default Home