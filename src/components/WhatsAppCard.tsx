
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface WhatsAppCardProps {
  phoneNumber: string;
}

const WhatsAppCard = ({ phoneNumber }: WhatsAppCardProps) => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-3">Contact via WhatsApp</h3>
      <p className="text-gray-600 mb-4">
        Click below to chat with us on WhatsApp for quick responses
      </p>
      <Button 
        onClick={handleWhatsAppClick}
        className="w-full bg-[#25D366] hover:bg-[#25D366]/90"
      >
        Open WhatsApp
      </Button>
    </Card>
  );
};

export default WhatsAppCard;
