import React from 'react';
import './HeroSection.css'; // Assuming you have a CSS file for styling

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, backgroundImage, ctaText, ctaLink }) => {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="hero-section" style={heroStyle}>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <a href={ctaLink} className="hero-cta-button">
          {ctaText}
        </a>
      </div>
    </div>
  );
};

export default HeroSection;

