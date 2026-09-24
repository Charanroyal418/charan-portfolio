import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items =
        contactRef.current.querySelectorAll(".contact-item");

      // Contact information animation
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Contact form animation
      gsap.fromTo(
        ".contact-form",
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, contactRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      "Thanks for reaching out! Please contact me directly through email."
    );

    event.target.reset();
  };

  return (
    <section
      ref={contactRef}
      id="contact"
      className="contact"
    >
      <div className="contact-container">

        {/* Contact Header */}

        <div className="contact-header contact-item">

          <p className="section-label">
            CONTACT
          </p>

          <h2>
            Let's Build
            <span> Something Great.</span>
          </h2>

          <p>
            Have a project idea, internship opportunity,
            or just want to connect? Feel free to reach out.
          </p>

        </div>

        {/* Contact Content */}

        <div className="contact-content">

          {/* Contact Information */}

          <div className="contact-info">

            <div className="contact-item">

              <h3>Email</h3>

              <a href="mailto:kodicharan062@gmail.com">
                kodicharan062@gmail.com
              </a>

            </div>

            <div className="contact-item">

              <h3>GitHub</h3>

              <a
                href="https://github.com/Charanroyal418"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Charanroyal418 ↗
              </a>

            </div>

            <div className="contact-item">

              <h3>LinkedIn</h3>

              <a
                href="https://www.linkedin.com/in/kodipunjula-charan-raj-2624b3276"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile ↗
              </a>

            </div>

          </div>

          {/* Contact Form */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>

            <button type="submit">
              Send Message ↗
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;