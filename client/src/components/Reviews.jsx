import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "Tech Solutions Inc",
      content: "This platform transformed my job search. I went from scattered applications to organized success, landing my dream job in just 2 months!",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateX",
      content: "The interview tracking and preparation tools were game-changers. I could finally keep track of all my applications and follow-ups in one place.",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Specialist",
      company: "Growth Marketing Co",
      content: "As someone who was applying to multiple positions, this platform helped me stay organized and maintain my sanity during the job search process.",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            Success Stories from Job Seekers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our platform has helped professionals land their dream jobs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.role} at {review.company}</p>
                </div>
              </div>
              <p className="text-gray-600">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews; 