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

    // Sort projects by date
    const sortedProjects = [
        ...projects].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    
    
    // Project functions
        // Recent projects
        const recentProjects = sortedProjects.slice(0, 3); 

        // Other projects
        const otherProjects = sortedProjects.slice(3); // Get the remaining projects

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

            {/* RECENT PROJECTS */}
            <div className="recent-projects">

                <h2 className="section-title">Recent Projects</h2>
             
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={10}
                    slidesPerView={2}
                    autoplay={{
                        delay: 4000,   //4 seconds between slides
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {slidesPerView:1},   //mobile
                        768: {slidesPerView:2},   //large tablets
                        1024: {slidesPerView:2}   //desktop
                    }}
                  >
                  {recentProjects.map((project) => (
                     <SwiperSlide key={project.id}>

                         <Link to={`/projects/${project.id}`} className="all-projects-link">
                           <div className="project-card">

                              {/* Project Thumbnail */}
                              <div className="project-thumbnail">
                                <img
                                    src={project.thumbnail}
                                    alt={`${project.title} Thumbnail`}
                                />
                                
                              </div>

                               {/* Project Content */}
                              <div className="project-card-content">

                                <h2>{project.title}</h2>
                                <p className="project-subtitle">{project.subtitle}</p>

                                {/* Read More Button */}
                                {/* <Link to={`/projects/${project.id}`} className="project-link">
                                    <button className="project-button">Uncover More</button>
                                </Link> */}

                               </div>
                        
                            </div>
                        </Link> 
                     </SwiperSlide>
                   ))}
                 </Swiper>
          
            </div>
            
            

            {/* OTHER PROJECTS */}
            {otherProjects.length > 0 && (
                <div>
                    <h2 className="section-other-title">Other Projects</h2>

                    <p>Discover more spaces we have transformed through design and innovation.</p>

                    <div className="projects-grid">
                        {otherProjects.map((project) => (

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