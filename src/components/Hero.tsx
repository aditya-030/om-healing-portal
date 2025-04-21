
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-12 md:pt-24 md:pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/ffb00bc7-1c12-4424-be15-955af7b5a61a.png" 
          alt="Om Homeopathy Landing Image" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center">
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto">
            Welcome to Om Homeopathy — Natural Healing through Trusted Homeopathic Care
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg mx-auto">
            Experience the gentle power of homeopathy to restore balance and promote healing in mind, body, and spirit.
          </p>
          <div className="flex justify-center">
            <Link to="/appointment" className="bg-om-green hover:bg-om-lightGreen text-white font-medium px-6 py-3 rounded-md transition-all duration-300 text-center">
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
