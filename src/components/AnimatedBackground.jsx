import { useEffect, useRef } from "react";
import gsap from "gsap";

function AnimatedBackground() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const particles =
        backgroundRef.current.querySelectorAll(".tech-particle");

      const orbs =
        backgroundRef.current.querySelectorAll(".tech-orb");

      // Floating particles
      particles.forEach((particle, index) => {
        gsap.to(particle, {
          y: index % 2 === 0 ? -30 : 30,
          x: index % 3 === 0 ? 20 : -20,
          duration: 3 + index * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Glowing orbs
      orbs.forEach((orb, index) => {
        gsap.to(orb, {
          x: index % 2 === 0 ? 80 : -80,
          y: index % 2 === 0 ? -50 : 50,
          scale: 1.2,
          duration: 5 + index,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Mouse-following glow
      const handleMouseMove = (event) => {
        gsap.to(".mouse-glow", {
          x: event.clientX,
          y: event.clientY,
          duration: 1,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, backgroundRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      className="animated-background"
      aria-hidden="true"
    >
      <div className="mouse-glow"></div>

      <div className="tech-grid"></div>

      <div className="tech-orb orb-one"></div>
      <div className="tech-orb orb-two"></div>

      <div className="tech-particle particle-one"></div>
      <div className="tech-particle particle-two"></div>
      <div className="tech-particle particle-three"></div>
      <div className="tech-particle particle-four"></div>
      <div className="tech-particle particle-five"></div>
      <div className="tech-particle particle-six"></div>
      <div className="tech-particle particle-seven"></div>
      <div className="tech-particle particle-eight"></div>
    </div>
  );
}

export default AnimatedBackground;