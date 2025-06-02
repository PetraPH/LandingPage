
import { Instagram, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialMedia = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <Heart className="mx-auto h-12 w-12 text-red-300 mb-6" />
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Connected
        </h2>
        
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join our online community and stay updated with church events, 
          sermons, and family moments
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            onClick={() => window.open('https://instagram.com/petracc_portharcourt', '_blank')}
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg"
          >
            <Instagram className="h-5 w-5 mr-2" />
            Follow on Instagram
          </Button>
        </div>

        <div className="border-t border-blue-400 pt-8">
          <p className="text-blue-200 text-lg">
            © 2024 Petra Christian Centre Port Harcourt. 
            <span className="block mt-2">Built with love for our church family.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
