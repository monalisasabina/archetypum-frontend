import { useParams } from "react-router-dom";
import projectList from "../Components/projectList"

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

        </div>
    );
};

export default ProjectsPage;