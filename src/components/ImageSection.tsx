
const ImageSection = () => {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1472396961693-142e6e269027')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-om-green/50 to-om-blue/50"></div>
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">A place where natural healing begins.</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Rediscover balance and wellness through the gentle power of homeopathy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
