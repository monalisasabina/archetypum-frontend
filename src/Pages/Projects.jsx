const Projects = () => {

    const projects = [
        { id: 1, name: "Project Alpha", images: ["image1.jpg", "image2.jpg"], description: "Description of Project Alpha" },
        { id: 2, name: "Project Beta", images: ["image3.jpg", "image4.jpg"], description: "Description of Project Beta" },
        { id: 3, name: "Project Gamma", images: ["image5.jpg", "image6.jpg"], description: "Description of Project Gamma" },
    ];

    return (
        <div className="projects-container">
            <div className="projects-header">
                <h1>Projects</h1>
                <p>Here you can find a list of our projects.</p>
            </div>

            <div className="projects-list">
                {projects.map((project) => (
                    <div key={project.id} className="project-item">
                        <h2>{project.name}</h2>
                        <div className="project-images">
                            {project.images.map((image, index) => (
                                <img key={index} src={image} alt={`${project.name} ${index + 1}`} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;