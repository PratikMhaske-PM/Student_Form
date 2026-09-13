import { useState } from 'react';
import { submitAdmissionForm } from '../services/api';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    branch: '',
    admission_date: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.age || !formData.gender || !formData.branch || !formData.admission_date) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      await submitAdmissionForm({
        ...formData,
        age: parseInt(formData.age, 10)
      });
      setStatus('success');
      setFormData({ name: '', age: '', gender: '', branch: '', admission_date: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.detail || 'An error occurred while submitting the form. Please try again.');
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-600">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">B.Tech / M.Tech Admission Form</h3>
      
      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700">
          <p className="font-medium">Application Submitted!</p>
          <p>Your admission request has been recorded. Our counseling team will contact you shortly.</p>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
          <p className="font-medium">Error</p>
          <p>{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Student Full Name *</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
              placeholder="e.g., Rahul Kumar"
              required
            />
          </div>
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age *</label>
            <input
              type="number"
              name="age"
              id="age"
              min="16"
              max="30"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
              placeholder="e.g. 18"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender *</label>
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="branch" className="block text-sm font-medium text-gray-700">Preferred Engineering Stream *</label>
            <select
              name="branch"
              id="branch"
              value={formData.branch}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
              required
            >
              <option value="">Select Stream</option>
              <option value="B.Tech - Computer Science (CSE)">B.Tech - Computer Science (CSE)</option>
              <option value="B.Tech - Information Technology (IT)">B.Tech - Information Technology (IT)</option>
              <option value="B.Tech - Electronics (ECE)">B.Tech - Electronics (ECE)</option>
              <option value="B.Tech - Mechanical (ME)">B.Tech - Mechanical (ME)</option>
              <option value="B.Tech - Civil Engineering (CE)">B.Tech - Civil Engineering (CE)</option>
              <option value="B.Tech - Artificial Intelligence (AI)">B.Tech - Artificial Intelligence (AI)</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="admission_date" className="block text-sm font-medium text-gray-700">Preferred Admission Date *</label>
          <input
            type="date"
            name="admission_date"
            id="admission_date"
            value={formData.admission_date}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              status === 'loading' ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors`}
          >
            {status === 'loading' ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
