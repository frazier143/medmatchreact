import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHeartbeat, FaPills, FaUserAlt, FaBriefcaseMedical, FaStethoscope, FaMicroscope } from 'react-icons/fa';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="bg-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900">Services</h2>
        <p className="text-gray-600 mt-4">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Service 1 */}
        <div data-aos="fade-up" className="relative bg-white p-8 shadow-lg mb-12 rounded-lg">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
            <FaHeartbeat className="text-white text-3xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mt-8 text-center">Nesciunt Mete</h3>
          <p className="text-gray-500 text-center mt-4">
            Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure.
          </p>
        </div>
        
        {/* Service 2 */}
        <div data-aos="fade-left" className="relative bg-white p-8 shadow-lg  mb-12 rounded-lg">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
            <FaPills className="text-white text-3xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mt-8 text-center">Eosle Commodi</h3>
          <p className="text-gray-500 text-center mt-4">
            Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque.
          </p>
        </div>
        
        {/* Service 3 */}
        <div data-aos="fade-right" className="relative bg-white p-8 shadow-lg mb-12 rounded-lg">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
            <FaUserAlt className="text-white text-3xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mt-8 text-center">Ledo Markt</h3>
          <p className="text-gray-500 text-center mt-4">
            Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Vel qui id voluptas.
          </p>
        </div>

        {/* Service 4 */}
        <div data-aos="fade-up" className="relative bg-white p-8 shadow-lg rounded-lg">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
            <FaBriefcaseMedical className="text-white text-3xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mt-8 text-center">Asperiores Commodit</h3>
          <p className="text-gray-500 text-center mt-4">
            Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.
          </p>
        </div>

        {/* Service 5 */}
        <div data-aos="fade-left" className="relative bg-white p-8 shadow-lg rounded-lg">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
            <FaStethoscope className="text-white text-3xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mt-8 text-center">Velit Doloremque</h3>
          <p className="text-gray-500 text-center mt-4">
            Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.
          </p>
        </div>

        {/* Service 6 */}
        <div data-aos="fade-right" className="relative bg-white p-8 shadow-lg rounded-lg">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
            <FaMicroscope className="text-white text-3xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mt-8 text-center">Dolori Architecto</h3>
          <p className="text-gray-500 text-center mt-4">
            Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Services;
