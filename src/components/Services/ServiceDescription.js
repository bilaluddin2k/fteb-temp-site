import React from 'react';
import './Services.css';

const ServiceDescription = ({
  title,
  paragraphs,
  bulletPointsLeft,
  bulletPointsRight,
  links,
  brochureText,
  brochureLink,
  brochureButtonText,
  detailedServices = {} // New prop for detailed service descriptions
}) => {
  return (
    <div className="container service-description-wrapper">
      <div className="service-description-left">
        <h2 className="service-description-title">{title}</h2>
        {paragraphs.map((para, idx) => (
          <p key={idx} className="service-description-paragraph">{para}</p>
        ))}
        <div className="service-description-bullets">
          <div className="bullets-column">
            {bulletPointsLeft.map((point, idx) => (
              <div key={idx} className="service-description-item">
                <div className="bullet-point">
                  {point.includes('☁️') ? (
                    <span className="bullet-icon cloud-icon"></span>
                  ) : point.includes('🔹') ? (
                    <span className="bullet-icon diamond-icon"></span>
                  ) : (
                    <span className="bullet-icon">&#10003;</span>
                  )}
                  <span className="bullet-title">{point}</span>
                </div>
                {detailedServices[point] && (
                  <p className="service-detail">{detailedServices[point]}</p>
                )}
              </div>
            ))}
          </div>
          <div className="bullets-column">
            {bulletPointsRight.map((point, idx) => (
              <div key={idx} className="service-description-item">
                <div className="bullet-point">
                  {point.includes('☁️') ? (
                    <span className="bullet-icon cloud-icon"></span>
                  ) : point.includes('🔹') ? (
                    <span className="bullet-icon diamond-icon"></span>
                  ) : (
                    <span className="bullet-icon">&#10003;</span>
                  )}
                  <span className="bullet-title">{point}</span>
                </div>
                {detailedServices[point] && (
                  <p className="service-detail">{detailedServices[point]}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="service-description-right">
        <div className="service-links">
          {links.map((link, idx) => (
            <div key={idx} className="service-link-item">
              <a href={link.href} className="service-link">{link.text}</a>
            </div>
          ))}
        </div>
        {brochureText?.title && (
          <div className="brochure-section">
            <h3 className="brochure-title">{brochureText.title}</h3>
            {brochureText.description && (
              <p className="brochure-description">{brochureText.description}</p>
            )}
            {brochureLink && (
              <a href={brochureLink} className="brochure-button" download>
                <span className="brochure-icon">&#128196;</span> {brochureButtonText || 'Download Brochure'}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDescription;
