import React, { useEffect, useRef } from 'react';
import './ContactMapSection.css';
import anime from 'animejs';

const ContactMapSection = () => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const triggerAnimation = () => {
      if (hasAnimated.current || !sectionRef.current) return;
      hasAnimated.current = true;

      const tl = anime.timeline({
        easing: 'easeOutExpo',
      });

      tl.add({
        targets: sectionRef.current.querySelector('.map-heading'),
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800
      })
        .add({
          targets: sectionRef.current.querySelector('.map-wrapper'),
          opacity: [0, 1],
          scale: [0.95, 1],
          duration: 1000
        }, '-=400');
    };

    const timer = setTimeout(() => {
      if (!hasAnimated.current) triggerAnimation();
    }, 10000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerAnimation();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="contact-map-section" ref={sectionRef}>
      <div className="contact-map-container">
        <h2 className="map-heading">In Google Map</h2>

        <div className="map-wrapper">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.51886011477615!2d70.04598716731756!3d22.41766526666961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3957152daaaaaaab%3A0x9f3cf6f867b809af!2sIshita%20Brass!5e0!3m2!1sen!2sin!4v1777907325666!5m2!1sen!2sin"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ishita Brass Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
