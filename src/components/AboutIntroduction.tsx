
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const AboutIntroduction = () => {
  return (
    <div>
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
    </div>
  );
};

export default AboutIntroduction;
