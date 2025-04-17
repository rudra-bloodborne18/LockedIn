import React from 'react';

const Features = () => {
  const features = [
    {
      title: "Application Tracking",
      description: "Keep all your job applications in one place with detailed status tracking and follow-up reminders",
      icon: "📋"
    },
    {
      title: "Interview Management",
      description: "Schedule and prepare for interviews with built-in calendar integration and preparation tools",
      icon: "📅"
    },
    {
      title: "Resume Management",
      description: "Store and customize multiple versions of your resume for different job applications",
      icon: "📄"
    },
    {
      title: "Company Research",
      description: "Save and organize company information, interview notes, and research for future reference",
      icon: "🔍"
    },
    {
      title: "Networking Tools",
      description: "Track your professional connections and follow-up with contacts at target companies",
      icon: "🤝"
    },
    {
      title: "Analytics Dashboard",
      description: "Get insights into your job search progress with visual analytics and success metrics",
      icon: "📊"
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            Everything You Need to Manage Your Job Search
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Streamline your job search process with powerful tools designed to help you stay organized and focused
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 