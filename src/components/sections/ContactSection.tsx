
import ContactInfoCard from "@/components/ContactInfoCard";
import WhatsAppCard from "@/components/WhatsAppCard";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactInfoCard />
          <WhatsAppCard phoneNumber="91XXXXXXXXXX" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
