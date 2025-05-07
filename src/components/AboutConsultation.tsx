
import React from "react";
import { InfoIcon, PlayCircle } from "lucide-react";

const AboutConsultation = () => {
  return (
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
  );
};

export default AboutConsultation;
