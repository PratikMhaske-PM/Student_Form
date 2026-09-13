import { Calendar as CalendarIcon, Clock, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Annual Science Fair 2024',
      date: 'Oct 15, 2024',
      time: '09:00 AM - 03:00 PM',
      location: 'School Auditorium',
      description: 'Students from grades 6-10 will showcase their innovative science projects. Parents are welcome to attend.',
      category: 'Academic'
    },
    {
      id: 2,
      title: 'Inter-School Sports Meet',
      date: 'Nov 02, 2024',
      time: '08:00 AM - 05:00 PM',
      location: 'Main Sports Ground',
      description: 'Annual inter-school competition featuring athletics, basketball, and football tournaments.',
      category: 'Sports'
    },
    {
      id: 3,
      title: 'Parent-Teacher Meeting',
      date: 'Nov 15, 2024',
      time: '10:00 AM - 01:00 PM',
      location: 'Respective Classrooms',
      description: 'End of term discussion regarding student progress and performance.',
      category: 'Administrative'
    },
    {
      id: 4,
      title: 'Winter Carnival',
      date: 'Dec 20, 2024',
      time: '11:00 AM - 06:00 PM',
      location: 'School Campus',
      description: 'Food stalls, games, cultural performances, and fun activities to celebrate the winter season.',
      category: 'Cultural'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold">Events & News</h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest happenings, announcements, and upcoming events at Excel Academy.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Events List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col sm:flex-row">
                <div className="sm:w-1/4 mb-4 sm:mb-0 sm:pr-4 sm:border-r border-gray-200 flex flex-col justify-center items-center text-center">
                  <span className="text-sm text-blue-600 font-semibold uppercase">{event.date.split(' ')[0]}</span>
                  <span className="text-3xl font-bold text-gray-900">{event.date.split(' ')[1].replace(',', '')}</span>
                  <span className="text-sm text-gray-500">{event.date.split(' ')[2]}</span>
                </div>
                <div className="sm:w-3/4 sm:pl-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full hidden sm:block">
                      {event.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-gray-400" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                      {event.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar / Announcements */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Recent Announcements</h2>
              <div className="space-y-4">
                <div className="group cursor-pointer">
                  <span className="text-xs text-gray-500 mb-1 block">Just Now</span>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">School Reopening Guidelines</h4>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">Please review the new safety guidelines before the start of the next term.</p>
                </div>
                <div className="group cursor-pointer">
                  <span className="text-xs text-gray-500 mb-1 block">2 Days Ago</span>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Exam Timetable Published</h4>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">The mid-term examination timetable for grades 6-10 is now available on the student portal.</p>
                </div>
                <div className="group cursor-pointer">
                  <span className="text-xs text-gray-500 mb-1 block">1 Week Ago</span>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">New Bus Route Added</h4>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">A new transportation route covering the Northern Suburbs will start next month.</p>
                </div>
              </div>
              <Link to="#" className="text-blue-600 text-sm font-medium mt-6 inline-flex items-center hover:text-blue-800">
                View all announcements <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Events;
