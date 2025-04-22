
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfoCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="text-[#3a7265] mt-1" />
          <div>
            <h4 className="font-medium">Address</h4>
            <p className="text-gray-600">123 Healing Street, City, State 12345</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="text-[#3a7265] mt-1" />
          <div>
            <h4 className="font-medium">Phone</h4>
            <p className="text-gray-600">+91 1234567890</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="text-[#3a7265] mt-1" />
          <div>
            <h4 className="font-medium">Email</h4>
            <p className="text-gray-600">info@omhomeopathy.com</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="text-[#3a7265] mt-1" />
          <div>
            <h4 className="font-medium">Visiting Hours</h4>
            <p className="text-gray-600">
              Mon - Fri: 9:00 AM - 7:00 PM<br />
              Sat: 9:00 AM - 5:00 PM<br />
              Sun: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;
