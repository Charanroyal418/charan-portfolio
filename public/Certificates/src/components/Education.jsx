import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Education() {
  const educationRef = useRef(null);

  useEffect(() => {
    const items =
      educationRef.current.querySelectorAll(".timeline-item");

    gsap.fromTo(
      items,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: educationRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={educationRef}
      id="education"
      className="education"
    >
      <div className="education-container">

        <p className="section-label">EDUCATION</p>

        <h2>My Academic Journey</h2>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span>2023 — Present</span>

              <h3>
                B.Tech — Computer Science Engineering
              </h3>

              <h4>
                Dr. M.G.R. Educational and Research Institute
              </h4>

              <p>
                Building a strong foundation in computer science,
                programming, data structures, databases and software
                development.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;