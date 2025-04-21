
import TestimonialCard from "@/components/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      content: "After years of suffering from allergies, I finally found relief with Om Homeopathy. The doctor took time to understand my symptoms and prescribed a remedy that has made a significant difference. Their holistic approach has transformed my health completely.",
      name: "Priya Shah",
      role: "Patient",
      condition: "Chronic Allergies"
    },
    {
      content: "Dr. Mahto's expertise in homeopathy helped my chronic migraines when nothing else worked. After just a few months of treatment, the frequency and intensity of my headaches have decreased dramatically. I'm grateful for the personalized care I received.",
      name: "Rajiv Kumar",
      role: "Patient",
      condition: "Chronic Migraines"
    },
    {
      content: "The natural treatments at Om Homeopathy helped my daughter's eczema without any side effects. We had tried many conventional treatments before, but homeopathy was the only thing that provided lasting relief. We are so thankful for their gentle approach to healing.",
      name: "Meera Patel",
      role: "Patient",
      condition: "Pediatric Eczema"
    },
    {
      content: "I was skeptical about homeopathy until I experienced the results firsthand. My digestive issues have improved tremendously since starting treatment at Om Homeopathy. I appreciate their patient-centered approach and the time they take to listen.",
      name: "Vikram Naidu",
      role: "Patient",
      condition: "Digestive Issues"
    },
    {
      content: "Om Homeopathy's treatment for my anxiety has been life-changing. The remedies are gentle but effective, and I've noticed improvements not just in my anxiety but in my overall wellbeing. I highly recommend their services to anyone seeking natural healing.",
      name: "Ananya Sharma",
      role: "Patient",
      condition: "Anxiety"
    },
    {
      content: "After struggling with joint pain for years, I found relief through homeopathy. Dr. Mahto's treatment approach considers all aspects of health, not just the symptoms. This comprehensive care has made all the difference in my recovery journey.",
      name: "Mohan Kapoor",
      role: "Patient",
      condition: "Arthritis"
    }
  ];

  const videoTestimonials = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e",
      title: "Recovery from Chronic Fatigue",
      patient: "Sonali Mehta"
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
      title: "Overcoming Skin Issues",
      patient: "Rahul Singhania"
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
      title: "My Journey with Homeopathy",
      patient: "Kavita Patel"
    }
  ];

  return (
    <main>
      <section className="pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Patient <span className="text-om-green">Testimonials</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read about the experiences of those who have found healing through our homeopathic treatments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Patients Say</h2>
            <p className="text-lg text-gray-600">
              These testimonials reflect the experiences of our patients. Individual results may vary, but we are committed to providing personalized care for each person's unique health journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                name={testimonial.name}
                role={`${testimonial.role} - ${testimonial.condition}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Video Testimonials</h2>
            <p className="text-lg text-gray-600">
              Watch our patients share their healing journeys and experiences with Om Homeopathy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {videoTestimonials.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48 bg-gray-200">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="w-16 h-16 bg-om-green rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">{video.title}</h3>
                  <p className="text-gray-600">{video.patient}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-om-green rounded-lg shadow-xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="text-center text-white mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Begin Your Healing Journey?
              </h2>
              <p className="text-lg max-w-2xl mx-auto">
                Join our community of patients who have found natural solutions for their health concerns.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/appointment"
                className="bg-white text-om-green hover:bg-gray-100 font-medium px-6 py-3 rounded-md transition-colors text-center"
              >
                Book an Appointment
              </a>
              <a
                href="/contact"
                className="bg-transparent border border-white text-white hover:bg-white hover:text-om-green font-medium px-6 py-3 rounded-md transition-all duration-300 text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
