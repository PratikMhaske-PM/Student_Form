const Academics = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold">Academic Programs</h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Industry-aligned curriculum designed to create world-class engineers and innovators.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-blue-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Undergraduate (B.Tech)</h2>
            <p className="text-gray-600 mb-6">
              Our 4-year Bachelor of Technology programs are designed to provide a strong foundation in core engineering principles along with practical, hands-on experience.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Computer Science & Engineering (CSE)</li>
              <li>Information Technology (IT)</li>
              <li>Electronics & Communication Engineering (ECE)</li>
              <li>Mechanical Engineering (ME)</li>
              <li>Civil Engineering (CE)</li>
              <li>Artificial Intelligence & Data Science</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-blue-700">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Postgraduate (M.Tech)</h2>
            <p className="text-gray-600 mb-6">
              Our 2-year Master of Technology programs focus on advanced research, specialized technical skills, and industry collaborations to solve complex problems.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>M.Tech in Software Engineering</li>
              <li>M.Tech in VLSI Design & Embedded Systems</li>
              <li>M.Tech in Thermal Engineering</li>
              <li>M.Tech in Structural Engineering</li>
              <li>M.Tech in Cyber Security</li>
              <li>M.Tech in Machine Learning & AI</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Teaching Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-blue-600">1</div>
              <h3 className="text-xl font-semibold mb-2">Project-Based Learning</h3>
              <p className="text-gray-600">Students work on real-world industry projects and hackathons to build a strong practical portfolio.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-blue-600">2</div>
              <h3 className="text-xl font-semibold mb-2">Industry Integration</h3>
              <p className="text-gray-600">Guest lectures, industrial visits, and 6-month mandatory internships with our corporate partners.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-blue-600">3</div>
              <h3 className="text-xl font-semibold mb-2">Research & Development</h3>
              <p className="text-gray-600">State-of-the-art incubation centers and research labs to foster innovation and entrepreneurship.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
