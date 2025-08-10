import React from "react";

const ProductGallery: React.FC<{ images: string[]; name: string }> = ({ images, name }) => {
  const [active, setActive] = React.useState(0);

  return (
    <div>
      <div className="overflow-hidden rounded-lg border">
        <img
          src={images[active]}
          alt={`${name} image ${active + 1}`}
          className="w-full object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-5 gap-2">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`overflow-hidden rounded-md border ${i === active ? "ring-2 ring-primary" : ""}`}
              aria-label={`Show image ${i + 1}`}
            >
              <img src={src} alt={`${name} thumbnail ${i + 1}`} className="aspect-square w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
