import React from 'react';
import './Services.css';

const ServiceDescription = ({
  title, subtitle, points, subinfo = {} // New prop for detailed service descriptions
}) => {
  return (
    <div className="service-description-wrapper animated-fade-in">
      <div className="service-header-section">
        <h1 className="service-description-title">{title}</h1>
        <h2 className="service-description-subtitle">{subtitle}</h2>
      </div>

      <div className="service-content-section">
        <div className="service-description-bullets">
          <div className="bullets-column">
            {points.left?.map((point, idx) => (
              <div key={`left-${idx}`} className="service-description-item interactive-bullet">
                <div className="bullet-point">
                  <div className="bullet-icon blue-icon">
                    {idx % 2 === 0 ? '→' : '•'}
                  </div>
                  <div className="bullet-title">{point.title}</div>
                </div>
                {point.subline && (
                  <div className="service-detail">{point.subline}</div>
                )}
              </div>
            ))}
          </div>
          <div className="bullets-column">
            {points.right?.map((point, idx) => (
              <div key={`right-${idx}`} className="service-description-item interactive-bullet">
                <div className="bullet-point">
                  <div className="bullet-icon blue-icon">
                    {idx % 2 === 0 ? '→' : '•'}
                  </div>
                  <div className="bullet-title">{point.title}</div>
                </div>
                {point.subline && (
                  <div className="service-detail">{point.subline}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;
