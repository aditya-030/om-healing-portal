import { Link } from "react-router-dom";
const Hero = () => {
  return <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-om-lightGreen/20 to-om-lightBlue/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Natural Healing For <span className="text-om-green">Better Living</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            Experience the gentle power of homeopathy to restore balance and promote healing in mind, body, and spirit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/appointment" className="bg-om-green hover:bg-om-lightGreen text-white font-medium px-6 py-3 rounded-md transition-all duration-300 text-center">
              Book an Appointment
            </Link>
            <Link to="/services" className="bg-white border border-om-green text-om-green hover:bg-om-green hover:text-white font-medium px-6 py-3 rounded-md transition-all duration-300 text-center">
              Our Services
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-om-green opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-om-blue opacity-20"></div>
            
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;