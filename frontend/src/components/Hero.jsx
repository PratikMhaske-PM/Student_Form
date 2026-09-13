import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden h-[600px]">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Engineering Students in Lab"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block mb-2">Welcome to</span>
            <span className="block text-blue-400">Excel Engineering College</span>
          </h1>
          <p className="mt-3 max-w-md text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Fostering a community of innovators and technologists. We provide world-class engineering education and research opportunities to shape the tech leaders of tomorrow.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
              Apply for B.Tech
            </Link>
            <Link
              to="/academics"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition-colors w-full sm:w-auto"
            >
              View Streams
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
