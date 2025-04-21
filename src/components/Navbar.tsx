
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { User, Book, Home, Info, Stethoscope, Video, GalleryHorizontal } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "About", path: "/about", icon: <Info size={18} /> },
    { name: "Services", path: "/services", icon: <Stethoscope size={18} /> },
    { name: "Testimonials", path: "/testimonials", icon: <Video size={18} /> },
    { name: "Vlogs / Gallery", path: "/gallery", icon: <GalleryHorizontal size={18} /> },
    { name: "Contact", path: "/contact", icon: <Info size={18} /> },
    { name: "Patient Login", path: "/patient-dashboard", icon: <User size={18} /> }
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 py-3",
      isScrolled ? "bg-[#A5D6A7] shadow-md" : "bg-[#A5D6A7]"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img alt="Om Homeopathy Logo" className="h-10" src="/lovable-uploads/f16f1b25-f46b-471d-9be5-2de374b67260.png" />
          <span className="text-xl font-bold text-emerald-800">OM Homeopathy</span>
        </Link>
        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-1 text-gray-800 hover:text-white transition px-2 font-medium rounded",
                location.pathname === item.path && "text-white bg-om-green"
              )}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
          <Link
            to="/appointment"
            className="ml-3 px-5 py-2 rounded-md bg-om-green text-white font-semibold shadow-md hover:bg-om-lightGreen transition"
            style={{ minWidth: 160, textAlign: "center" }}
          >
            <Book size={18} className="inline mr-2 -mt-1" />
            Book Appointment
          </Link>
        </div>
        {/* Mobile button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#A5D6A7] shadow-lg py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-2 text-gray-800 hover:text-white px-3 py-2 rounded transition",
                  location.pathname === item.path && "text-white bg-om-green"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
            <Link
              to="/appointment"
              className="mt-3 px-5 py-2 rounded-md bg-om-green text-white font-semibold shadow-md hover:bg-om-lightGreen transition"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ minWidth: 150, textAlign: "center" }}
            >
              <Book size={18} className="inline mr-2 -mt-1" />
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
