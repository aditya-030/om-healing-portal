
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram } from "lucide-react";
import { useState } from "react";

interface DoctorCardProps {
  name: string;
  title: string;
  image: string;
  description: string;
}

const DoctorCard = ({ name, title, image, description }: DoctorCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="overflow-hidden transition-all duration-300 border-none shadow-md hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover object-center transition-transform duration-300 hover:scale-105"
        />
        
        {/* Social media icons that appear on hover */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-4 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex gap-4">
            <button className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
              <Instagram className="text-[#3a7265] w-5 h-5" />
            </button>
            <button className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
              <Facebook className="text-[#3a7265] w-5 h-5" />
            </button>
            <button className="bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#3a7265] w-5 h-5">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <CardContent className="p-5">
        <h3 className="font-bold text-lg text-navy-800 mb-1">{name}</h3>
        <h4 className="text-[#3a7265] text-sm font-medium mb-2">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
