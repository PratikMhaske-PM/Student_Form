import Hero from '../components/Hero';
import { Briefcase, Building, Code, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const highlights = [
    {
      title: 'Top Placements',
      description: 'Our students are recruited by Fortune 500 companies with industry-leading packages.',
      icon: Briefcase,
    },
    {
      title: 'Industry Tie-ups',
      description: 'Collaborations with tech giants for internships, live projects, and joint research.',
      icon: Building,
    },
    {
      title: 'Advanced Curriculum',
      description: 'Constantly updated syllabus integrating AI, Cloud, IoT, and modern engineering practices.',
      icon: Code,
    },
    {
      title: 'Global Recognition',
      description: 'Accredited by NBA and NAAC, consistently ranked among top engineering institutes.',
      icon: Award,
    },
  ];

  return (
    <div>
      <Hero />
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Welcome to Excel Engineering College
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            Empowering the next generation of engineers. We focus on innovation, research, and practical learning to bridge the gap between academia and industry.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Excel?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principal/Dean Message Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <img
                className="rounded-lg shadow-lg w-full object-cover h-[400px]"
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dean"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Message from the Director</h2>
              <p className="text-lg text-gray-600 mb-6 italic">
                "In an era of rapid technological disruption, our goal is to produce not just graduates, but problem solvers and innovators. At Excel Engineering College, we combine rigorous academics with hands-on research and entrepreneurial mindset to prepare our students for the global tech industry."
              </p>
              <div className="font-semibold text-gray-900">Dr. Robert Chen</div>
              <div className="text-blue-600">Director, Excel Engineering College</div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            <div>
              <div className="text-4xl font-extrabold text-white">500+</div>
              <div className="mt-2 text-blue-100 font-medium">Top Recruiters</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-white">95%</div>
              <div className="mt-2 text-blue-100 font-medium">Placement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-white">40+</div>
              <div className="mt-2 text-blue-100 font-medium">Advanced Labs</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-white">300+</div>
              <div className="mt-2 text-blue-100 font-medium">Research Papers Published</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
