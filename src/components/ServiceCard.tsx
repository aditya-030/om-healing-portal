
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
}

const ServiceCard = ({ title, description, icon, link, className }: ServiceCardProps) => {
  return (
    <div className={cn("bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl border border-gray-100", className)}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 text-om-green w-16 h-16 flex items-center justify-center bg-om-green/10 rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-5">{description}</p>
        <Link 
          to={link}
          className="inline-flex items-center text-om-green hover:text-om-lightGreen font-medium"
        >
          Learn More
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
