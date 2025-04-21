
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, WhatsApp, Settings } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white pt-14 pb-7 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Logo and about */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-2">
              <img alt="Om Homeopathy Logo" className="h-10" src="/lovable-uploads/e9eacbd9-bebd-4ab2-83ed-5acedb2a8222.png" />
            </Link>
            <h3 className="text-xl font-semibold text-om-green mb-1">Om Homeopathy</h3>
            <p className="text-gray-600 mb-2">A place where natural healing begins.</p>
            <div className="flex mt-2 space-x-4">
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <WhatsApp size={22} className="text-gray-500 hover:text-om-green" />
              </a>
              <a href="#" className="hover:text-om-green" aria-label="Facebook">
                <Facebook size={20} className="text-gray-500" />
              </a>
              <a href="#" className="hover:text-om-green" aria-label="Instagram">
                <Instagram size={20} className="text-gray-500" />
              </a>
              <a href="#" className="hover:text-om-green" aria-label="Twitter">
                <Twitter size={20} className="text-gray-500" />
              </a>
              <a href="#" className="hover:text-om-green" aria-label="Linkedin">
                <Linkedin size={20} className="text-gray-500" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link to="/" className="hover:text-om-green transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-om-green transition-colors">About</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-om-green transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-om-green transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-om-green transition-colors">Vlogs / Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-om-green transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/patient-dashboard" className="hover:text-om-green transition-colors">Patient Login</Link>
              </li>
              <li>
                <Link to="/doctor-dashboard" className="hover:text-om-green transition-colors flex items-center gap-1">
                  <Settings size={16} /> Doctor Dashboard
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <div className="space-y-1 text-gray-700">
              <div>123 Healing Street, City</div>
              <div>Phone: +91 1234567890</div>
              <div>Email: info@omhomeopathy.com</div>
              <div>Mon-Sat: 9:00 AM - 7:00 PM</div>
            </div>
          </div>
          {/* Doctor Dashboard */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Doctor Access</h3>
            <Link
              to="/doctor-dashboard"
              className="inline-flex items-center gap-2 bg-om-green text-white px-4 py-2 rounded-md hover:bg-om-lightGreen transition-colors"
            >
              <Settings size={18} /> Doctor Dashboard
            </Link>
            <div className="mt-4 text-gray-500 text-sm">
              Secured login for medical staff only.
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-500 text-center text-sm">
            &copy; {currentYear} Om Homeopathy, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
