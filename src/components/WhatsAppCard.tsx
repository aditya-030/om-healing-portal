
import { WhatsappIcon } from "lucide-react";

interface WhatsAppCardProps {
  phoneNumber: string;
}

const WhatsAppCard = ({ phoneNumber }: WhatsAppCardProps) => {
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="block w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
          <WhatsappIcon size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Chat with us on WhatsApp</h3>
        <p className="text-gray-600">Quick replies for appointment & queries</p>
        <button className="px-6 py-2 bg-[#25D366] text-white rounded-full hover:bg-[#25D366]/90 transition-colors">
          Chat Now
        </button>
      </div>
    </a>
  );
};

export default WhatsAppCard;
