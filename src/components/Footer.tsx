
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Settings } from "lucide-react";

// Inline WhatsApp SVG icon (Lucide does not export WhatsApp)
const WhatsAppIcon = ({ size = 22, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.941 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.521.151-.175.2-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.211-.242-.58-.487-.502-.669-.511-.173-.008-.371-.009-.57-.009s-.521.074-.794.372c-.273.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.075.149.198 2.095 3.21 5.077 4.374.71.306 1.262.489 1.695.626.712.227 1.361.195 1.872.119.571-.085 1.758-.719 2.006-1.414.248-.695.248-1.289.173-1.414-.075-.124-.272-.198-.57-.347zm-5.421 6.283h-.001a9.87 9.87 0 01-5.031-1.378l-.362-.215-3.741.982.999-3.646-.235-.374A9.861 9.861 0 0112.003 2C17.014 2 21 5.936 21 11.02c0 5.084-4.144 9.646-8.949 9.646zm8.917-14.228C19.045 4.608 15.705 2.857 12.006 2.857c-7.131 0-12.915 5.783-12.915 12.914 0 2.282.594 4.523 1.714 6.482l-1.829 6.66 6.765-1.774c1.917 1.072 4.012 1.643 6.287 1.643 7.132 0 12.914-5.782 12.914-12.913 0-2.53-.69-4.916-1.975-7.032z" fill="currentColor"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="pt-14 pb-7 border-t border-gray-200" style={{ backgroundColor: "rgb(61, 84, 45)" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Logo and about */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-2">
              <img alt="Om Homeopathy Logo" className="h-10" src="/lovable-uploads/e9eacbd9-bebd-4ab2-83ed-5acedb2a8222.png" />
            </Link>
            <h3 className="text-xl font-semibold text-white mb-1">Om Homeopathy</h3>
            <p className="text-gray-200 mb-2">A place where natural healing begins.</p>
            <div className="flex mt-2 space-x-4">
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <WhatsAppIcon size={22} className="text-white hover:text-om-green" />
              </a>
              <a href="#" className="hover:text-om-green" aria-label="Facebook">
                <Facebook size={20} className="text-white/80" />
              </a>
              <a href="#" className="hover:text-om-green" aria-label="Instagram">
                <Instagram size={20} className="text-white/80" />
              </a>
              <a href="#" className="hover:text-om-green" aria-label="Twitter">
                <Twitter size={20} className="text-white/80" />
              </a>
              <a href="#" className="hover:text-om-green" aria-label="Linkedin">
                <Linkedin size={20} className="text-white/80" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-100">
              <li><Link to="/" className="hover:text-om-lightGreen transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-om-lightGreen transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-om-lightGreen transition-colors">Services</Link></li>
              <li><Link to="/testimonials" className="hover:text-om-lightGreen transition-colors">Testimonials</Link></li>
              <li><Link to="/gallery" className="hover:text-om-lightGreen transition-colors">Vlogs / Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-om-lightGreen transition-colors">Contact</Link></li>
              <li><Link to="/patient-dashboard" className="hover:text-om-lightGreen transition-colors">Patient Login</Link></li>
              {/* Remove Doctor Dashboard from here, now only in next block */}
            </ul>
          </div>
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">Contact</h3>
            <div className="space-y-1 text-gray-100">
              <div>123 Healing Street, City</div>
              <div>Phone: +91 1234567890</div>
              <div>Email: info@omhomeopathy.com</div>
              <div>Mon-Sat: 9:00 AM - 7:00 PM</div>
            </div>
          </div>
          {/* Doctor Dashboard */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">Doctor Access</h3>
            <Link
              to="/doctor-dashboard"
              className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-md hover:bg-om-green transition-colors"
            >
              <Settings size={18} /> Doctor Dashboard
            </Link>
            <div className="mt-4 text-gray-300 text-sm">
              Secured login for medical staff only.
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-200 text-center text-sm">
            &copy; {currentYear} Om Homeopathy, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
