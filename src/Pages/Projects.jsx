import projects from "../Components/projectList";
import "./Projects.css"

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";

const Projects = () => {


    // Capitalize category names
    const capitalizeCategory = (category) => {
        return category ? category.toUpperCase() : "";
    };

    return (
        <div className="projects-container">

            {/* Header */}
            <div className="projects-header">
                <h1>Explore Our Work</h1>
                <p>An overview of completed developments demonstrating our capability in delivering functional, innovative, and high-quality architectural solutions.</p>
            </div>


            {/* PROJECTS GRID */}
            {projects.length > 0 && (
                <div>
                
                    <div className="projects-grid">
                        {projects.map((project) => (

                            <Link to={`/projects/${project.id}`} key={project.id} className="project-other-card-link">

                               <div key={project.id} className="project-other-card">

                                  {/* Thumbnail */}
                                  <div className="project-other-thumbnails">

                                     <img
                                        src={project.thumbnail}
                                        alt={`${project.title} Thumbnail`}
                                     />
            
                                  </div>
                                  <span className="project-category">{capitalizeCategory(project.category)}</span>
                                  <h2>{project.title}</h2>
                                  <p className="project-other-subtitle">{project.location}</p>
                              </div>
                            </Link>

                        ))}
                    </div>
                </div>
            )}
    
        </div>
    );
};

export default Projects;