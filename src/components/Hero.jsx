import './Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleScrollToProjects = () => {
    navigate('/projects');
  };

  return (

    <div className="hero-container">

      <p className="main-text">

        Building Software That Matters.

      </p>

      <p className="subtitle">

        Computer Science student at Tec de Monterrey · AgroDataThón 2024 Winner · Open to internships.

      </p>

      <button className="cta-button" onClick={handleScrollToProjects}>
        View My Work
      </button>

    </div>

  );

};

export default Hero;

