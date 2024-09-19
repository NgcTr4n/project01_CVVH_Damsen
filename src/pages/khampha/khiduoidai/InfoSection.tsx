import React from 'react';

interface InfoSectionProps {
  title: string;
  description: string;
  label?: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, description, label }) => {
  return (
    <div className="info-section">
      <h2>{title}</h2>
      <p>{description}</p>
      {label && <span className="label">{label}</span>}
    </div>
  );
};

export default InfoSection;