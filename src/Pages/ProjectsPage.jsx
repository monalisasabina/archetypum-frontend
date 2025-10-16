import { useParams } from "react-router-dom";
import projectList from "../Components/projectList"

const ProjectsPage = () => {

    // Project page content
    const { projectId } = useParams();

    // Find the project by ID
    const project = projectList.find(p => p.id === parseInt(projectId));
    if (!project) return <p>Project not found</p>;

    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
        </div>
    );
};

export default ProjectsPage;