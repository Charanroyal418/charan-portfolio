import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const element = aboutRef.current;

    gsap.fromTo(
      element.querySelector(".about-content"),
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section ref={aboutRef} id="about" className="about">

      <div className="about-content">

        <p className="section-label">ABOUT ME</p>

        <h2>
          Building Ideas Into
          <span> Real Applications.</span>
        </h2>

        <p className="about-text">
          I'm K. Charan Raj, a Computer Science student passionate about
          software development, problem solving and building practical
          applications.
        </p>

        <p className="about-text">
          I enjoy working with Java, React, Python, databases and modern
          web technologies. I'm also continuously improving my Data
          Structures and Algorithms skills.
        </p>

        <div className="about-stats">

          <div className="stat">
            <h3>3+</h3>
            <p>Projects & Practice</p>
          </div>

          <div className="stat">
            <h3>5★</h3>
            <p>HackerRank</p>
          </div>

          <div className="stat">
            <h3>DSA</h3>
            <p>Continuous Learning</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;