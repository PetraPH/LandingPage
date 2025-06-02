
import { Card, CardContent } from "@/components/ui/card";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-white">
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
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7344609095617!2d6.989189974980058!3d4.815592695159889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cfdd3d4a33ed%3A0x701c9dfe5e63717f!2sThe%20Autograph!5e0!3m2!1sen!2sng!4v1748873981811!5m2!1sen!2sng" 
                  width="100%" 
                  height="400" 
                  style={{border: 0}} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
