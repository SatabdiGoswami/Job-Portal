import React from "react";
import "../index.css"; 

const updates = [
  "📄 Exam Notification: Technical Posts – Apply by July 15",
  "📢 Walk-in Interviews: Marketing Division – June 22",
  "📝 Online Application for Data Analyst – Open Now",
  "📌 Document Verification: Group B Roles – Starts July 5",
  "🧠 Resume Workshop: Register by June 30",
  "📍 Job Fair (North East Zone): July 10–12",
  "💼 Internship Call: Govt Sector – Deadline June 28"
];

const HeroSection = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-16 flex flex-col md:flex-row items-start gap-8">

      {/* Left: Hero Image with Welcome Message */}
      <div className="w-full md:w-1/2 h-[500px] flex flex-col justify-between bg-white p-4 rounded-md shadow">
        
        {/* Welcome Message */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 bg-white inline-block px-4 py-2 rounded">
            Welcome to Recruitment Portal
          </h1>
        </div>

        {/* Hero Image */}
        <div className="flex-grow mt-4">
          <img
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
            alt="People working in discussion"
            className="w-full h-full rounded-md shadow-md object-cover"
          />
        </div>
      </div>

      {/* Right: What's New Section */}
      <div className="w-full md:w-1/2 h-[500px] bg-blue-100 p-6 rounded-md shadow flex flex-col justify-start">
        
        {/* Fixed Header */}
        <div className="pb-4 border-b border-gray-300 sticky top-0 bg-indigo-500 z-10">
          <h2 className="text-xl font-semibold text-white">🔔 What's New</h2>
        </div>

        {/* Scrollable Updates */}
        <div className="overflow-hidden max-h-[420px] mt-4">
          <div className="scroll-container flex flex-col gap-2">
            {updates.map((item, index) => (
              <div
                key={index}
                className="scroll-item bg-white p-3 hover:bg-yellow-300 hover:text-black transition-colors duration-300 rounded shadow-sm cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
