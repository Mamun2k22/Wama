import React from 'react';

function RecaptchaBox() {
  return (
    <div className="mt-4 p-4 border border-gray-300 rounded-md bg-white flex items-center justify-between font-poppins">
      <div className="flex items-center">
        <input id="recaptcha" type="checkbox" className="mr-2" />
        <label htmlFor="recaptcha" className="text-sm font-medium text-gray-700">
          I'm not a robot
        </label>
      </div>
      <div className="w-10 h-10">
        {/* Placeholder for reCAPTCHA logo */}
        <img
          src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
          alt="reCAPTCHA logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default RecaptchaBox;
