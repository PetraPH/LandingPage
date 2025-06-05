import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const FamilyMoments = () => {
  const reels = [
    {
      id: 1,
      url: "https://www.instagram.com/reel/C8zPQZHoc-h/?igsh=azRsanNuZnRzbm4z",
      title: "Family Worship",
      thumbnail:
        "https://res.cloudinary.com/messengerapptask/image/upload/v1749147010/petracc_ph/ig-2_mfw9cu.jpg",
    },
    {
      id: 2,
      url: "https://www.instagram.com/reel/DIOhse9Ik20/?igsh=MWdndndneGEyajRrZA==",
      title: "Community Fellowship",
      thumbnail:
        "https://res.cloudinary.com/messengerapptask/image/upload/v1749147009/petracc_ph/ig-1_pm4alh.jpg",
    },
    {
      id: 3,
      url: "https://www.instagram.com/reel/DKFM_JUIqLt/?igsh=MXJvcXp3bzVkanh1dw==",
      title: "Church Family",
      thumbnail:
        "https://res.cloudinary.com/messengerapptask/image/upload/v1749147004/petracc_ph/ig-3_q0t8kc.jpg",
    },
  ]

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
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reels.map((reel) => (
            <Card
              key={reel.id}
              className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <button
                      onClick={() => window.open(reel.url, "_blank")}
                      className="bg-pink-500 rounded-full p-4 group-hover:scale-110 transition-transform duration-300"
                    >
                      <Play className="h-8 w-8 text-white fill-current" />
                    </button>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Instagram className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {reel.title}
                  </h3>
                  <Button
                    onClick={() => window.open(reel.url, "_blank")}
                    className="bg-pink-500 hover:bg-pink-600 text-white w-full"
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
            onClick={() =>
              window.open(
                "https://instagram.com/petracc_portharcourt",
                "_blank"
              )
            }
            variant="outline"
            className="border-pink-500 text-pink-500 hover:bg-pink-50"
          >
            <Instagram className="h-5 w-5 mr-2" />
            Follow us on Instagram
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FamilyMoments
