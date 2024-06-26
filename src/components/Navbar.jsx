import { useEffect } from "react";
import "./Styles/Nav.css";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const Nav = () => {
  useEffect(() => {
    // Inicialización de Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: document.querySelector(".container"),
      smooth: true,
    });

    scroll.on("scroll", (event) => {
      const { scroll: { y } } = event;
      const nav = document.querySelector("nav");

      if (y > 100) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });

    // GSAP timeline para el menú
    const tl = gsap.timeline({ paused: true });

    // Animación para abrir el menú
    tl.to(".menu-overlay", {
      duration: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Abre completamente
      ease: "power2.out",
      onStart: () => {
        document.querySelector(".menu-overlay").style.zIndex = "10";
        document.querySelector(".menu-overlay").style.pointerEvents = "all";
      },
    });

    // Animación para los enlaces y botones
    tl.from(
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

    // Animación para la vista previa del video
    tl.to(
      ".video-preview",
      {
        duration: 1,
        height: "200px",
        ease: "power2.out",
      },
      "<"
    );

    // Animación para el divisor
    tl.to(
      ".menu-divider",
      {
        duration: 2,
        width: "100%",
        ease: "power4.out",
      },
      "<"
    );

    // Función para abrir el menú
    const openMenu = () => tl.play();

    // Función para cerrar el menú
    const closeMenu = () => {
      tl.reverse();
      tl.eventCallback("onReverseComplete", () => {
        document.querySelector(".menu-overlay").style.pointerEvents = "none";
        document.querySelector(".menu-overlay").style.zIndex = "-1";
      });
    };

    document.querySelector(".menu-open-btn").addEventListener("click", openMenu);
    document.querySelector(".menu-close-btn").addEventListener("click", closeMenu);

    return () => {
      document.querySelector(".menu-open-btn").removeEventListener("click", openMenu);
      document.querySelector(".menu-close-btn").removeEventListener("click", closeMenu);
      scroll.destroy();
    };
  }, []);

  return (
    <div className="container">
      <nav>
        <div className="logo">Impulse</div>
        <div className="menu-open-btn">Menu</div>
      </nav>

      <h1 className="header">Technopolymer</h1>

      <div className="menu-overlay">
        <div className="menu-nav">
          <div className="menu-logo">Impulse</div>
          <div className="menu-close-btn">Close</div>
        </div>
        <div className="menu-cols">
          <div className="cols">
            <div className="video">
              <div className="video-preview"></div>
              <div className="video-details">
                <p>
                  <i className="ph-fill ph-play-circle"></i>Play reel
                </p>
                <p>-01:18</p>
              </div>
            </div>
          </div>
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
            <div className="slogan">
              <p>Tomorrows Brands, Today.</p>
            </div>
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

export default Nav;
