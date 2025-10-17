import { useParams } from "react-router-dom";
import projectList from "../Components/projectList"
import "./ProjectPage.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const ProjectsPage = () => {

    // Project page content
    const { projectId } = useParams();

    // Find the project by ID
    const project = projectList.find(p => p.id === parseInt(projectId));
    if (!project) return <p>Project not found</p>;

    return (
        <div className="project-page-cont">

             {/* Header */}
            <div className="project-page-header">
                 <h1>{project.title}</h1>
                 <p>{project.subtitle}</p>
            </div>


            {/* Project images */}
            <div className="project-page-images">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    slidesPerView={1}
                    className="project-page-swiper"
                  >
                    {project.images.map((img, idx) => (

                        <SwiperSlide key={idx}>
                            <img 
                                src={img}
                                alt={`Project ${project.title} - Image ${idx + 1}`}
                                className="project-page-image"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Project Description in separate paragraphs */}
            {project.description.map((para,idx) =>(
                <p key={idx}>{para}</p>
            ))}


            {/* Project Testimonials */}
             {project.testimonials && (
                <div className="projects-testimonial">
                    <h3>What our clients say:</h3>

                    {project.testimonials.map((testimonial, idx) => (
                        <blockquote key={idx}>"{testimonial}"</blockquote>
                    ))}
                    <footer>- {project.clientName}</footer>
                </div>
            )}
                
            {/* Project Meta Information */}
            <div className="project-page-meta">
                <p>Client: {project.clientName}</p>
                <p>Location: {project.location}</p>
                <p>Date: {project.dateAdded}</p>
            </div>

        </div>
    );
};

export default ProjectsPage;