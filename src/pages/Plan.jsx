import React from "react";
import Price from "./Price";

const Plan = () => {
  return (
    <div>
      <div class="bg-gray-50 py-12 lg:px-20 font-poppins">
        <h2 class="text-center text-3xl font-semibold mb-8">Discover Plans</h2>
        <div class="flex flex-col md:flex-row justify-center items-center gap-10">
          <div class="bg-[#F3F3F3] rounded-2xl shadow-lg p-6 text-left w-full md:w-1/3 transition transform hover:scale-105 hover:shadow-2xl">
            <h3 class="text-xl font-bold mb-1">EP</h3>
            <p class="text-sm font-light mb-3  ">up to 6 tracks</p>
            <ul class="text-gray-600 mb-6 space-y-2">
              <li>
                <strong>Precision Mixing:</strong> Each track meticulously mixed
                to bring out its full potential.
              </li>
              <li>
                <strong>Masterful Mastering:</strong> Elevate your singles to
                professional industry standards.
              </li>
              <li>
                <strong>Quick Turnaround:</strong> Get your EP ready for release
                in record time.
              </li>
            </ul>
            <div class="flex justify-between items-center">
              <span class="bg-gradient-to-r from-[#d0f3d0] to-[#DFE0FE] font-semibold py-1 px-3 rounded-full">
                -10%
              </span>
              <button class="bg-blue-500 text-white py-1.5 text-sm px-6 rounded-full transition transform hover:bg-blue-600 hover:scale-105">
                Submit
              </button>
            </div>
          </div>

          <div class="rounded-lg shadow-lg hover:shadow-2xl  transition transform hover:scale-105 ">
            <div className="bg-gradient-to-r from-pink-300 to-blue-300 rounded-t-lg py-3   px-0 w-90"></div>
            <div className="bg-[#F3F3F3] px-6 py-4 text-left w-full lg:w-96 h-[360px] ">
              <h3 class="text-xl font-bold mb-1">Album</h3>
              <p class="text-sm font-light mb-3">up to 10 tracks</p>
              <ul class="text-gray-600 mb-6 space-y-2 text-SM">
                <li className="">
                  <strong>Unified Sound:</strong> Ensuring every track flows
                  seamlessly in the album.
                </li>
                <li>
                  <strong>Dynamic Range:</strong> Balanced and optimized for
                  diverse listening environments.
                </li>
                <li>
                  <strong>Creative Consultation:</strong> Work closely with our
                  experts to achieve your artistic vision.
                </li>
              </ul>
              <div class="flex justify-between items-center">
                <span class="bg-gradient-to-r from-[#d0f3d0] to-[#DFE0FE] font-semibold py-1 px-3 rounded-full">
                  -15%
                </span>
                <button class="bg-blue-500 text-white py-1.5 text-sm px-6 rounded-full transition transform hover:bg-blue-600 hover:scale-105">
                  Submit
                </button>
              </div>
            </div>
          </div>

          <div class="bg-[#F3F3F3] rounded-lg shadow-lg p-6 text-left w-full md:w-1/3 transition transform hover:scale-105 hover:shadow-2xl">
            <h3 class="text-xl font-bold mb-1">Label</h3>
            <p class="text-sm font-light mb-3  ">up to 10 tracks</p>
            <ul class="text-gray-600 mb-6 space-y-2">
              <li>
                <strong>Holistic Approach:</strong> Comprehensive mixing and
                mastering for a cohesive release.
              </li>
              <li>
                <strong>High-Quality Production:</strong> Industry-standard
                sound that stands out on any platform.
              </li>
              <li>
                <strong>Brand Alignment:</strong> Tailored sound that aligns
                with your label’s identity and goals.
              </li>
            </ul>
            <div class="flex justify-between items-center">
              <span class="bg-gradient-to-r from-[#d0f3d0] to-[#DFE0FE] font-semibold py-1 px-3 rounded-full">
                -20%
              </span>
              <button class="bg-blue-500 text-white py-1.5 text-sm px-6 rounded-full transition transform hover:bg-blue-600 hover:scale-105">
                Submit
              </button>
            </div>
          </div>
        </div>
        <p class="text-center text-gray-500 mt-6 text-sm">
          *Become our supporter to get more discounts and exclusive content
        </p>
      </div>
      <Price />
    </div>
  );
};

export default Plan;
