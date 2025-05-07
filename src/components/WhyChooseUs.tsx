
import React from "react";
import { Card } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";

const WhyChooseUs = () => {
  return (
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
  );
};

export default WhyChooseUs;
