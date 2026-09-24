import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const cards = skillsRef.current.querySelectorAll(".skill-card");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const skills = [
    "Java",
    "Python",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "PHP",
    "MySQL",
    "Git & GitHub",
    "Data Structures & Algorithms",
  ];

  return (
    <section ref={skillsRef} id="skills" className="skills">
      <div className="skills-container">

        <p className="section-label">MY SKILLS</p>

        <h2>Technologies I Work With</h2>

        <p className="skills-description">
          Technologies and tools I'm learning and using to build
          software projects.
        </p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;