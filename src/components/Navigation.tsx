
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-slate-950">Petra Christian Centre</h1>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-slate-950 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('family-moments')}
                className="text-gray-600 hover:text-slate-950 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Family Moments
              </button>
              <button
                onClick={() => scrollToSection('pastors')}
                className="text-gray-600 hover:text-slate-950 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Our Pastors
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="text-gray-600 hover:text-slate-950 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Location
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600"
            >
              Menu
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-slate-950 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('family-moments')}
                className="text-gray-600 hover:text-slate-950 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Family Moments
              </button>
              <button
                onClick={() => scrollToSection('pastors')}
                className="text-gray-600 hover:text-slate-950 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Our Pastors
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="text-gray-600 hover:text-slate-950 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Location
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
