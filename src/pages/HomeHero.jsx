import React from 'react';
import w from '../../src/assets/images/w.png'

const HomeHero = () => {
 
    return (
        <div id='Home' className='bg-[#F2F2F2]'>

            <div class=" grid grid-cols-2  justify-center items-center mx-2 lg:mx-16 pt-20">

                <div className='grid grid-flow-col'>

                    <div class="sm:text-center lg:text-left z-50">
                        <h1 class="text-4xl lg:text-[69px]  font-poppins font-semibold sm:text-5xl">
                            <span class=" leading-tight ">Strategy <br />
                                and growth solutions for business </span>
                            {/* <span class="block text-transparent bg-clip-text bg-gradient-to-r from-red-600  to-gray-900 xl:inline"></span> */}
                        </h1>
                        <p
                            class="mt-3 text-lg  text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            {/* And driving force behind our mission to transform spaces, elevate architecture, and safeguard digital realms. */}
                            Welcome to WAMA, where passion meets expertise in three diverse yet interconnected domains, driving force behind our mission to transform spaces, elevate architecture, and safeguard digital realms.
                        </p>
                        {/* Social Icon */}
                        {/* <div className='lg:mt-10 mt-8'>
                            <a href="#" class="inline-block mr-8 text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:text-blue-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-8 h-8 bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                                </svg>
                            </a>
                            <a href="#" class="inline-block mr-8 text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 hover:text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-8 h-8 bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                                </svg>
                            </a>
                            <a href="#" class="inline-block mr-8 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-8 h-8 bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                                </svg>
                            </a>
                        </div> */}
                    </div>

                    {/* red div  */}
                    <div className='z-10 relative lg:bottom-16 bottom-6 lg:right-56 right-8 bg-red-600 rounded-full lg:h-44 lg:w-44 h-20 w-20'></div>

                </div>

                <div class="lg:inset-y-0 lg:right-0  my-4 lg:my-0 relative">
                <img className="h-10/12 w-10/12 mx-auto md:ml-0 lg:h-[630px] lg:w-auto" src={w} alt="" /></div>

            </div>
        </div>





    );
};

export default HomeHero;