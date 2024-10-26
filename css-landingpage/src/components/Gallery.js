import React from 'react';
import './Gallery.css';

function Gallery() {
  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <div className="image-grid">
        {/* Replace with actual images */}
        <img src="path/to/image1.jpg" alt="Event 1" />
        <img src="path/to/image2.jpg" alt="Event 2" />
      </div>
    </section>
  );
}

export default Gallery;
