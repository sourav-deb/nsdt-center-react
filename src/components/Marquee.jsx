import React from 'react';
import { useEffect, useState } from 'react';

const Marquee = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Import all images from assets/marquee
    const importImages = async () => {
      const imageContext = import.meta.glob('/src/assets/marquee/*.{png,jpg,jpeg,svg}');
      const loadedImages = [];
      
      for (const path in imageContext) {
        const image = await imageContext[path]();
        loadedImages.push(image.default);
      }
      
      setImages(loadedImages);
    };

    importImages();
  }, []);

  return (
    <div className="w-screen overflow-hidden whitespace-nowrap relative left-[50%] right-[50%] -mx-[50vw]">
      <div className="inline-flex animate-marquee">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Marquee image ${index + 1}`}
            className="h-32 mx-4 object-contain"
          />
        ))}
        {/* Duplicate images for seamless loop */}
        {images.map((image, index) => (
          <img
            key={`duplicate-${index}`}
            src={image}
            alt={`Marquee image ${index + 1}`}
            className="h-32 mx-4 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Marquee;