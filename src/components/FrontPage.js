import React from 'react';
import backgroundImage from './assets/images/image1.png'; // Replace with the correct path to your image
import { IoDiamondOutline } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa6";
import { GiTestTubes } from "react-icons/gi";

const FrontPage = () => {
  return (
    <div
      className="relative bg-auto bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-gradient-to-r from-blue-50 to-white/5">
        <div className="w-screen h-screen mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-left">
            <h2 className="text-3xl font-extrabold text-blue-800 sm:text-4xl px-16">
              Welcome to Medilab
            </h2>
            <p className="mt-4 text-lg text-gray-500 mb-5 px-16">
              We are a team of talented designers making websites with Bootstrap
            </p>
          </div>
          <div className="mt-10 lg:mt-0 lg:flex lg:items-center px-16">
            <div className="bg-blue-700/85 text-white p-6 rounded-lg lg:w-1/2">
              <h3 className="text-2xl font-bold">Why Choose Medilab?</h3>
              <p className="mt-4 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit Asperiores dolores sed et.
                Tenetur quia eos. Autem tempore quibusdam vel necessitatibus
                optio ad corporis.
              </p>
              <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">
                Learn More
              </button>
            </div>
            <div className="lg:flex lg:flex-grow lg:ml-6 mt-10 lg:mt-0 space-y-6 lg:space-y-0 lg:space-x-6">
              <div className="bg-white/75 shadow p-6 rounded-lg text-center">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-briefcase-medical"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-800">
                <div className='flex justify-center items-center'><FaRegNewspaper /></div>
                  Corporis voluptates officia eiusmod
                </h4>
                <p className="mt-2 text-gray-500">
                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                  laboris nisi ut aliquip
                </p>
              </div>
              <div className="bg-white/75 shadow p-6 rounded-lg text-center">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-gem"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-800 ">
                  <div className='flex justify-center items-center'><IoDiamondOutline /></div>
                  Ullamco laboris 
                  <br/>ladore pan
                </h4>
                <p className="mt-2 text-gray-500">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </p>
              </div>
              <div className="bg-white/75 shadow p-6 rounded-lg text-center">
                <div className="text-blue-600 text-4xl mb-4">
                  <i className="fas fa-folder"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-800">
                <div className='flex justify-center items-center'><GiTestTubes /></div>
                  Labore consequat 
                  <br/>incidid dolore
                </h4>
                <p className="mt-2 text-gray-500">
                  Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                  maiores omnis facere
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
