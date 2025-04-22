import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { User, Book, Home, Info, Stethoscope, Video, GalleryHorizontal, Mail } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = ["home", "about", "services", "testimonials", "gallery", "contact"];
      let currentSection = "home";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: "Home", id: "home", icon: <Home size={18} /> },
    { name: "About", id: "about", icon: <Info size={18} /> },
    { name: "Services", id: "services", icon: <Stethoscope size={18} /> },
    { name: "Testimonials", id: "testimonials", icon: <Video size={18} /> },
    { name: "Vlogs / Gallery", id: "gallery", icon: <GalleryHorizontal size={18} /> },
    { name: "Contact", id: "contact", icon: <Mail size={18} /> }
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 py-3",
      isScrolled ? "bg-[#f7f8f3] shadow-md" : "bg-[#f7f8f3]"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("home")}>
            <img alt="Om Homeopathy Logo" className="h-10" src="/lovable-uploads/f16f1b25-f46b-471d-9be5-2de374b67260.png" />
            <span className="text-xl font-bold text-emerald-800">OM Homeopathy</span>
          </div>
          
          <div className="hidden md:flex items-center justify-end w-[60%] ml-auto">
            <div className="flex items-center space-x-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "flex items-center gap-1 text-sm text-gray-900 px-3 py-1.5 font-medium rounded-full transition border-2 border-transparent hover:bg-[#dfeee9]",
                    activeSection === item.id && "bg-[#dfeee9] shadow",
                  )}
                >
                  {item.icon}
                  <span className="text-sm">{item.name}</span>
                </button>
              ))}
              <button
                onClick={() => scrollToSection("patient-login")}
                className="flex items-center gap-1 text-sm text-gray-900 px-3 py-1.5 font-medium rounded-full transition border-2 border-[#3a7265] hover:bg-[#dfeee9]"
              >
                <User size={18} />
                <span className="text-sm">Patient Login</span>
              </button>
              <button
                onClick={() => scrollToSection("appointment")}
                className="px-4 py-1.5 rounded-full bg-[#3a7265] text-white text-sm font-semibold shadow-lg hover:bg-[#3a7265]/90 transition flex items-center gap-1"
              >
                <Book size={18} />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
          
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
        
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#f7f8f3] shadow-lg py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "flex items-center gap-2 text-gray-800 px-3 py-2 font-medium rounded-full transition border-2 border-transparent hover:bg-[#dfeee9]",
                    activeSection === item.id && "bg-[#dfeee9] shadow"
                  )}
                  style={{borderRadius: "2rem"}}
                >
                  {item.icon}
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("patient-login")}
                className="flex items-center gap-2 text-gray-800 px-3 py-2 font-medium rounded-full transition border-2 border-[#3a7265] hover:bg-[#dfeee9]"
                style={{borderRadius: "2rem"}}
              >
                <User size={18} />
                Patient Login
              </button>
              <button
                onClick={() => scrollToSection("appointment")}
                className="mt-3 px-6 py-2 rounded-full bg-[#3a7265] text-white text-sm font-semibold shadow-lg hover:bg-[#3a7265]/90 transition"
                style={{ minWidth: 150, textAlign: "center", borderRadius: "2rem" }}
              >
                <Book size={18} className="inline mr-2 -mt-1" />
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
