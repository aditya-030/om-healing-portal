import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "react-router-dom";

const TestimonialsSection = () => {
  const testimonials = [
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

  return (
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
          {testimonials.map((testimonial) => (
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
        
        <div className="text-center mt-8">
          <Link to="/testimonials" className="inline-block bg-[#3a7265] text-white px-6 py-3 rounded-md hover:bg-[#3a7265]/80 transition-colors">
            View More Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
