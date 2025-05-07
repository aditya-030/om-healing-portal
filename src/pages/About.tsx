
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { InfoIcon, PlayCircle, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import WhatsAppCard from "@/components/WhatsAppCard";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import DoctorCard from "@/components/DoctorCard";

const About = () => {
  return (
    <main className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/4d0a3fff-c817-4453-9cc9-1a67f8556cc2.png')] bg-cover bg-center opacity-10 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              About
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#3a7265] font-medium">TOP HOMEOPATHY CLINIC IN MALAPPURAM</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mt-3">
              Taking Care Of Your Health Is<br />Our Top Priority
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-center mb-16">
            <div className="lg:w-1/2">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/91423c29-9bad-470e-a388-aef213c725f9.png"
                  alt="Om Homeopathy Clinic Interior" 
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white p-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex text-green-500">
                      <Star className="fill-green-500 stroke-green-500 w-4 h-4" />
                      <Star className="fill-green-500 stroke-green-500 w-4 h-4" />
                      <Star className="fill-green-500 stroke-green-500 w-4 h-4" />
                      <Star className="fill-green-500 stroke-green-500 w-4 h-4" />
                      <Star className="fill-green-500 stroke-green-500 w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-sm font-medium">+91 00 000 0000</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <p className="text-gray-700">
                At Olive Homeopathy Clinic, our mission is to provide natural, safe, 
                and effective treatments that promote overall health. We believe in 
                homeopathy's ability to heal from within, addressing not just the 
                symptoms but the underlying causes of illness. Our goal is to 
                provide individualized treatment that balances mind and body, they require to 
                achieve and maintain optimal health.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-[#3a7265] hover:bg-[#3a7265]/90">
                  <Link to="/about">
                    MORE ABOUT US
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center bg-blue-50 rounded-lg overflow-hidden mb-20">
            <div className="lg:w-1/3 p-6">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/4e7b6190-1a7f-4712-941f-bb32814cb3de.png" 
                  alt="Doctor Consultation" 
                  className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-white p-2 shadow-lg">
                    <PlayCircle className="w-8 h-8 text-[#3a7265]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 p-6">
              <p className="text-gray-700 mb-4">
                Olive Homeopathy Clinic provides both online and office consultations to our
                patients, allowing for more flexible and convenient care.
              </p>
              <div className="flex items-center gap-2 mb-2">
                <InfoIcon className="w-5 h-5 text-[#3a7265]" />
                <span className="text-gray-600">Support Line 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center text-[#3a7265]">
                  @
                </div>
                <span className="text-[#3a7265] font-medium">info@olivehomeopathy.com</span>
              </div>
            </div>
          </div>

          {/* Our Team of Doctors Section */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-800">Our Team of Doctors to Take Care of You</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <DoctorCard
                name="Dr. Sarah Johnson"
                title="Senior Homeopathic Physician"
                image="/lovable-uploads/5cbb148b-6478-4e10-a734-48029ffef217.png"
                description="Specializing in chronic diseases with over 15 years of experience in classical homeopathy."
              />
              
              <DoctorCard
                name="Dr. Michael Chen"
                title="Homeopathic Consultant"
                image="/lovable-uploads/91423c29-9bad-470e-a388-aef213c725f9.png"
                description="Expert in pediatric homeopathy and women's health issues with international training."
              />
              
              <DoctorCard
                name="Dr. Priya Sharma"
                title="Chief Homeopathic Physician"
                image="/lovable-uploads/ffb00bc7-1c12-4424-be15-955af7b5a61a.png"
                description="Founder and head physician with specialization in autoimmune disorders and skin conditions."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#3a7265] font-medium">WHY DID YOU CHOOSE TEAM OLIVE HOMEOPATHY?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mt-3">
              We Have The Best Top-Rated<br />Homeopathic Doctors In India
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-5 bg-white border-none shadow-sm">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-lg p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M19 17v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1"></path>
                    <path d="M12 11.5c2.976 0 5-1.657 5-3.5s-2.024-3.5-5-3.5S7 6.157 7 8s2.024 3.5 5 3.5z"></path>
                    <rect x="7" y="11" width="10" height="6" rx="1"></rect>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-800">Expert doctors</h3>
                  <p className="text-sm text-gray-600">with years of experience</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-5 bg-white border-none shadow-sm">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-lg p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                    <path d="m8 14-6 6h9v-3"></path>
                    <path d="M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-800">Non-surgical treatment</h3>
                  <p className="text-sm text-gray-600">100% surgeries avoided</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-5 bg-white border-none shadow-sm">
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 rounded-lg p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                    <path d="M4.18 4.18A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"></path>
                    <path d="M21 15.5V6a2 2 0 0 0-2-2H9.5"></path>
                    <path d="M16 2H3a1 1 0 0 0-1 1v14c0 .6.4 1 1 1h13"></path>
                    <path d="m16 16 2 2 4-4"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-800">High quality imported medicines</h3>
                  <p className="text-sm text-gray-600">Using German and Indo-German medicines</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-5 bg-white border-none shadow-sm">
              <div className="flex items-start gap-3">
                <div className="bg-orange-100 rounded-lg p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600">
                    <path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0"></path>
                    <circle cx="12" cy="8" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-800">Patients from 26+ countries</h3>
                  <p className="text-sm text-gray-600">Online facility to receive our care wherever you are</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-lg overflow-hidden mb-16">
              <img 
                src="/lovable-uploads/ffb00bc7-1c12-4424-be15-955af7b5a61a.png" 
                alt="Doctor" 
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-white/80 p-3 shadow-lg">
                  <PlayCircle className="w-12 h-12 text-[#3a7265]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-navy-900 to-navy-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-[#3a7265]">Olive Homeopathy</span> Is A Top-Rated, Globally Recognized Homeopathy Clinic.
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                <Link to="/appointment">
                  MAKE AN APPOINTMENT
                </Link>
              </Button>
              
              <Button asChild className="bg-[#3a7265] hover:bg-[#3a7265]/90 text-white rounded-full px-8">
                <Link to="/contact">
                  CONTACT US NOW
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
