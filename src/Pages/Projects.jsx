import projects from "../Components/projectList";
import "./Projects.css"

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";

const Projects = () => {

    // Sort projects by date
    const sortedProjects = [
        ...projects.sort((a, b) => new Date(b.date) - new Date(a.date))
    ]
    
    // Project functions
    const recentProjects = sortedProjects.slice(0, 5); // Get the first 5 projects
    const otherProjects = sortedProjects.slice(5); // Get the remaining projects

    return (
        <div className="projects-container">

            {/* Header */}
            <div className="projects-header">
                <h1>Projects</h1>
                <p>Here you can find a list of our projects.</p>
            </div>

            {/* RECENT PROJECTS */}
            <h2 className="section-title">Recent Projects</h2>
            <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  spaceBetween={30}
                  slidesPerView={3}
               >
               {recentProjects.map((project) => (
                     <SwiperSlide key={project.id}>
                         <div className="project-card">
                            <h2>{project.title}</h2>
                            <div className="project-thumbnail">
                                <img
                                    src={project.thumbnail}
                                    alt={`${project.title} Thumbnail`}
                                />
                                
                            </div>
                            <p className="project-subtitle">{project.subtitle}</p>

                            {/* Read More Button */}
                            <Link to={`/projects/${project.id}`} className="project-link">
                                <button className="project-button">Read More</button>
                            </Link>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* OTHER PROJECTS */}
            {otherProjects.length > 0 && (
                <div>
                    <h2 className="section-other-title">Other Projects</h2>
                    <div className="projects-grid">
                        {otherProjects.map((project) => (

                            <Link to={`/projects/${project.id}`} key={project.id} className="project-other-card-link">

                               <div key={project.id} className="project-other-card">
                                  <h2>{project.title}</h2>
                                  <div className="project-other-thumbnails">

                                     <img
                                        src={project.thumbnail}
                                        alt={`${project.title} Thumbnail`}
                                     />
                                
                                  </div>
                                  <p className="project-other-subtitle">{project.subtitle}</p>
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