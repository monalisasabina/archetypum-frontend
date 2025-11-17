import projects from "../Components/projectList";
import { useState } from "react";
import "./Projects.css"

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";

const Projects = () => {

    // States
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Get unique categories from projects
    const categories = ["All", ...new Set(projects.map(project => project.category))];

    // Filter projects by category
    const filteredProjects = selectedCategory === "All" 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);
    
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

            {/* Category Filter */}
            <div className="filter-bar">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() =>setSelectedCategory(category)}
                        className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                    >
                        {capitalizeCategory(category)}

                    </button>
                 ))}
            </div>

           {/* Projects Count */}
           <p className="project-count">
              Showing {filteredProjects.length} {selectedCategory === "all" ? "" : selectedCategory} project{filteredProjects.length !== 1 ? "s" : ""}
           </p>
            

            {/* PROJECTS GRID */}
            {filteredProjects.length > 0 ? (
                
                    <div className="projects-grid">
                        {filteredProjects.map((project) => (
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
                   )  : (
                        <div className="empty-state">
                            <p>No projects found in this category.</p>
                        </div>
                    )}    
        </div>
    
    
    );
};

export default Projects;