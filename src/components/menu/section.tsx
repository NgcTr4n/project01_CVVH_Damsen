// components/Section.tsx
import React from 'react';

interface SectionProps {
  title: string;
  items: { id: number; text: string }[];
}

const Section: React.FC<SectionProps> = ({ title, items }) => {
  return (
    <div className="section">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span className="id">{item.id}</span> {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Section;
