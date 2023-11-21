import React, { useState } from 'react';
import wama from '../../src/assets/images/wama.png'
import { Link, scroller } from 'react-scroll';

const Navigation = () => {
    const [open, setOpen] = useState(false);
    const toggleSidebar = () => {
        setOpen(!open);
    };
    
    return (
        <div id=''>
             <section className="shadow-md font-poppins dark:bg-gray-800">
            <div className="max-w-7xl px-4 lg:mx-4 mx-4">
                <div className="relative flex items-center justify-between py-3">
                    <div className='flex justify-center items-center text-blue-600 font-semibold gap-4'>
                    <Link href="/" className="text-3xl  leading-none dark:text-gray-400">
                        <img className='w-auto h-[64px]' src={wama} alt="" srcset="" />
                    </Link>
                    {/* <Link href="/">
                    <h1 class="text-sm font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent hidden md:inline">WAMA</h1>
                    </Link> */}


                    </div>
                    <div className="lg:hidden">
                        <button
                            className="flex items-center px-3 py-2 text-blue-600 border border-blue-200 rounded dark:text-gray-400 navbar-burger hover:text-blue-800 hover:border-blue-300 lg:hidden"
                            onClick={toggleSidebar}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </button>
                    </div>

                    <ul className={`lg:w-auto lg:space-x-12 lg:items-center lg:flex ${open ? '' : 'hidden'}`}>

                        <li>
                            <Link to="Home" spy={true} smooth={true} offset={50} duration={500} className="menu-item text-lg text-[12.5px] font-poppins  border-b-[2px] border-transparent hover:border-[#dd3939] transition-all duration-300 bg-gradient-to-r from-[#220364] to-[#220364] bg-clip-text text-transparent  ">
                                Home
                            </Link >
                        </li>
                        <li>
                            <Link to="Projects" spy={true} smooth={true} offset={50} duration={500} className="menu-item text-lg text-[12.5px] font-poppins border-b-[2px] border-transparent hover:border-[#dd3939] transition-all duration-300 bg-gradient-to-r from-[#220364] to-[#220364] bg-clip-text text-transparent ">
                            Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="About" spy={true} smooth={true} offset={50} duration={500}  className="menu-item text-lg text-[12.5px] font-poppins border-b-[2px] border-transparent hover:border-[#dd3939] transition-all duration-300 bg-gradient-to-r from-[#220364] to-[#220364] bg-clip-text text-transparent ">
                            About
                            </Link >
                        </li>
                        <li>
                            <Link to="Testimonial" spy={true} smooth={true} offset={100} duration={500} className="menu-item text-lg text-[12.5px] font-poppins border-b-[2px] border-transparent hover:border-[#dd3939] transition-all duration-300 bg-gradient-to-r from-[#220364] to-[#220364] bg-clip-text text-transparent">
                            Testimonial
                           
                         
                            </Link >
                        </li>
                        <li>
                            <Link to="Statistic" spy={true} smooth={true} offset={100} duration={500} className="menu-item text-lg text-[12.5px] font-poppins border-b-[2px] border-transparent hover:border-[#dd3939] transition-all duration-300 bg-gradient-to-r from-[#220364] to-[#220364] bg-clip-text text-transparent">
                            Statistic
                           
                         
                            </Link >
                        </li>
                   
                        <li>
                            <Link to="Tips" spy={true} smooth={true} offset={100} duration={500} className="menu-item text-lg text-[12.5px] font-poppins border-b-[2px] border-transparent hover:border-[#dd3939] transition-all duration-300 bg-gradient-to-r from-[#220364] to-[#220364] bg-clip-text text-transparent">
                            Tips
                           
                         
                            </Link >
                        </li>
                   
                        <li>
                            <Link to="Contact" spy={true} smooth={true} offset={100} duration={500} className="menu-item text-lg text-[12.5px] font-poppins border-b-[2px] border-transparent hover:border-[#dd3939] transition-all duration-300 bg-gradient-to-r from-[#220364] to-[#220364] bg-clip-text text-transparent ">
                           
                            Contact
                            </Link >
                        </li>
                    </ul>
                    <div className="hidden lg:block">
                   
                              <Link
                              href="/signup"
                              className="inline-block px-4 py-3 mr-2 text-xs  leading-none text-gray-100 bg-blue-600 border border-blue-200 rounded dark:hover:bg-blue-400 dark:bg-blue-300 dark:text-gray-700 hover:bg-blue-700"
                          >
                              Get Start
                          </Link > 
                       
                          
                      
                    </div>

                </div>
                {/* Mobile Sidebar */}
                <div className={`fixed inset-0 w-full bg-gray-900 opacity-25 dark:bg-gray-400 lg:hidden ${open ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0'}`}></div>
                <div className={`absolute inset-0 z-10 h-screen p-3 text-gray-400 duration-500 transform bg-blue-50 dark:bg-gray-800 w-80 lg:hidden lg:transform-none lg:relative ${open ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0'}`}>
                    <div className="flex justify-between lg:">
                    <Link href="/" className="text-3xl  leading-none dark:text-gray-400">
                        <img className='w-auto h-16' src={wama} alt="" srcset="" />
                    </Link>
                        <button
                            className="p-2 text-gray-700 rounded-md dark:text-gray-400 hover:text-blue-300 lg:hidden"
                            onClick={toggleSidebar}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 13zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                    <ul className="px-4 text-left mt-7">
                    <li>
                            <Link to="Home" spy={true} smooth={true} offset={50} duration={500} className="menu-item text-lg text-[12.5px] font-poppins border-b-[2px] border-transparent hover:border-[#dd3939] transition-all duration-300 bg-gradient-to-r from-[#220364] to-[#220364] bg-clip-text text-transparent  ">
                                Home
                            </Link >
                        </li>
                        <li className='mt-2'>
                            <a href="#Projects" className="menu-item text-lg text-[12.5px] font-poppins border-b-[2px] border-transparent hover:border-[#dd3939] transition-all duration-300 bg-gradient-to-r from-[#220364] to-[#220364] bg-clip-text text-transparent ">
                            Projects
                            </a>
                        </li>
                        <li className='mt-2'>
                            <Link to="About" spy={true} smooth={true} offset={50} duration={500}  className="menu-item text-lg text-[12.5px] font-poppins border-b-[2px] border-transparent hover:border-[#dd3939] transition-all duration-300 bg-gradient-to-r from-[#220364] to-[#220364] bg-clip-text text-transparent ">
                            About
                            </Link >
                        </li>
                        <li className='mt-2'>
                            <Link to="Testimonial" spy={true} smooth={true} offset={100} duration={500} className="menu-item text-lg text-[12.5px] font-poppins border-b-[2px] border-transparent hover:border-[#dd3939] transition-all duration-300 bg-gradient-to-r from-[#220364] to-[#220364] bg-clip-text text-transparent">
                            Testimonial
                           
                         
                            </Link >
                        </li>
                        <li className='mt-2'>
                            <Link to="Statistic" spy={true} smooth={true} offset={100} duration={500} className="menu-item text-lg text-[12.5px] font-poppins border-b-[2px] border-transparent hover:border-[#dd3939] transition-all duration-300 bg-gradient-to-r from-[#220364] to-[#220364] bg-clip-text text-transparent">
                            Statistic
                           
                         
                            </Link >
                        </li>
                   
                        <li className='mt-2'>
                            <Link to="Tips" spy={true} smooth={true} offset={100} duration={500} className="menu-item text-lg text-[12.5px] font-poppins border-b-[2px] border-transparent hover:border-[#dd3939] transition-all duration-300 bg-gradient-to-r from-[#220364] to-[#220364] bg-clip-text text-transparent">
                            Tips
                           
                         
                            </Link >
                        </li >
                   
                        <li className='mt-2'>
                            <Link to="Contact" spy={true} smooth={true} offset={100} duration={500} className="menu-item text-lg text-[12.5px] font-poppins border-b-[2px] border-transparent hover:border-[#dd3939] transition-all duration-300 bg-gradient-to-r from-[#220364] to-[#220364] bg-clip-text text-transparent ">
                           
                            Contact
                            </Link >
                        </li>

                    </ul>
                    <div className="block mt-5 lg:hidden">
                    
                        <Link
                            href="/signup"
                            className="inline-block w-full px-4 py-3 mr-2 text-xs  leading-none text-center text-gray-100 bg-blue-600 rounded dark:hover:bg-blue-400 dark:bg-blue-300 dark:text-gray-700 hover:bg-blue-700"
                        >
                            Get Start
                        </Link >
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Navigation;