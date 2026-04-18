
import './About.css';

const About = () => {  

  return (
    <div className="about-container">
      <h1 className="about-title">About me</h1>
      
      <p className="about-profile">
        Software & Web Developer | ITC Student
      </p>

      <section className="about-section">
        <p className="about-text">
          I view software as a puzzle of architecture and logic where creativity is the only limit. 
          As a Computer Technology Engineering student, I enjoy experimenting with algorithm efficiency 
          while building web interfaces that truly work for users.
        </p>

        <p className="about-text">
          I have worked with C++, Python, and SQL to solve complex problems, such as processing large data volumes 
          using graph algorithms (Dijkstra) to track bot attacks. These challenges taught me that data tells 
          revealing stories if you know how to manipulate it.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-subtitle">What I Bring Beyond Code</h2>

        <div className="about-values">
          <div className="value-item">
            <h3 className="value-title">Developer's Judgment</h3>
            <p className="value-text">
              I understand that my job is to facilitate the path for clients, not complicate it with technical jargon.
            </p>
          </div>

          <div className="value-item">
            <h3 className="value-title">Team Synergy</h3>
            <p className="value-text">
              I thrive in Agile environments where clear communication and role distribution are key to keeping 
              workflow momentum moving forward.
            </p>
          </div>

          <div className="value-item">
            <h3 className="value-title">Leadership Vision</h3>
            <p className="value-text">
              My long-term goal is to lead technical teams. I firmly believe in creating spaces where each member 
              leverages their strengths and the team supports each other's growth to drive projects forward.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;