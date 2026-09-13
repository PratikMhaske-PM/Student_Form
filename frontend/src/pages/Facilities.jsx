import { Monitor, Cpu, Book, Activity, Building, Globe, Presentation } from 'lucide-react';

const Facilities = () => {
  const facilitiesList = [
    {
      title: 'Advanced Computing Labs',
      description: 'High-performance computing centers equipped with latest GPUs for AI, ML, and Data Science research.',
      icon: Monitor,
    },
    {
      title: 'Robotics & IoT Lab',
      description: 'State-of-the-art facility featuring industrial robotic arms, microcontrollers, and IoT sensor kits.',
      icon: Cpu,
    },
    {
      title: 'Central Library',
      description: 'A massive repository of engineering texts, international research journals, and IEEE digital library access.',
      icon: Book,
    },
    {
      title: 'Innovation & Incubation Center',
      description: 'Dedicated workspace for student startups with mentoring, funding support, and prototype tools.',
      icon: Building,
    },
    {
      title: 'Smart Classrooms',
      description: 'Fully digitized lecture halls with high-end AV equipment for interactive and hybrid learning.',
      icon: Presentation,
    },
    {
      title: 'Center of Excellence (CoE)',
      description: 'Industry-sponsored labs established by tech giants to train students on cutting-edge technologies.',
      icon: Globe,
    },
    {
      title: 'Sports & Recreation',
      description: 'Comprehensive sports complex including a gymnasium, indoor courts, and outdoor fields.',
      icon: Activity,
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold">Campus Infrastructure</h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            World-class technical facilities and laboratories designed to empower engineering research and development.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesList.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                <div className="h-48 bg-gray-200 flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
                  <Icon className="h-20 w-20 text-blue-400 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
