import React from 'react';

const Dashboard = () => {
  // Sample user data
  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Software Engineer',
    location: 'New York, USA',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
  };

  // Sample job listings
  const jobListings = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'Remote',
      salary: '$120k - $150k',
      type: 'Full-time',
      posted: '2 days ago',
    },
    {
      id: 2,
      title: 'Backend Engineer',
      company: 'StartupX',
      location: 'San Francisco, CA',
      salary: '$100k - $130k',
      type: 'Full-time',
      posted: '1 week ago',
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      company: 'InnovateTech',
      location: 'Remote',
      salary: '$90k - $120k',
      type: 'Contract',
      posted: '3 days ago',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* User Profile Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 rounded-full mb-4"></div>
                <h2 className="text-lg sm:text-xl font-semibold text-center">{userProfile.name}</h2>
                <p className="text-gray-600 text-center">{userProfile.role}</p>
                <p className="text-gray-500 text-sm mt-2 text-center">{userProfile.location}</p>
              </div>
              
              <div className="mt-4 sm:mt-6">
                <h3 className="text-base sm:text-lg font-semibold mb-2">Contact Information</h3>
                <p className="text-gray-600 break-all">{userProfile.email}</p>
              </div>

              <div className="mt-4 sm:mt-6">
                <h3 className="text-base sm:text-lg font-semibold mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {userProfile.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Job Listings Section */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Job Listings</h2>
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {jobListings.map((job) => (
                  <div
                    key={job.id}
                    className="border rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold">{job.title}</h3>
                        <p className="text-gray-600">{job.company}</p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm self-start">
                        {job.type}
                      </span>
                    </div>
                    <div className="mt-3 sm:mt-4 flex items-center text-gray-600">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {job.location}
                    </div>
                    <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                      <span className="text-gray-700 font-medium">{job.salary}</span>
                      <span className="text-gray-500 text-sm">{job.posted}</span>
                    </div>
                    <button className="mt-3 sm:mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 