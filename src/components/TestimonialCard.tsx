
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  content: string;
  name: string;
  role?: string;
  image?: string;
  className?: string;
}

const TestimonialCard = ({ content, name, role, image, className }: TestimonialCardProps) => {
  return (
    <div className={cn("bg-white p-6 rounded-lg shadow-md border border-gray-100", className)}>
      <div className="mb-4">
        <svg className="h-8 w-8 text-om-green opacity-50" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>
      <p className="text-gray-600 mb-6">{content}</p>
      <div className="flex items-center">
        {image ? (
          <div className="mr-4">
            <img src={image} alt={name} className="h-12 w-12 rounded-full object-cover" />
          </div>
        ) : (
          <div className="mr-4">
            <div className="h-12 w-12 rounded-full bg-om-green/20 flex items-center justify-center text-om-green font-semibold">
              {name.charAt(0)}
            </div>
          </div>
        )}
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          {role && <p className="text-sm text-gray-500">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
