import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import anime from 'animejs';
import './Styles/Loader.css';

const Loader = () => {
  const counterRef = useRef(null);
  const textWrapperRef = useRef(null);
  const preloaderRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let currentValue = 0;

    const updateCounter = () => {
      if (currentValue < 100) {
        let increment = Math.floor(Math.random() * 10) + 1;
        currentValue = Math.min(currentValue + increment, 100);
        if (counterRef.current) {
          counterRef.current.textContent = currentValue;
        }
        let delay = Math.floor(Math.random() * 200) + 25;
        setTimeout(updateCounter, delay);
      }
    };

    updateCounter();

    // Animaciones de los elementos del loader
    gsap.to(counterRef.current, { opacity: 0, delay: 3.5, duration: 0.5 });

    if (textWrapperRef.current) {
      textWrapperRef.current.innerHTML = textWrapperRef.current.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    }

    anime.timeline({ loop: false })
      .add({
        targets: ".ml16 .letter",
        translateY: [-100, 0],
        easing: "easeOutExpo",
        duration: 1500,
        delay: (el, i) => 30 * i
      })
      .add({
        targets: ".ml16 .letter",
        translateY: [0, 300],
        easing: "easeOutExpo",
        duration: 3000,
        delay: (el, i) => 2000 + 30 * i
      });

    gsap.to(".ml16", { opacity: 0, delay: 3.5, duration: 0.5 });

    // Mover el loader hacia arriba
    gsap.to(preloaderRef.current, {
      y: '-100%',
      ease: "power4.inOut",
      duration: 2,
      delay: 3
    });

    // Retrasa la visibilidad del contenido hasta que la animación esté completa
    const timeoutId = setTimeout(() => {
      setIsLoaded(true);
    }, 5000); // Ajusta el tiempo según tus animaciones

    return () => clearTimeout(timeoutId); // Limpieza del timeout

  }, []);

  return (
    <div>
      {/* Preloader visible solo cuando isLoaded es falso */}
      {!isLoaded && (
        <div className="container">
          <div className="preloader" ref={preloaderRef}>
            <div className="loader-content">
              <div className="count" ref={counterRef}><p>0</p></div>
              <div className="copy"><p className="ml16" ref={textWrapperRef}>SYN</p></div>
            </div>
          </div>
        </div>
      )}
      {/* Contenido del sitio, visible solo cuando isLoaded es verdadero */}
    </div>
  );
};

export default Loader;
