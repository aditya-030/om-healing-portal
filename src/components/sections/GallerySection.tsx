
const GallerySection = () => {
  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Vlogs & <span className="text-[#3a7265]">Gallery</span>
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            See our clinic, team, and moments from events.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {/* Gallery content will be dynamically loaded */}
        </div>
        <div className="text-center mt-8">
          <button className="inline-block bg-[#3a7265] text-white font-medium px-6 py-3 rounded-md hover:bg-[#3a7265]/80 transition-all mt-2">
            See More in Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
