
import Hero from "@/components/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import AppointmentSection from "@/components/sections/AppointmentSection";

const Index = () => {
  return (
    <main className="bg-[#f7f8f3] pt-16">
      <section id="home">
        <Hero />
      </section>

      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      <ContactFormSection />
      <AppointmentSection />
    </main>
  );
};

export default Index;
