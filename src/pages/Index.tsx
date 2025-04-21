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

  const aboutContent = (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">
          About <span className="text-om-green">Om Homeopathy</span>
        </h2>
        <p className="text-gray-700 text-lg mb-2">
          At Om Homeopathy, our mission is to restore harmony and wellness through the power of homeopathic medicine. 
        </p>
        <p className="text-gray-700 text-base mb-2">
          Guided by the vision and values of compassionate natural healing, we use individualized treatments that address the root causes of disease, not just symptoms. 
        </p>
        <p className="text-gray-700 text-base">
          Our founder, Dr. Kameshwar Mahto, is committed to providing personalized patient care rooted in classical homeopathic principles for all ages and life stages.
        </p>
      </div>
    </section>
  );

  const testimonialsSection = (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            What Patients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          <div className="rounded-lg overflow-hidden shadow bg-white">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Testimonial Video 1"
                className="w-full h-56"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-700">"Thank you Dr. Mahto for healing my chronic migraines naturally!"</p>
              <span className="block text-xs text-om-green mt-2">- Rajan Singh</span>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow bg-white">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/eRnjyhwfAqk"
                title="Testimonial Video 2"
                className="w-full h-56"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-700">"My son's allergies vanished with Om Homeopathy's gentle remedies."</p>
              <span className="block text-xs text-om-green mt-2">- Meera Patel</span>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow bg-white">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/4NQpTvNcV4w"
                title="Testimonial Video 3"
                className="w-full h-56"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-700">"The whole clinic feels so peaceful and caring. Wonderful healing."</p>
              <span className="block text-xs text-om-green mt-2">- S. Bhattacharya</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const vlogsGallerySection = (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Vlogs & <span className="text-om-green">Gallery</span>
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            See our clinic, team, and moments from events.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow group">
            <img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" alt="Clinic flowers" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-150" />
          </div>
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow group">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Clinic environment" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-150" />
          </div>
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow group">
            <img src="https://images.unsplash.com/photo-1472396961693-142e6e269027" alt="Healing team" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-150" />
          </div>
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow group">
            <iframe
              src="https://www.youtube.com/embed/4NQpTvNcV4w"
              title="Clinic Tour Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="/gallery"
            className="inline-block bg-om-green text-white font-medium px-6 py-3 rounded-md hover:bg-om-lightGreen transition-all mt-2"
          >
            See More in Gallery
          </a>
        </div>
      </div>
    </section>
  );

  const contactSection = (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-7">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Contact <span className="text-om-green">Us</span></h2>
          <p className="text-gray-600 mb-4">We’re here to answer your questions or book a visit!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <form className="bg-white shadow rounded-lg p-7 flex flex-col space-y-4">
            <input className="px-4 py-3 border border-gray-200 rounded focus:ring-2 focus:ring-om-green" required type="text" name="name" placeholder="Your Name" />
            <input className="px-4 py-3 border border-gray-200 rounded focus:ring-2 focus:ring-om-green" required type="email" name="email" placeholder="Your Email" />
            <textarea className="px-4 py-3 border border-gray-200 rounded focus:ring-2 focus:ring-om-green" required name="message" placeholder="Message" rows={4}></textarea>
            <button
              type="submit"
              className="bg-om-green hover:bg-om-lightGreen text-white font-bold px-7 py-3 rounded transition-all"
            >
              Send Message
            </button>
          </form>
          <div className="rounded-lg overflow-hidden shadow-md bg-white h-full flex flex-col">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps?q=123+Healing+Street,City&output=embed"
              className="w-full h-56 md:h-full border-0"
              allowFullScreen
              loading="lazy"
            />
            <div className="p-4">
              <div className="font-semibold mb-1 text-om-green">Om Homeopathy Clinic</div>
              <div className="text-gray-600 text-sm">
                123 Healing Street, City, State<br />
                Phone: +91 1234567890<br />
                Email: info@omhomeopathy.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <main>
      <Hero />
      {aboutContent}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-om-green">Services</span>
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
      {testimonialsSection}
      {vlogsGallerySection}
      {contactSection}
    </main>
  );
};

export default Index;
