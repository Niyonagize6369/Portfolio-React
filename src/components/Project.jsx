import projectsData from "../data/project.json";
import "../styles/Project.css";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";


const imageMap={
  "project1.jpg":project1,
  "project2.jpg":project2,
  "project3.jpg":project3,

}

const Projects = () => {
  // console.log(projectsData);
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={imageMap[project.image]} alt= {project.title}/>
            {/* <img src={project2} alt= "project2"/>
            <img src={project3} alt= "project3"/> */}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">Live Demo</a>
              <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;