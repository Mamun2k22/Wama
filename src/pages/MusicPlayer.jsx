import React, { useState } from "react";

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(null);

  const tracks = [
    { id: 1, title: "Temporary Remedy", artist: "kelatto" },
    { id: 2, title: "Temporary Remedy", artist: "kelatto" },
    { id: 3, title: "Temporary Remedy", artist: "kelatto" },
  ];

  const handlePlayPause = (id) => {
    setCurrentTrack(currentTrack === id ? null : id);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-around items-center mt-20 font-poppins ">
      <div className=" space-y-16">
        <div className="font-roboto text-center md:text-left">
          <h1 className="text-xl font-semibold">Mixing & Mastering</h1>
          <p className="text-sm mt-2">
            Elevate Your Music: Discover Your Ultimate Sound
          </p>

          <div className="flex justify-center md:justify-start mt-5">
            <button className="font-poppins py-1 bg-[#628dfb] text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 w-[140px] h-[32px] text-sm">
              Order
            </button>
          </div>
        </div>
        <div className="font-roboto text-center md:text-left mt-5">
          <h1 className="text-2xl font-semibold">Only Professionals</h1>
          <p className="text-sm mt-2">
          Sound Quality on Par with Global Hits
          </p>

          <div className="flex justify-center md:justify-start mt-5">
            <button className="font-poppins py-1 bg-[#628dfb] text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 w-[140px] h-[32px] text-sm">
            Explore
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-white p-6 rounded-lg shadow-lg mt-5">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="flex items-center justify-between w-64 p-4 mb-4 bg-white rounded-lg shadow-md"
          >
            <div>
              <div className="text-sm font-bold">{track.artist}</div>
              <div className="text-xs text-gray-500 truncate">
                {track.title}
              </div>
            </div>
            <button
              className={`p-2 rounded-full ${
                currentTrack === track.id
                  ? "bg-green-100 text-green-600"
                  : "bg-gray-100 text-gray-600"
              }`}
              onClick={() => handlePlayPause(track.id)}
            >
              {currentTrack === track.id ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 9v6m4-6v6"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-6.5-3.75A1 1 0 007 8.75v6.5a1 1 0 001.252.934l6.5-3.75a1 1 0 000-1.684z"
                  />
                </svg>
              )}
            </button>
          </div>
        ))}

        <div className="flex space-x-2 mt-4">
          {tracks.map((track) => (
            <div
              key={track.id}
              className={`h-2 w-2 rounded-full ${
                currentTrack === track.id ? "bg-black" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
