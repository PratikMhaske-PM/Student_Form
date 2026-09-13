import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold">Contact Us</h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Get in touch with us using the details below.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-semibold text-gray-900">Address</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      Adsul Technical Campus<br />
                      Chas, Ahilyanagar
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-semibold text-gray-900">Phone</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      Main Office: +1 (555) 123-4567<br />
                      Admissions: +1 (555) 123-4568
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-semibold text-gray-900">Email</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      Info: info@excelacademy.edu<br />
                      Admissions: admissions@excelacademy.edu
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-semibold text-gray-900">Office Hours</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      Mon-Fri: 8:00 AM - 4:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-gray-300 rounded-lg overflow-hidden shadow-sm h-64 relative">
              <iframe
                title="Google Maps"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?q=Adsul%20College%20Chas%20Ahilyanagar&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
