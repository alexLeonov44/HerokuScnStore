import React from 'react';

export default function SelectedProductImages({ gallery }) {
  const [selectedImage, setSelectedImage] = React.useState(gallery[0]);

  return (
    <div className="images">
      <div className="images__mini">
        {gallery.map((image, i) => (
          <div key={image + i}>
            {' '}
            <img onClick={() => setSelectedImage(image)} src={image} alt="" />{' '}
          </div>
        ))}
      </div>
      <div className="images__full">
        <img src={selectedImage} alt="" />
      </div>
    </div>
  );
}
