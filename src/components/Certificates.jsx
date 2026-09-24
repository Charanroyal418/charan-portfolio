import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Certificates() {
  const certificatesRef = useRef(null);

  const certificates = [
    {
      id: 1,
      title: "Data Structures and Algorithms using Java",
      issuer: "Infosys",
      date: "June 29, 2025",
      description:
        "Successfully completed the Data Structures and Algorithms using Java course.",
    },
    {
      id: 2,
      title: "Programming using Java",
      issuer: "Infosys",
      date: "June 26, 2025",
      description:
        "Successfully completed the Programming using Java course.",
    },
    {
      id: 3,
      title: "Cyber Job Simulation",
      issuer: "Deloitte",
      date: "May 27, 2025",
      description:
        "Successfully completed the Deloitte Cyber Job Simulation.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headingElements =
        certificatesRef.current.querySelectorAll(
          ".section-label, h2, .certificates-intro"
        );

      const cards =
        certificatesRef.current.querySelectorAll(
          ".certificate-card"
        );

      // Animate heading
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
            trigger: certificatesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate certificate cards
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: certificatesRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, certificatesRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={certificatesRef}
      id="certificates"
      className="certificates"
    >
      <div className="certificates-container">

        <p className="section-label">
          CERTIFICATIONS
        </p>

        <h2>
          Learning & Achievements
        </h2>

        <p className="certificates-intro">
          Certifications and achievements from my technical
          learning journey.
        </p>

        <div className="certificates-grid">

          {certificates.map((certificate) => (
            <div
              className="certificate-card"
              key={certificate.id}
            >

              <div className="certificate-icon">
                ✓
              </div>

              <h3>
                {certificate.title}
              </h3>

              <h4>
                {certificate.issuer}
              </h4>

              <p className="certificate-date">
                {certificate.date}
              </p>

              <p className="certificate-description">
                {certificate.description}
              </p>

              <button
                className="certificate-btn"
                type="button"
              >
                Certificate ✓
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;