import React, { useState } from 'react';


const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);


    const openDropdown = () => {
        setDropdownOpen(true);
    };

    const closeDropdown = () => {
        setTimeout(() => {
            setDropdownOpen(false);
            },1000);
    };

  return (
    <div>
     <nav className= 'bg-blue-600 p-4'>
        <div className=' flex justify-between items-center mx-auto'>
            <div className='text-white text-2xl font-bold'>MediLab</div>
            <div className='flex space-x-5 text-white'>
               <a href='#' className=''>Home</a>
               <a href='#' className=''>About</a>
               <a href='#' className=''>Services</a>
               <a href='#' className=''>Departments</a>
               <a href='#' className=''>Doctors</a>
               <a href='#' className=''>Contact</a>
        

               <div className='relative'>
                <button 
                onMouseEnter={() => openDropdown(true)}
                onMouseLeave={() => closeDropdown(false)} className='text-white hover:text-gray-300'>Dropdown</button>
                {dropdownOpen && (
                    <div onMouseEnter={() => openDropdown(true)} 
                    onMouseLeave={() => closeDropdown(false)} 
                    className='mt-2 bg-white text-black rounded shadow-lg z-10 absolute'>
                        <a href='#' className='block px-4 py-2 hover:bg-gray-200'>Hii</a>
                        <a href='#' className='block px-4 py-2 hover:bg-gray-200'>Hey</a>
                    </div>
                )}
               </div>
            </div>
        </div>
     </nav>
    </div>
  )
};

export default Navbar
