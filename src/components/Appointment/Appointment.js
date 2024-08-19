import React, { useState } from 'react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    department: '',
    doctor: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-7xl"
      >
        <h2 className="text-3xl font-semibold text-center mb-6">Appointment</h2>
        <p className="text-center mb-8 text-gray-500">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-4 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="p-4 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="p-4 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select Department</option>
            <option value="cardiology">Cardiology</option>
            <option value="neurology">Neurology</option>
            <option value="orthopedics">Orthopedics</option>
            <option value="pediatrics">Pediatrics</option>
          </select>
          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            className="p-4 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select Doctor</option>
            <option value="dr-smith">Dr. Smith</option>
            <option value="dr-jones">Dr. Jones</option>
            <option value="dr-taylor">Dr. Taylor</option>
          </select>
        </div>

        <div className="mb-6">
          <textarea
            name="message"
            placeholder="Message (Optional)"
            value={formData.message}
            onChange={handleChange}
            className="p-4 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white p-4 rounded-md w-full hover:bg-blue-700 transition"
        >
          Make an Appointment
        </button>
      </form>
    </div>
  );
};

export default Appointment;