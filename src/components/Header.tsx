import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-card/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-montserrat font-semibold text-brand-navy">
              Школа Реальної Політики
            </h2>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Про школу
            </button>
            <button 
              onClick={() => scrollToSection('course')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Курс
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Ціни
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </button>
          </nav>

          <Button 
            onClick={() => scrollToSection('registration')}
            variant="hero"
            size="sm"
          >
            Зареєструватися зараз
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;