import React from "react";

const Benefits = () => {
  const benefits = [
    "⏳ Prevents premature ejaculation.",
    "🔥 Improves semen quality.",
    "⏱️ Extends intimacy by 30 minutes.",
    "🌿 Boosts hormones naturally.",
    "✨ Rekindles sexual excitement.",
    "🩺 Supports reproductive health.",
    "⚡ Increases energy & stamina.",
    "💪 Addresses stress-related weakness.",
    "🔋 Provides 6-8 hours of energy.",
    "🧘 Enhances vitality & well-being.",
  ];
  

  return (
    <section className="bg-gradient-to-r from-green-50 to-green-100 py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Product Benefits Section */}

    <div className="text-center mb-8">
      <h2 className="text-4xl font-extrabold text-teal-700 mb-4">
        🌟 Product Benefits 🌟
      </h2>
      <p className="text-gray-600 text-lg">
      Experience the transformative power of our product. These benefits are 
      designed to enhance your quality of life and well-being.
      </p>
    </div>

    {/* Eye-Catching Highlight Card */}
    <div className="relative bg-teal-700 text-white p-8 rounded-lg shadow-lg mb-12 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
      {/* Image */}
      <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
        <img
          src="https://themegenix.net/html/suxnix/assets/img/others/about_img.png" // Replace with your product image URL
          alt="Product Highlight"
          className="rounded-full object-cover shadow-md"
        />
      </div>

      {/* Text Content */}
      <div>
        <h3 className="text-3xl font-bold mb-4">
          Enhance Your Intimacy <br /> Like Never Before!
        </h3>
        <p className="text-lg mb-6">
          Experience up to <span className="font-extrabold">30 minutes more intimacy</span>, improved hormonal balance, and boosted energy — all with natural ingredients.
        </p>
        <a
          href="#"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-teal-900 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
        >
          Order Now
        </a>
      </div>
    </div>
    
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {benefits.map((benefit, index) => (
              <div className="relative" key={index}>
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Benefit {index + 1}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {benefit}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 px-6">
      {benefits.map((benefit, index) => (
        <a
          key={index}
          className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
          href="#"
        >
      
          <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
            <img
              className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
              src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Card Image"
            />
          </div>
          
   
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Benefit {index + 1}
            </h3>
            <p className="mt-1 text-gray-500 dark:text-neutral-400">
              {benefit}
            </p>
          </div>
        </a>
      ))}
    </div>
        {/* Top Banner Section */}
        <div className="bg-red-50 border border-red-400 rounded-lg p-6 text-center mb-10 mt-8">
          {/* Icon and Title */}
  <div className="flex justify-center items-center mb-4">
    <div className="bg-red-100 p-4 rounded-full shadow-md animate-pulse">
      <span className="text-red-600 text-4xl">🛡️</span>
    </div>
  </div>
  
  {/* Heading */}
  <h2 className="text-red-600 font-extrabold text-2xl text-center mb-4">
 **Risk-Free Guarantee!**
  </h2>
          <p className="text-gray-600 mt-2">
            If anyone claims our product doesn’t work, we will refund 3 times
            the price. Consider this your last treatment and see for yourself –
            guaranteed to work 100%, God willing.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-400 rounded-lg p-8 text-center mb-12 shadow-lg">
  {/* Icon or Image */}
  <div className="flex justify-center items-center mb-4">
    <img
      src="https://cdn-icons-png.flaticon.com/128/5163/5163977.png" // Replace with your image or icon
      alt="Free Delivery"
      className="w-16 h-16 animate-bounce"
    />
  </div>

  {/* Title */}
  <h2 className="text-teal-700 font-extrabold text-3xl">
    🚚 Free Delivery Across Bangladesh
  </h2>

  {/* Description */}
  <p className="text-gray-700 mt-4 text-lg">
    Enjoy <span className="font-semibold text-green-600">free delivery</span> to your doorstep with no advance payment required. Order from the comfort of your home and pay on delivery.
  </p>

  {/* CTA Button */}
  <button
    className="mt-6 px-8 py-3 bg-teal-600 text-white font-semibold rounded-full shadow-md hover:bg-teal-700 hover:shadow-lg transform transition duration-300 hover:scale-105"
  >
    🛒 Order Now
  </button>

  {/* Decorative Animation */}
  <div className="mt-6">
    <span className="text-sm font-medium text-green-500 animate-pulse">
      🌟 Hassle-free shopping made simple!
    </span>
  </div>
</div>


<div className="bg-gradient-to-r from-teal-50 to-teal-100 border border-teal-400 rounded-lg p-8 mb-12 shadow-lg">
  {/* Title */}
  <h2 className="text-teal-700 font-extrabold text-3xl text-center mb-6">
    📋 Usage Instructions
  </h2>

  {/* Step-by-Step Instructions */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Step 1 */}
    <div className="flex flex-col items-center text-center">
      <div className="bg-teal-100 p-4 rounded-full shadow-md mb-4">
        <img
          src="https://cdn-icons-png.flaticon.com/128/17038/17038845.png" // Replace with your image or icon
          alt="Spoon Icon"
          className="w-12 h-12"
        />
      </div>
      <h3 className="text-teal-600 font-semibold text-xl">Step 1</h3>
      <p className="text-gray-700 mt-2">
        Take one teaspoon of the product.
      </p>
    </div>

    {/* Step 2 */}
    <div className="flex flex-col items-center text-center">
      <div className="bg-teal-100 p-4 rounded-full shadow-md mb-4">
        <img
          src="https://cdn-icons-png.flaticon.com/128/17269/17269547.png" // Replace with your image or icon
          alt="Cup Icon"
          className="w-12 h-12"
        />
      </div>
      <h3 className="text-teal-600 font-semibold text-xl">Step 2</h3>
      <p className="text-gray-700 mt-2">
        Mix it with lukewarm water or milk.
      </p>
    </div>

    {/* Step 3 */}
    <div className="flex flex-col items-center text-center">
      <div className="bg-teal-100 p-4 rounded-full shadow-md mb-4">
        <img
          src="https://cdn-icons-png.flaticon.com/128/6308/6308960.png" // Replace with your image or icon
          alt="Clock Icon"
          className="w-12 h-12"
        />
      </div>
      <h3 className="text-teal-600 font-semibold text-xl">Step 3</h3>
      <p className="text-gray-700 mt-2">
        Consume every night, <br />
        <span className="font-bold text-teal-600">30 minutes after dinner.</span>
      </p>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Benefits;
