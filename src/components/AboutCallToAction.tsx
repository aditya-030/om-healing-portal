
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutCallToAction = () => {
  return (
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
  );
};

export default AboutCallToAction;
