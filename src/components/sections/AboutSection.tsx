
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
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
            <Button 
              className="mt-6 bg-blue-600 hover:bg-blue-700"
              onClick={() => scrollToSection("about")}
            >
              More About Us
            </Button>
          </div>
          <div className="md:w-1/2">
            <img
              src="/lovable-uploads/4e7b6190-1a7f-4712-941f-bb32814cb3de.png"
              alt="Om Homeopathy Clinic"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
