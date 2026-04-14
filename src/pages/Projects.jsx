import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Projects.css';

//Imagenes proyectos
import project1img1 from '../assets/projects/project1-img1.png';
import project2img1 from '../assets/projects/project2-img1.png';
import project2img2 from '../assets/projects/project2-img2.png';
import project2img3 from '../assets/projects/project2-img3.png';
import project2img4 from '../assets/projects/project2-img4.png';
import project2img5 from '../assets/projects/project2-img5.png';

const ProjectCard = ({ title, description, date, githubLink, images, techStack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="project-card">
      <div className="project-gallery">
        <img 
          src={images[currentImageIndex]} 
          alt={title} 
          className="project-image"
        />
        {images.length > 1 && (
          <>
            <button className="gallery-btn prev" onClick={prevImage}>❮</button>
            <button className="gallery-btn next" onClick={nextImage}>❯</button>
            <div className="image-counter">
              {currentImageIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <p className="project-date">{date}</p>
        
        {techStack && techStack.length > 0 && (
          <div className="tech-stack">
            {techStack.map((tech, index) => (
              <span key={index} className="tech-flag">{tech}</span>
            ))}
          </div>
        )}
        
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
          View on GitHub →
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const navigate = useNavigate();

  const projectsData = [
    {
      title: "Arithmetic Logic Engine",
      description: "A minimalist web application engineered for high-precision arithmetic logic, featuring edge-case handling and seamless DOM manipulation.",
      date: "2026",
      githubLink: "https://github.com/giannijaramillo/calculator",
      images: [project1img1],
      techStack: ["JavaScript ES6", "Algorithms", "CSS Grid", "UI/UX Design"]
    },
    {
      title: "Pokemon Battle Simulator",
      description: "A high-fidelity Nintendo Switch interface emulator focused on complex state management and asynchronous data integration via PokeAPI.",
      date: "2026",
      githubLink: "https://github.com/giannijaramillo/PokemonBattle",
      images: [
        project2img1,
        project2img2,
        project2img3,
        project2img4,
        project2img5
      ],
      techStack: ["React", "Vite", "Tailwind CSS", "PokeAPI", "Asynchronous Logic"]
    }
  ];

  return (
    <>
      <h1 className="projects-title">Projects</h1>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <button className="btn-nav" onClick={() => navigate("/")}>
        Go Home
      </button>   
    </>
  );
};

export default Projects;