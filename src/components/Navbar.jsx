// index.jsx

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Styles/Nav.css';

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const tl = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    // Animación para abrir el menú
    tl.current.to(".menu-overlay", {
      duration: 1,
      clipPath: menuOpen ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "polygon(0 0, 100% 0, 100% 0, 0 0)",
      ease: "power2.out",
      onStart: () => {
        document.querySelector(".menu-overlay").style.zIndex = "10";
        document.querySelector(".menu-overlay").style.pointerEvents = "all";
      },
      onComplete: () => {
        if (!menuOpen) {
          document.querySelector(".menu-overlay").style.zIndex = "-1";
          document.querySelector(".menu-overlay").style.pointerEvents = "none";
        }
      }
    });

    // Animación para los enlaces y botones
    tl.current.from(
      ".menu-link, .btn",
      {
        opacity: 0,
        y: 60,
        stagger: 0.05,
        duration: 0.75,
        ease: "power1.inOut",
      },
      "<"
    );

    // Animación para el divisor
    tl.current.to(
      ".menu-divider", {
        duration: 2,
        width: "100%",
        ease: "power4.out",
      },
      "<"
    );

    // Asegurar que el menú esté oculto inicialmente
    tl.current.reverse();

  }, [menuOpen]);

  // Función para abrir el menú
  const openMenu = () => {
    setMenuOpen(true);
    tl.current.play();
  };

  // Función para cerrar el menú
  const closeMenu = () => {
    setMenuOpen(false);
    tl.current.reverse();
  };

  return (
    <div className="container">
      <nav className={menuOpen ? "nav-open" : ""}>
        <div className="logo">Impulse</div>
        <div className="menu-open-btn" onClick={openMenu}>Menu</div>
      </nav>

      <div className="menu-overlay">
        <div className="menu-nav">
          <div className="menu-logo">Impulse</div>
          <div className="menu-close-btn" onClick={closeMenu}>Close</div>
        </div>
        <div className="menu-cols">
          
          <div className="col">
            <div className="menu-link">
              <a href="#">Home</a>
            </div>
            <div className="menu-link">
              <a href="#">Workplace</a>
            </div>
            <div className="menu-link">
              <a href="#">Services & Models</a>
            </div>
            <div className="menu-link">
              <a href="#">Our Story</a>
            </div>
            <div className="menu-link">
              <a href="#">Contact</a>
            </div>
            <div className="btn">
              <a href="#">Take a seat</a>
            </div>
          </div>
        </div>
        <div className="menu-footer">
          <div className="menu-divider"></div>
          <div className="menu-footer-copy">
            <div className="socials">
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
              <a href="#">Linkedin</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
