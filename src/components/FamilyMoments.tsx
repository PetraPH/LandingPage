
import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const FamilyMoments = () => {
  const reels = [
    {
      id: 1,
      url: "https://www.instagram.com/reel/C8zPQZHoc-h/?igsh=azRsanNuZnRzbm4z",
      title: "Family Worship"
    },
    {
      id: 2,
      url: "https://www.instagram.com/reel/DIOhse9Ik20/?igsh=MWdndndneGEyajRrZA==",
      title: "Community Fellowship"
    },
    {
      id: 3,
      url: "https://www.instagram.com/reel/DKFM_JUIqLt/?igsh=MXJvcXp3bzVkanh1dw==",
      title: "Church Family"
    }
  ];

  return (
    <section id="family-moments" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Family Moments
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Experience the joy and fellowship of our church family
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reels.map((reel) => (
            <Card key={reel.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-8 text-center">
                  <Instagram className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{reel.title}</h3>
                  <Button 
                    onClick={() => window.open(reel.url, '_blank')}
                    className="bg-pink-500 hover:bg-pink-600 text-white"
                  >
                    Watch on Instagram
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => window.open('https://instagram.com/petracc_portharcourt', '_blank')}
            variant="outline"
            className="border-pink-500 text-pink-500 hover:bg-pink-50"
          >
            <Instagram className="h-5 w-5 mr-2" />
            Follow us on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FamilyMoments;
