
import { Card, CardContent } from "@/components/ui/card";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Join us for worship and fellowship
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Petra Christian Centre</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                    <p className="text-gray-600">Port Harcourt, Nigeria</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Service Times</h4>
                    <p className="text-gray-600">Sunday Service: 8:00 AM & 10:00 AM</p>
                    <p className="text-gray-600">Wednesday Bible Study: 6:00 PM</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
                    <p className="text-gray-600">Follow us on Instagram for updates</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 text-center h-64 flex items-center justify-center">
                  <div>
                    <div className="bg-white rounded-full p-4 inline-block mb-4 shadow-lg">
                      <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Map</h3>
                    <p className="text-gray-600">
                      Map integration will be available soon.<br />
                      Please contact us for detailed directions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
