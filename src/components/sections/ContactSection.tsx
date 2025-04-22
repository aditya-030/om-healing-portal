
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ContactInfoCard />
          <WhatsAppCard phoneNumber="91XXXXXXXXXX" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
