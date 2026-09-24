import { useEffect, useRef } from "react";
import gsap from "gsap";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements =
        heroRef.current.querySelectorAll(".animate-item");

      // Main text entrance
      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.18,
          ease: "power3.out",
        }
      );

      // Background glow
      gsap.to(".hero-glow", {
        x: 100,
        y: 50,
        scale: 1.2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Scroll indicator floating animation
      gsap.to(".scroll-indicator", {
        y: 8,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="hero"
    >
      <div className="hero-glow"></div>

      <div className="hero-content">

        <p className="hero-small animate-item">
          👋 HELLO, I'M
        </p>

        <h1 className="animate-item">
          K. Charan Raj
        </h1>

        <h2 className="animate-item">
          Computer Science Engineer
        </h2>

        <p className="hero-description animate-item">
          Full Stack Developer • Problem Solver •
          AI & Machine Learning Enthusiast
        </p>

        <div className="hero-buttons animate-item">

          <a
            href="#projects"
            className="btn primary"
          >
            View My Projects
          </a>

          <a
            href="/resume.pdf"
            download="K_Charan_Raj_Resume.pdf"
            className="btn secondary"
          >
            Download Resume
          </a>

        </div>

      </div>

      <div className="scroll-indicator animate-item">
        ↓ Scroll to explore
      </div>

    </section>
  );
}

export default Hero;