
import ContactInfoCard from "@/components/ContactInfoCard";
import WhatsAppCard from "@/components/WhatsAppCard";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Contact <span className="text-[#3a7265]">Us</span>
          </h2>
          <p className="text-gray-600">Get in touch with us for any queries</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden h-[400px]">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.6457474665584!2d77.2090567!3d28.5274847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMxJzM0LjgiTiA3N8KwMTInMzIuNiJF!5e0!3m2!1sen!2sin!4v1620901234567!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="space-y-6">
            <WhatsAppCard phoneNumber="91XXXXXXXXXX" />
            <ContactInfoCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
