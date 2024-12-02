import React from "react";

const ProductHighlight = () => {
  return (
    <section className="bg-gradient-to-r from-[#DEFDE9] to-[#c9efd7] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
        {/* Left: Product Image */}
        <div className="relative w-full md:w-1/2">
          <img
            src="https://themegenix.net/html/suxnix/assets/img/others/about_img.png" // Replace with your product image path
            alt="Product"
            className="rounded-lg shadow-lg object-cover"
          />
          {/* Decorative Animation */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="animate-pulse bg-green-300 rounded-full h-40 w-40 opacity-30 blur-xl"></div>
          </div>
        </div>

        {/* Right: Description and CTA */}
        <div className="text-center md:text-left md:w-1/2">
          <h3 className="text-xl font-semibold text-green-600 uppercase mb-2">
            🌿 Perfect Brand is Featured On
          </h3>
          <h2 className="text-4xl font-extrabold text-gray-800 leading-tight mb-4">
            Awesome Supplement <br /> For Your Body
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Vitamin D3 supplements are commonly recommended for people at risk
            for vitamin D deficiency. Low vitamin D levels can cause fatigue,
            muscle weakness, and other health issues.
          </p>
          <a
            href="#"
            className="inline-block bg-[#0F766E] hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
