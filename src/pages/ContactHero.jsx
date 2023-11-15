import React from 'react';
import pic from '../../src/assets/images/pic.png'

const ContactHero = () => {
    return (
        <div className='justify-center items-center'>
           
         <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-10 lg:my-20">
        <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
        
          <div class="lg:col-span-3">
            <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-[43px] lg:leading-tight dark:text-white">Fusce ut velit laoreet, tempus arcu eu, molestie tortor.  <span class="text-blue-600">Nam vel justo cursus</span></h1>
          </div>
          <div class="lg:col-span-4 mt-10 lg:mt-0">
            <img
              className=" rounded p-2 h-1/2 w-9/12  "
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