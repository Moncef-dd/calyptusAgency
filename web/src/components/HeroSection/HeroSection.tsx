import React from 'react';
import './hs.css';


interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText1: string;
  ctaLink1: string;
  ctaText2: string;
  ctaLink2: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, backgroundImage, ctaText1, ctaLink1, ctaText2, ctaLink2 }) => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <p className="subtitle">{subtitle}</p>
        <h1 className="title">{title}</h1>
        <div className="cta-container">
          <a href={ctaLink1} className="cta-link">{ctaText1}</a>
          <a href={ctaLink2} className="cta-link">{ctaText2}</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;