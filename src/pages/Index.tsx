
import Hero from "@/components/Hero";
import ImageCarousel from "@/components/ImageCarousel";
import ImageSection from "@/components/ImageSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      title: "Chronic Diseases",
      description: "Personalized homeopathic treatments for long-term health conditions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      link: "/services"
    },
    {
      title: "Allergies & Immunity",
      description: "Boost your natural immunity and find relief from allergies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      link: "/services"
    },
    {
      title: "Skin Conditions",
      description: "Effective remedies for various skin issues and disorders.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      link: "/services"
    }
  ];

  const testimonials = [
    {
      content: "After years of suffering from allergies, I finally found relief with Om Homeopathy. Their holistic approach has transformed my health completely.",
      name: "Priya Shah",
      role: "Patient"
    },
    {
      content: "Dr. Mahto's expertise in homeopathy helped my chronic migraines when nothing else worked. I'm grateful for the personalized care I received.",
      name: "Rajiv Kumar",
      role: "Patient"
    },
    {
      content: "The natural treatments at Om Homeopathy helped my daughter's eczema without any side effects. We are so thankful for their gentle approach to healing.",
      name: "Meera Patel",
      role: "Patient"
    }
  ];

  return (
    <main>
      <Hero />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Welcome to <span className="text-om-green">Om Homeopathy</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the power of natural healing through personalized homeopathic treatments 
              that address the root cause of your health concerns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-white border border-om-green text-om-green hover:bg-om-green hover:text-white font-medium px-6 py-3 rounded-md transition-all duration-300"
            >
              View All Services
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      <ImageSection />
      
      <ImageCarousel />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read about the experiences of those who have found healing through our homeopathic treatments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                name={testimonial.name}
                role={testimonial.role}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center bg-white border border-om-green text-om-green hover:bg-om-green hover:text-white font-medium px-6 py-3 rounded-md transition-all duration-300"
            >
              More Testimonials
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-om-green rounded-lg shadow-xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="text-center text-white mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Begin Your Healing Journey Today
              </h2>
              <p className="text-lg max-w-2xl mx-auto">
                Take the first step towards natural healing and balanced health with personalized homeopathic treatments.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/appointment"
                className="bg-white text-om-green hover:bg-gray-100 font-medium px-6 py-3 rounded-md transition-colors text-center"
              >
                Book an Appointment
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border border-white text-white hover:bg-white hover:text-om-green font-medium px-6 py-3 rounded-md transition-all duration-300 text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
