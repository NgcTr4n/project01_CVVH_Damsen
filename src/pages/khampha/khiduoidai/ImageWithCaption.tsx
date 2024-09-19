import React from 'react';

interface ImageWithCaptionProps {
  src: string;
  caption: string;
}

const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({ src, caption }) => {
  return (
    <div className="image-with-caption">
      <img src={src} alt={caption} />
      <p>{caption}</p>
    </div>
  );
};

export default ImageWithCaption;