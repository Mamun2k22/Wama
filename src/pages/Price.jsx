import React from "react";

const Price = () => {
  return (
    <div>
      <div className=" flex justify-center items-center inset-0 bg-opacity-50 mt-10 font-poppins  ">
        <div className="w-full max-w-2xl border rounded-lg ">
          <div className="flex items-center justify-between bg-gray-100 rounded-t-lg p-4 h-16 relative">
            <div className="flex-grow text-center">
              <h2 className="text-2xl font-semibold text-gray-700">
                Price Quote
              </h2>
            </div>

            <button className="absolute right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700 hover:text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="flex  justify-center items-center rounded-md lg:mt-8 mt-4"
            role="group"
          >
            <button
              type="button"
              class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
            >
              Group
            </button>
            <button
              type="button"
              class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
            >
              Individual artist
            </button>
            <button
              type="button"
              class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
            >
              Label
            </button>
          </div>
          <div class=" flex items-center justify-center border bg-gray-400 mt-7 h-[0px] lg:mx-60 mx-28">
            
          </div>

          <div className=" p-8 mx-4 relative">
            <form>
              <input
                type="text"
                placeholder="your email"
                className="w-full py-2 px-3 mb-6 border rounded-xl border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="brief service description"
                className="w-full py-2 px-3 mb-6 border rounded-xl border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <input
                type="approximate budget"
                placeholder="sound engineering experience (years)"
                className="w-full py-2 px-3 mb-6 border rounded-lg border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />

              <div className="bg-white py-3 px-2.5 rounded-lg">
                <label className="block text-gray-500 font-semibold mb-2">
                  Additional information and your audion file:
                </label>
                <div className="border-[1px] border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 transition">
                  <img
                    className="w-10"
                    src="https://cdn-icons-png.flaticon.com/128/126/126477.png"
                    alt="Upload"
                  />
                  <span className="text-gray-500 mt-2">or drag and drop</span>
                  <input type="file" className="hidden" accept=".mp3" />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  *3-5 mixing and mastering examples, links to your projects and
                  average price for your service
                </p>
              </div>

              <div className="flex justify-center items-center mt-10">
                <button
                  type="submit"
                  className="w-96 py-2 border rounded-full shadow-slate-900 hover:text-black"
                >
                  SEND
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500 text-center mt-4">
              *All requests are processed within 48 hours. You will get a
              response from
              <br />
              <a
                href="mailto:connections@invariancerecords.com"
                className="underline"
              >
                connections@invariancerecords.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;