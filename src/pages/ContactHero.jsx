import React from 'react';
import pic from '../../src/assets/images/pic.png'

const ContactHero = () => {
    return (
      <div className='flex justify-center items-center'>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-10 lg:my-20">
        <div className="grid grid-cols-1 lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
          <h1 class="lg:text-2xl text-xl md:text-2xl font-bold tracking-tight text-gray-900">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">CONTACT</span>
      </h1>
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white mt-6">
              Fusce ut velit laoreet, tempus arcu eu, molestie tortor.{" "}
              <span className="text-blue-600">Nam vel justo cursus</span>
            </h1>
          </div>
          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <img
              className="rounded p-2 h-auto w-full lg:h-1/2 lg:w-9/12"
              src={pic}
              alt="Image Description"
            />
          </div>
        </div>
      </div>
    </div>
    
    );
};

export default ContactHero;