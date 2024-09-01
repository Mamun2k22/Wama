import { Link } from "react-scroll";


const Expert = () => {
  return (
    <div id="about-us">
      <div
        className="bg-cover bg-center h-screen my-2 lg:my-20 relative bg-fixed "
        style={{
          backgroundImage:
            'url("https://i.ibb.co/tBTyQTV/robot-finger-template.webp")',
        }}
      >
        <div className="absolute h-5/6 lg:w-full w-full top-0 bg-gradient-to-r from-[#5783d5] via-[#7eabd9] to-[#a4d1dd]"></div>

        <div>
          <div className="absolute top-0 right-1 flex">
          <div className="basis-4/5 pl-4 lg:pl-20 text-white flex items-center">
  <div>
    <h1 className="text-2xl lg:text-4xl lg:mt-0 mt-20">CONTACT US</h1>
    <h2 className="text-xl lg:text-3xl font-poppins font-bold py-4 lg:py-6">
    Contact us for a harmonious blend of <br /> creativity, innovation, and security. <br />


    </h2>
    <p className="w-auto lg:w-9/12 text-sm lg:text-base">
    Our expertise extends beyond aesthetics, encompassing Information Security and Digital Forensics to fortify your digital assets. 
    </p>
    <Link to="contact-us">
      <button className="bg-red-500 bg-gradient-to-r from-indigo-600 via-blue-700 to-blue-600 hover:from-yellow-600 hover:via-red-600 hover:to-red-600 px-4 lg:px-8 py-2 lg:py-3 mt-4 lg:mt-6 rounded-full text-sm lg:text-base border">
        Call for more details
      </button>
    </Link>
  </div>
</div>

            <div className="relative">
              <div className="basis-2/5 mt-12 ">
              <div className="relative">
  <img
    className="h-[440px] w-[700px] pb-1 rounded-md hidden sm:block pr-1"
    src="https://media.istockphoto.com/id/889458208/photo/youve-reached-our-support-line.jpg?s=612x612&w=0&k=20&c=-9-M2o4rmo5hgnu3shIaARICeVlCkrorsWu2sy6H_50="
    alt=""
  />
  {/* Add the continuous border with running red color */}
  <div className="absolute inset-0 border-4 border-solid rounded-md animate-pulse animate-border-red-500"></div>
</div>


              </div>
              {/* <img
                className="absolute top-48 -left-36 h-80 w-80"
                src="https://libertylaunchacademy.org/wp-content/uploads/2023/08/LibertyLaunchAcademy_K-12_PrivateSchool-LibertyLake-WA-SchoolLife-010.jpeg"
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Expert;
