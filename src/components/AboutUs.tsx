import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users } from "lucide-react"

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Petra Christian Centre
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <Card className="border-none shadow-lg flex flex-col justify-center items-center">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Users className="h-8 w-8 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-600 leading-relaxed">
                    We exist to build an ever-growing JESUS community globally
                    by reaching and influencing everyday people with the Kingdom
                    Culture, empowering them to transform every sphere of
                    society.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We replicate heaven here on earth by the adherent communion
                    with the word of God and fellowship of the Holy Spirit.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="relative">
            <div
              className="bg-cover bg-no-repeat rounded-2xl p-8 text-center relative overflow-hidden about-bg lg:min-h-[20rem] flex justify-center items-center flex-col min-h-full"
              style={{
                backgroundImage: `url('/images/about.jpg')`,
              }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-950/60 to-yellow-900/60 rounded-2xl"></div>

              <div className="relative z-10">
                <img
                  src="/images/logo.png"
                  className="w-28 h-28 mx-auto block"
                />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Love • Family • Community
                </h3>
                <p className="text-white text-lg">
                  Experience the warmth of Christian fellowship and grow
                  together in faith.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
