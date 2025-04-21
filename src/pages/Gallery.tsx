
import { useState } from "react";
import { cn } from "@/lib/utils";

interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  title: string;
  description?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    type: "image",
    src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    title: "Our Clinic",
    description: "A healing environment designed for your comfort"
  },
  {
    id: "2",
    type: "image",
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    title: "Natural Remedies",
    description: "We use only the highest quality natural ingredients"
  },
  {
    id: "3",
    type: "image",
    src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    title: "Our Team",
    description: "Dedicated professionals committed to your wellbeing"
  },
  {
    id: "4",
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    title: "About Homeopathy",
    description: "Learn about our approach to natural healing"
  }
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "images" | "videos">("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter(item => {
    if (activeFilter === "all") return true;
    return item.type === activeFilter.slice(0, -1); // Remove 's' from "images" or "videos"
  });

  return (
    <main className="py-16">
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Gallery & <span className="text-om-green">Vlogs</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our clinic, meet our team, and learn more about homeopathic treatments through our videos and image gallery.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveFilter("all")}
              className={cn(
                "px-4 py-2 text-sm font-medium border rounded-l-lg",
                activeFilter === "all"
                  ? "bg-om-green border-om-green text-white"
                  : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
              )}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter("images")}
              className={cn(
                "px-4 py-2 text-sm font-medium border-t border-b border-r",
                activeFilter === "images"
                  ? "bg-om-green border-om-green text-white"
                  : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
              )}
            >
              Images
            </button>
            <button
              onClick={() => setActiveFilter("videos")}
              className={cn(
                "px-4 py-2 text-sm font-medium border-t border-b border-r rounded-r-lg",
                activeFilter === "videos"
                  ? "bg-om-green border-om-green text-white"
                  : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
              )}
            >
              Videos
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => setActiveItem(item)}
            >
              {item.type === "image" ? (
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="relative">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                {item.description && <p className="text-gray-600 mt-1">{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for viewing items */}
      {activeItem && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-4 flex justify-between items-center border-b">
              <h3 className="text-xl font-semibold text-gray-800">{activeItem.title}</h3>
              <button 
                onClick={() => setActiveItem(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              {activeItem.type === "image" ? (
                <img 
                  src={activeItem.src} 
                  alt={activeItem.title} 
                  className="w-full max-h-[60vh] object-contain"
                />
              ) : (
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={activeItem.src}
                    title={activeItem.title}
                    className="w-full h-[60vh]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              {activeItem.description && (
                <p className="text-gray-600 mt-4">{activeItem.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;
