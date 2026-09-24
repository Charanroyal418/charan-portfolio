import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Education() {
  const educationRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items =
        educationRef.current.querySelectorAll(".timeline-item");

      // Animate education timeline items
      gsap.fromTo(
        items,
        {
          opacity: 0,
          x: -60,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: educationRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate the timeline dot
      gsap.fromTo(
        ".timeline-dot",
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: educationRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, educationRef);

    return () => {
      ctx.revert();
    };
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