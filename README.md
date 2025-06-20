import React from "react";

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
    <section className="bg-white py-10 px-6 md:px-16 flex flex-col md:flex-row items-center md:items-start gap-8">
      
      {/* Left: Hero Image */}
      <div className="w-full md:w-1/2 h-[500px]">
        <img
          src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
          alt="People working in discussion"
          className="w-full h-full rounded-md shadow-md object-cover"
        />
      </div>

      {/* Right: What's New Section */}
      <div className="w-full md:w-1/2 h-[500px] bg-gray-100 p-6 rounded-md shadow relative overflow-hidden">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-300 text-gray-800">
          🔔 What's New
        </h2>
        <div className="scroll-up h-full space-y-3 absolute top-0 left-0 w-full overflow-y-auto">
          {updates.map((item, index) => (
            <div
              key={index}
              className="p-3 bg-white hover:bg-yellow-300 hover:text-black transition-colors duration-300 rounded shadow-sm cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none" />
      </div>
      
    </section>
  );
};

export default HeroSection;
