import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import AnimalHomeopathySection from "@/components/sections/AnimalHomeopathySection";

const Services = () => {
  const services = [
    {
      title: "Chronic Diseases",
      description: "Personalized homeopathic treatments for long-term health conditions like diabetes, hypertension, and arthritis.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      link: "/services"
    },
    {
      title: "Allergies & Immunity",
      description: "Boost your natural immunity and find relief from seasonal allergies, food sensitivities, and respiratory conditions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      link: "/services"
    },
    {
      title: "Skin Conditions",
      description: "Effective remedies for various skin issues including eczema, psoriasis, acne, and other dermatological concerns.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      link: "/services"
    },
    {
      title: "Digestive Disorders",
      description: "Relief from IBS, acid reflux, bloating, constipation and other gastrointestinal issues through holistic treatment.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      link: "/services"
    },
    {
      title: "Women's Health",
      description: "Specialized care for women's issues including menstrual problems, PCOS, menopause symptoms, and fertility support.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      link: "/services"
    },
    {
      title: "Mental Health",
      description: "Support for anxiety, depression, stress, insomnia and other mental health concerns through gentle homeopathic treatments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      link: "/services"
    },
    {
      title: "Pediatric Care",
      description: "Gentle and effective treatments for children's health issues including recurrent infections, behavioral concerns, and developmental disorders.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        </svg>
      ),
      link: "/services"
    },
    {
      title: "Respiratory Problems",
      description: "Relief from asthma, bronchitis, sinusitis, and other respiratory conditions through targeted homeopathic remedies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
      link: "/services"
    },
    {
      title: "Senior Health",
      description: "Supportive care for elderly patients, addressing age-related concerns and maintaining quality of life through natural treatments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      link: "/services"
    }
  ];

  return (
    <main>
      <section className="pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-om-green">Services</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive homeopathic care for a wide range of health concerns, tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      <AnimalHomeopathySection />

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Homeopathic Approach</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Om Homeopathy, we follow the classical principles of homeopathy established by Dr. Samuel Hahnemann. Our approach is based on understanding the individual as a whole – not just their symptoms, but their constitution, lifestyle, emotional state, and more.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We take time to listen, observe, and ask detailed questions about your health history and current concerns. This thorough assessment allows us to select the most appropriate homeopathic remedies for your specific situation.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our treatments aim to stimulate your body's natural healing processes, gradually restoring balance and health without side effects or dependency.
            </p>
            <Link
              to="/appointment"
              className="inline-flex items-center bg-om-green text-white hover:bg-om-lightGreen font-medium px-6 py-3 rounded-md transition-all duration-300"
            >
              Book a Consultation
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

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-om-green rounded-lg shadow-xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="text-center text-white mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-lg max-w-2xl mx-auto">
                Our experienced doctors can help assess your condition and recommend the most appropriate treatment plan.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/appointment"
                className="bg-white text-om-green hover:bg-gray-100 font-medium px-6 py-3 rounded-md transition-colors text-center"
              >
                Book an Initial Consultation
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border border-white text-white hover:bg-white hover:text-om-green font-medium px-6 py-3 rounded-md transition-all duration-300 text-center"
              >
                Contact Us with Questions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
