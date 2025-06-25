import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    inquiryPurpose: '',
    description: '',
    fullName: '',
    email: '',
    organization: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic placeholder
    console.log(formData);
  };

  return (
    <div className="bg-blue-100 border-1  border-blue-100 rounded-2xl m-6 px-6 py-12 max-w-5xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-4 text-center">Let's Get In Touch</h1>
      
      <div className="mb-8 text-center text-gray-700">
        <p>📞 +123 45 789 000</p>
        <p>📧 inquiry@ataraxis.ai | help@ataraxis.ai</p>
        <p>📍 221b Elementary Street, New York, NY</p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 shadow rounded">
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm mb-1">Inquiry Purpose*</label>
          <select
            name="inquiryPurpose"
            value={formData.inquiryPurpose}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">Choose one option...</option>
            <option value="support">Support</option>
            <option value="business">Business Inquiry</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>

        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm mb-1">Description that fits you*</label>
          <select
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">Choose one option...</option>
            <option value="jobSeeker">Job Seeker</option>
            <option value="employer">Employer</option>
            <option value="partner">Partner/Organization</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Your full name"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Organization</label>
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Company or institute"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="+91-XXXX-XXXXXX"
            required
          />
        </div>

        <div className="col-span-2">
          <label className="block text-sm mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            rows="4"
            placeholder="Enter your message here..."
          />
        </div>

        <div className="col-span-2 text-center">
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
