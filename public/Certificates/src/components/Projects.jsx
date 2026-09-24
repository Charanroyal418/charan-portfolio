import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const projectsRef = useRef(null);

  const projects = [
    {
      title: "FloodSense AI",
      description:
        "Predicts flood risk using machine learning and Dynamic Neural Networks, combining GDNN and Knowledge Graph concepts for intelligent flood risk prediction.",
      technologies: [
        "Python",
        "GDNN",
        "Knowledge Graph",
        "Pandas",
      ],
      github:
        "https://github.com/Charanroyal418/ai-flood-prediction",
      live: "http://ai-flood-prediction-iota.vercel.app/",
    },

    {
      title: "Engineering Job Portal System",
      description:
        "A job portal with an admin dashboard for managing users, jobs, and applications, with job search, filtering, and email notification functionality.",
      technologies: [
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
      ],
      github: "https://github.com/Charanroyal418",
    },

    {
      title: "Resume Shortlisting System",
      description:
        "A recruitment tool that analyzes resumes against job requirements, extracts relevant skills, education, and experience, calculates matching scores, and helps recruiters shortlist suitable candidates.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "MySQL",
      ],
      github: "https://github.com/Charanroyal418",
    },
  ];

  useEffect(() => {
    const cards = projectsRef.current.querySelectorAll(".project-card");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="projects"
    >
      <div className="projects-container">

        <p className="section-label">MY WORK</p>

        <h2>Featured Projects</h2>

        <p className="projects-intro">
          A selection of projects I've built while developing my
          skills in software development and problem solving.
        </p>

        <div className="projects-grid">

          {projects.map((project) => (
            <div className="project-card" key={project.title}>

              <div className="project-number">
                PROJECT 
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="technologies">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  GitHub ↗
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn live"
                  >
                    Live Demo ↗
                  </a>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;