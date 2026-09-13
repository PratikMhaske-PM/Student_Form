import { Target, Compass, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Header */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold">About Us</h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            A legacy of excellence in technical education, fostering innovation, research, and entrepreneurship.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* History */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
          <div className="prose max-w-none text-gray-600 text-lg space-y-4">
            <p>
              Founded in 2001, Excel Engineering College was established with a vision to create a world-class institution for technical education. What began with two core engineering branches and 120 students has now transformed into a massive technological campus hosting over 4,000 students across various B.Tech and M.Tech disciplines.
            </p>
            <p>
              Over the years, we have forged strong partnerships with leading IT and core engineering companies. Our commitment to maintaining an industry-aligned curriculum and investing in state-of-the-art laboratories has made us one of the most sought-after engineering colleges in the region.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <section className="bg-white rounded-lg shadow-sm p-8 text-center flex flex-col items-center">
            <div className="p-4 bg-blue-50 rounded-full mb-6">
              <Compass className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 text-lg">
              To be a globally recognized center of excellence in engineering education and research, producing technologically competent and ethically strong professionals who will drive the industries of the future.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-8 text-center flex flex-col items-center">
            <div className="p-4 bg-blue-50 rounded-full mb-6">
              <Target className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg">
              To impart quality technical education through innovative teaching methodologies, foster a culture of research and entrepreneurship, and bridge the gap between academia and industry.
            </p>
          </section>
        </div>

        {/* Core Values */}
        <section className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <Heart className="h-10 w-10 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Innovation', desc: 'Encouraging creative problem-solving and out-of-the-box technical thinking.' },
              { title: 'Excellence', desc: 'Striving for the highest academic and professional standards.' },
              { title: 'Integrity', desc: 'Upholding ethical conduct in engineering and research practices.' },
              { title: 'Collaboration', desc: 'Fostering teamwork through multidisciplinary projects.' },
              { title: 'Industry Relevance', desc: 'Keeping pace with technological advancements and market needs.' },
              { title: 'Social Responsibility', desc: 'Developing tech solutions that positively impact society and the environment.' }
            ].map((value, idx) => (
              <div key={idx} className="border border-gray-100 p-6 rounded-lg bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
