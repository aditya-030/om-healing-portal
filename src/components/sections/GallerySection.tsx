
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const GallerySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    {
      src: "/lovable-uploads/29a8b065-218d-4a90-afcd-59233e2e77dd.png",
      caption: "Our Clinic"
    },
    {
      src: "/lovable-uploads/4e7b6190-1a7f-4712-941f-bb32814cb3de.png",
      caption: "Treatment Room"
    },
    {
      src: "/lovable-uploads/91423c29-9bad-470e-a388-aef213c725f9.png",
      caption: "Consultation"
    },
    {
      src: "/lovable-uploads/b4bd1edf-f841-4d27-820a-5f174b22a1d8.png",
      caption: "Medicine Storage"
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our <span className="text-[#3a7265]">Gallery</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <Card
              key={index}
              className="relative overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-square relative">
                <img
                  src={image.src}
                  alt={image.caption}
                  className={cn(
                    "w-full h-full object-cover transition-transform duration-300",
                    hoveredIndex === index && "scale-110"
                  )}
                />
                <div className={cn(
                  "absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300",
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                )}>
                  <p className="text-white text-lg font-medium">{image.caption}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            to="/gallery"
            className="inline-block bg-[#3a7265] text-white font-medium px-6 py-3 rounded-md hover:bg-[#3a7265]/80 transition-all"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
