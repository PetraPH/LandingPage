
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

const Pastors = () => {
  const pastors = [
    {
      name: "Ayo Ajani",
      title: "Senior Pastor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Adeola Ajani",
      title: "Co-senior Pastor",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b3de?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Abraham Ademola",
      title: "Resident Pastor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section id="pastors" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Pastors
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Our dedicated spiritual leaders guiding our church family
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pastors.map((pastor, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-none shadow-md">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={pastor.image} 
                    alt={pastor.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{pastor.name}</h3>
                    <p className="text-blue-200">{pastor.title}</p>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
                  <div className="flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600 mr-2" />
                    <span className="text-gray-700 font-medium">Servant Leader</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pastors;
