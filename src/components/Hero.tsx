
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[420px] md:h-[540px] lg:h-[620px] flex items-center justify-center overflow-hidden">
      {/* Image background */}
      <img
        src="/lovable-uploads/ffb00bc7-1c12-4424-be15-955af7b5a61a.png"
        alt="Homeopathic bottles and honey"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: "center" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35 z-10" />
      {/* Headline and Buttons */}
      <div className="container relative z-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl mb-6 drop-shadow-lg">
          Welcome to Om Homeopathy — Natural Healing through Trusted Homeopathic Care
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <button
            onClick={() => scrollToSection('appointment')}
            className="px-8 py-3 rounded-lg bg-[#3a7265] hover:bg-[#3a7265]/90 text-white font-semibold shadow-lg text-lg transition-all duration-200"
          >
            Book Appointment
          </button>
          <a
            href="tel:+911234567890"
            className="px-8 py-3 rounded-lg bg-transparent border-2 border-white hover:bg-white/20 text-white font-semibold shadow-lg text-lg transition-all duration-200 flex items-center justify-center"
          >
            <Phone size={18} className="mr-2" />
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
