import projects from "./projectList";
import "./Projects.css"

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const Projects = () => {

    const recentProjects = projects.slice(0, 5); // Get the first 5 projects
    const otherProjects = projects.slice(5); // Get the remaining projects

    return (
        <div className="projects-container">
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
                  slidesPerView={1}
               >
               {recentProjects.map((project) => (
                     <SwiperSlide key={project.id}>
                         <div className="project-card">
                            <h2>{project.name}</h2>
                            <div className="project-images">
                                {project.images.map((image, index) => (
                                    <img
                                       key={index}
                                       src={image}
                                       alt={`${project.name} ${index + 1}`}
                                    />
                                ))}
                            </div>
                            <p className="project-description">{project.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* OTHER PROJECTS */}
            {otherProjects.length > 0 && (
                <div>
                    <h2 className="section-title">Other Projects</h2>
                    <div className="projects-grid">
                        {otherProjects.map((project) => (
                            <div key={project.id} className="project-card">
                                <h2>{project.name}</h2>
                                <div className="project-images">
                                    {project.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`${project.name} ${index + 1}`}
                                        />
                                    ))}
                                </div>
                                <p className="project-description">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
    
        </div>
    );
};

export default Projects;