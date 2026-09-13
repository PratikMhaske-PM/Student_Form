import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Calendar } from 'lucide-react';
import AdmissionForm from '../components/AdmissionForm';

const Admissions = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold">Admissions</h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Take the first step towards a successful engineering career. Find all details regarding eligibility, process, and applications.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                Admission Process
              </h2>
              <div className="space-y-6">
                {[
                  { step: '1', title: 'Online Registration', desc: 'Fill out the online admission form with your personal and academic details.' },
                  { step: '2', title: 'Entrance / Counseling', desc: 'Appear for the college level counseling or submit your valid JEE Main/State Entrance scores.' },
                  { step: '3', title: 'Document Verification', desc: 'Submit all original educational documents for verification at the campus.' },
                  { step: '4', title: 'Fee Payment', desc: 'Confirm your allotted seat by paying the first semester academic fee.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                Eligibility Criteria
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="h-2 w-2 mt-2 rounded-full bg-blue-500 mr-3 flex-shrink-0"></span>
                  <span><strong>B.Tech:</strong> 10+2 examination passed with Physics and Mathematics as compulsory subjects along with one of the Chemistry/ Biotechnology/ Biology/ Technical Vocational subject.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 mt-2 rounded-full bg-blue-500 mr-3 flex-shrink-0"></span>
                  <span><strong>B.Tech Marks criteria:</strong> Obtained at least 45% marks (40% in case of candidates belonging to reserved category) in the above subjects taken together.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 mt-2 rounded-full bg-blue-500 mr-3 flex-shrink-0"></span>
                  <span><strong>M.Tech:</strong> Passed Bachelor's Degree in relevant field of Engineering and Technology with at least 50% marks (45% for reserved categories). Valid GATE score preferred.</span>
                </li>
              </ul>
            </section>
            
            {/* New Admission Form Section */}
            <div className="mt-12" id="apply-now">
              <AdmissionForm />
            </div>

          </div>

          <div className="space-y-8">
            <section className="bg-blue-50 rounded-lg p-8 border border-blue-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="h-5 w-5 text-blue-600 mr-2" />
                Required Documents
              </h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> 10th & 12th Marksheets</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Transfer/Migration Certificate</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> JEE Main / Entrance Scorecard</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> 6 Passport size photographs</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Character Certificate</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Aadhar Card / ID Proof</li>
              </ul>
            </section>

            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Have Questions?</h3>
              <p className="text-gray-600 text-sm mb-6">Contact our admission counseling desk for guidance.</p>
              <Link
                to="/contact"
                className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Contact Counseling
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
