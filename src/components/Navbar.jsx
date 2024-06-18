import "./nav.css"

const Navbar = () => {
  document.addEventListener('DOMContentLoaded', function(){
    let tl = gsap.timeline({paused: true});

    tl.to(".menu-overlay", {
      duration: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100% 0 100%)",
      ease: "power2.out",
    });

    tl.from(
      ".menu-link, .btn",
      {
        opacity: 0,
        y: 60,
        stagger: 0.05,
        duration: 0.75,
        ease: "power1.inOut",  
      },
      "<",
    );

    tl.to(
      ".video-preview",{
        duration: 1,
        height: "200px",
        ease: "power2.out",
      },
      "<",
    );
    tl.to(
      ".menu-divider",
      {
        duration:2,
        width:"100%",
        ease: "power4.out",
      },
      "<",
    );

  function openMenu(){
    document.querySelector(".menu-overlay").style.pointerEvents = "all";
    tl.play();
  }
  function closeMenu(){
    document.querySelector(".menu-overlay").style.pointerEvents = "none";
    tl.reverse();
  }

  document.querySelector(".menu-open-btn").addEventListener("click", openMenu);
  document
    .querySelector(".menu-close-btn")
    .addEventListener("click", closeMenu);
    tl.reverse();

  })






  return (
  
    <div className="container">
        <nav>
          <div className="logo">Impulser</div>
          <div className="menu-btn-open">Menu</div>
        </nav>

        <h1 className="header">Technopolymer</h1>

        <div className="menu-overlay">
          <div className="menu-nav">
            <div className="menu-logo">Impulse</div>
            <div className="menu-close-btn">Close</div>
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
                <a href="#">About</a>
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
            <div className="menu-divider">
              <div className="menu-footer-copy">
                <div className="slogan">Tomorrows Brands, Today</div>
                <div className="socials">
                  <a href="#">Twitter</a>
                  <a href="#">Instagram</a>
                  <a href="#">Linkedin</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar