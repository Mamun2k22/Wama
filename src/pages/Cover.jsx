import React, { useState, useEffect } from "react";

const Cover = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const now = new Date().getTime();
    const storedEndTime = localStorage.getItem("offerEndTime");

    if (storedEndTime) {
      const remainingTime = storedEndTime - now;
      setTimeLeft(remainingTime > 0 ? remainingTime : 0);
    } else {
      const newEndTime = now + 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
      localStorage.setItem("offerEndTime", newEndTime);
      setTimeLeft(newEndTime - now);
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const updatedTime = prev - 1000; // Decrease by 1 second
        if (updatedTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return updatedTime;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="font-poppins bg-teal-800 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Offer Timer Section */}
        <div className="relative bg-white text-teal-800 rounded-md shadow-lg p-6 text-center border-4 border-teal-500 overflow-hidden">
          {/* Animated Glow Effect */}
          <div className="absolute inset-0 border-2 border-teal-500 rounded-md blur-lg opacity-30 animate-pulse pointer-events-none"></div>

          {/* Timer Content */}
          <h2 className="text-xl md:text-2xl font-semibold mb-4 drop-shadow-md animate-fadeIn">
            🎉 Offer Ends In:
          </h2>
          <p className="text-3xl md:text-4xl font-bold animate-bounce drop-shadow-md">
            {formatTime(timeLeft)}
          </p>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col items-center">
          <div className="border-2 border-white rounded-md px-8 py-6 text-center mb-6 bg-teal-900">
            <h1 className="text-white text-lg md:text-2xl font-semibold">
              Spend Quality Time with TIME DEVELOP
            </h1>
          </div>
          <div className="border-2 border-white rounded-md px-8 py-6 text-center bg-teal-700">
            <p className="text-white text-lg md:text-xl font-semibold">
              Contact us at 01975199492
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-white text-teal-800 rounded-md shadow-lg p-6 text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Don't Miss Out!</h2>
          <p className="text-lg md:text-xl mb-4">
            Make the most of this exclusive offer before it's too late.
          </p>
          <button className="bg-teal-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition">
            Claim Offer Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cover;
