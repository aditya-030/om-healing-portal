
import { useState } from "react";

const ContactFormSection = () => {
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
    alert("Thank you for your message. We will get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-[#f7f8f3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-7">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Contact <span className="text-[#3a7265]">Us</span>
          </h2>
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
  );
};

export default ContactFormSection;
