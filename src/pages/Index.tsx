
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Thank you for your message. We will get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  // Services data
  const services = [
    {
      title: "Chronic Diseases",
      description: "Personalized homeopathic treatments for long-term health conditions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Allergies & Immunity",
      description: "Boost your natural immunity and find relief from allergies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Skin Conditions",
      description: "Effective remedies for various skin issues and disorders.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      )
    }
  ];

  // Video testimonials
  const videoTestimonials = [
    {
      id: 1,
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      quote: "Thank you Dr. Mahto for healing my chronic migraines naturally!",
      name: "Rajan Singh"
    },
    {
      id: 2,
      embedUrl: "https://www.youtube.com/embed/eRnjyhwfAqk",
      quote: "My son's allergies vanished with Om Homeopathy's gentle remedies.",
      name: "Meera Patel"
    },
    {
      id: 3,
      embedUrl: "https://www.youtube.com/embed/4NQpTvNcV4w",
      quote: "The whole clinic feels so peaceful and caring. Wonderful healing.",
      name: "S. Bhattacharya"
    }
  ];

  // Gallery items
  const galleryItems = [
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      alt: "Clinic flowers"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Clinic environment"
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      alt: "Healing team"
    },
    {
      type: "video",
      embedUrl: "https://www.youtube.com/embed/4NQpTvNcV4w",
      title: "Clinic Tour"
    }
  ];

  return (
    <main className="bg-[#f7f8f3] pt-16">
      {/* Home/Landing Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">
            About <span className="text-[#3a7265]">Om Homeopathy</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg mb-4">
              At Om Homeopathy, our mission is to restore harmony and wellness through the power of homeopathic medicine. 
              We believe in treating the whole person, not just the symptoms, to achieve true and lasting healing.
            </p>
            <p className="text-gray-700 text-base mb-4">
              Guided by the vision and values of compassionate natural healing, we use individualized treatments that address the root causes of disease, 
              creating personalized plans that honor the body's natural healing abilities.
            </p>
            <p className="text-gray-700 text-base">
              Our founder, Dr. Kameshwar Mahto, is committed to providing personalized patient care rooted in classical homeopathic principles for all ages and life stages.
              With years of expertise, we've helped thousands of patients find relief and restoration naturally.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-[#3a7265]">Services</span>
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
                link="#"
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              className="inline-flex items-center border border-[#3a7265] text-[#3a7265] hover:bg-[#3a7265] hover:text-white font-medium px-6 py-3 rounded-md transition-all duration-300"
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
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-[#f7f8f3]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              What Patients <span className="text-[#3a7265]">Say</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our patients about their healing journeys with Om Homeopathy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {videoTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="rounded-lg overflow-hidden shadow bg-white">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={testimonial.embedUrl}
                    title={`Testimonial from ${testimonial.name}`}
                    className="w-full h-56"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-700">"{testimonial.quote}"</p>
                  <span className="block text-xs text-[#3a7265] mt-2">- {testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <TestimonialCard
              content="After years of suffering from allergies, I finally found relief with Om Homeopathy. Their holistic approach has transformed my health completely."
              name="Priya Shah"
              role="Patient"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
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
            {galleryItems.map((item, index) => (
              <div key={index} className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow group">
                {item.type === "image" ? (
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-150" 
                  />
                ) : (
                  <iframe
                    src={item.embedUrl}
                    title={item.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="inline-block bg-[#3a7265] text-white font-medium px-6 py-3 rounded-md hover:bg-[#3a7265]/80 transition-all mt-2">
              See More in Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#f7f8f3]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-7">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Contact <span className="text-[#3a7265]">Us</span></h2>
            <p className="text-gray-600 mb-4">We're here to answer your questions or book a visit!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-7 flex flex-col space-y-4">
              <input 
                className="px-4 py-3 border border-gray-200 rounded focus:ring-2 focus:ring-[#3a7265] focus:border-[#3a7265] outline-none" 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
                value={formData.name}
                onChange={handleInputChange}
              />
              <input 
                className="px-4 py-3 border border-gray-200 rounded focus:ring-2 focus:ring-[#3a7265] focus:border-[#3a7265] outline-none" 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
                value={formData.email}
                onChange={handleInputChange}
              />
              <textarea 
                className="px-4 py-3 border border-gray-200 rounded focus:ring-2 focus:ring-[#3a7265] focus:border-[#3a7265] outline-none" 
                name="message" 
                placeholder="Message" 
                rows={4} 
                required
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              <button
                type="submit"
                className="bg-[#3a7265] hover:bg-[#3a7265]/80 text-white font-bold px-7 py-3 rounded transition-all"
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
                <div className="font-semibold mb-1 text-[#3a7265]">Om Homeopathy Clinic</div>
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

      {/* Patient Login Section (Hidden unless accessed via navbar) */}
      <section id="patient-login" className="bg-[#f7f8f3] py-16 hidden">
        <div className="container mx-auto px-4 max-w-md">
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Patient Login</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#3a7265] focus:border-[#3a7265] outline-none" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Password</label>
                <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#3a7265] focus:border-[#3a7265] outline-none" />
              </div>
              <button className="w-full bg-[#3a7265] text-white py-2 rounded hover:bg-[#3a7265]/80 transition-colors">Login</button>
            </form>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="py-16 bg-[#f7f8f3]">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">Book an <span className="text-[#3a7265]">Appointment</span></h2>
            <p className="text-gray-600">Schedule a consultation with our experienced homeopathic doctors</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#3a7265] focus:border-[#3a7265] outline-none" required />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#3a7265] focus:border-[#3a7265] outline-none" required />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#3a7265] focus:border-[#3a7265] outline-none" required />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Preferred Date</label>
                <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#3a7265] focus:border-[#3a7265] outline-none" required />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Health Concern</label>
                <textarea className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#3a7265] focus:border-[#3a7265] outline-none" rows={3} required></textarea>
              </div>
              <button type="submit" className="w-full bg-[#3a7265] text-white py-3 rounded hover:bg-[#3a7265]/80 transition-colors font-bold">Request Appointment</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
