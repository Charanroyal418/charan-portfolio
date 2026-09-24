import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Certificates() {
  const certificatesRef = useRef(null);

  const certificates = [
    {
      title: "Java Programming",
      issuer: "SoloLearn",
      description:
        "Completed Java programming training covering core Java concepts and object-oriented programming.",
    },
    {
      title: "Java & Data Structures",
      issuer: "Infosys",
      description:
        "Completed training focused on Java programming and fundamental data structures.",
    },
    {
      title: "Cybersecurity",
      issuer: "Deloitte",
      description:
        "Completed a cybersecurity learning program covering fundamental cybersecurity concepts.",
    },
    {
      title: "HackerRank Achievement",
      issuer: "HackerRank",
      description:
        "Achieved 5-star recognition through programming practice.",
    },
  ];

  useEffect(() => {
    const cards =
      certificatesRef.current.querySelectorAll(".certificate-card");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        scrollTrigger: {
          trigger: certificatesRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={certificatesRef}
      id="certificates"
      className="certificates"
    >
      <div className="certificates-container">

        <p className="section-label">CERTIFICATIONS</p>

        <h2>Learning & Achievements</h2>

        <p className="certificates-intro">
          Certifications and achievements that reflect my continuous
          learning and technical development.
        </p>

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <div
              className="certificate-card"
              key={certificate.title}
            >
              <div className="certificate-icon">
                ✓
              </div>

              <h3>{certificate.title}</h3>

              <h4>{certificate.issuer}</h4>

              <p>{certificate.description}</p>

              <button className="certificate-btn">
                View Certificate
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certificates;