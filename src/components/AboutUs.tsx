
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Petra Christian Centre
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Heart className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We exist to build an ever-growing JESUS community globally by reaching and 
                      influencing everyday people with the Kingdom Culture, empowering them to 
                      transform every sphere of society.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Users className="h-8 w-8 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We replicate heaven here on earth by the adherent communion with the word 
                      of God and fellowship of the Holy Spirit.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div 
              className="bg-cover bg-center bg-no-repeat rounded-2xl p-8 text-center relative overflow-hidden"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
              }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="bg-white rounded-full p-6 inline-block mb-6 shadow-lg">
                  <Heart className="h-12 w-12 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Love • Family • Completeness</h3>
                <p className="text-blue-100 text-lg">
                  Experience the warmth of Christian fellowship and grow together in faith
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
