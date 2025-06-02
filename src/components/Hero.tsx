
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80"></div>
      
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8">
          <Heart className="mx-auto h-16 w-16 text-red-400 mb-6" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Welcome to
          <span className="block text-blue-300">Petra Christian Centre</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Building an ever-growing JESUS community globally through love, family, and completeness
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection('about')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
          >
            Learn About Us
          </Button>
          <Button 
            onClick={() => scrollToSection('family-moments')}
            variant="outline" 
            className="border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white px-8 py-3 text-lg"
          >
            See Our Family
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
