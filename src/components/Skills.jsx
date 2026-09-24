import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const element = skillsRef.current;

    // Create GSAP context
    const ctx = gsap.context(() => {
      const headingElements = element.querySelectorAll(
        ".section-label, h2, .skills-description"
      );

      const cards = element.querySelectorAll(".skill-card");

      // Heading animation
      gsap.fromTo(
        headingElements,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Skill cards animation
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: element,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, skillsRef);

    // Cleanup only this section's animations
    return () => {
      ctx.revert();
    };
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
    <section
      ref={skillsRef}
      id="skills"
      className="skills"
    >
      <div className="skills-container">

        <p className="section-label">
          MY SKILLS
        </p>

        <h2>
          Technologies I Work With
        </h2>

        <p className="skills-description">
          Technologies and tools I'm learning and using to build
          software projects.
        </p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div
              className="skill-card"
              key={skill}
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;