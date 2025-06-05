
import { Card, CardContent } from "@/components/ui/card";

const Pastors = () => {
  const pastors = [
    {
      name: "Ayo Ajani",
      title: "Senior Pastor",
      image:
        "https://res.cloudinary.com/messengerapptask/image/upload/v1749147018/petracc_ph/pastor-ayo_rg7o57.jpg",
    },
    {
      name: "Adeola Ajani",
      title: "Co-senior Pastor",
      image:
        "https://res.cloudinary.com/messengerapptask/image/upload/v1749147857/petracc_ph/WhatsApp_Image_2025-06-05_at_7.23.43_PM_bvqz3y.jpg",
    },
    {
      name: "Abraham Ademola",
      title: "Resident Pastor",
      image:
        "https://res.cloudinary.com/messengerapptask/image/upload/v1749147010/petracc_ph/ig-2_mfw9cu.jpg",
    },
  ]

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
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pastors.map((pastor, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-none shadow-md">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={pastor.image} 
                    alt={pastor.name}
                    className="w-full h-[24rem] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">Pastor {pastor.name}</h3>
                    <p className="text-blue-200">{pastor.title}</p>
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
