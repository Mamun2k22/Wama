import React from 'react';

const FAQSection = () => {
  const toggleFAQ = (button) => {
    const content = button.nextElementSibling;
    button.setAttribute("aria-expanded", button.getAttribute("aria-expanded") === "false" ? "true" : "false");
    content.style.maxHeight = button.getAttribute("aria-expanded") === "true" ? content.scrollHeight + "px" : "0";
  };

  return (


        <div>

            <div className="max-w-xl mx-auto">
            <div className="relative flex flex-col items-center">
                    
                        <h1 className="text-2xl lg:text-4xl font-bold dark:text-white"> <span className="text-blue-500"> Frequently Asked Questions
                            </span> </h1>
                        <div className="flex w-56 mt-1 mb-10 overflow-hidden rounded">
                            <div className="flex-1 h-2 bg-blue-200">
                            </div>
                            <div className="flex-1 h-2 bg-blue-400">
                            </div>
                            <div className="flex-1 h-2 bg-blue-600">
                            </div>
                            <div className="flex-1 h-2 bg-blue-700">
                            </div>
                            
                        </div>
            </div>
           </div>
        <div className="py-12 lg:py-10 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        
        <div className="flex flex-col text-left basis-1/2">
        <ul className="basis-1/2">
          <li>
            <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10" aria-expanded="false" onClick={(e) => toggleFAQ(e.currentTarget)}>
              <span className="flex-1 text-base-content">How secure is my insurance information?</span>
              <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current">
                <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
              </svg>
            </button>
            <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: 'max-height 0.3s ease-in-out 0s' }}>
              <div className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed">We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.</div>
              </div>
            </div>
          </li>
          <li>
            <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10" aria-expanded="false" onClick={(e) => toggleFAQ(e.currentTarget)}>
              <span className="flex-1 text-base-content">How can I customize my insurance coverage?</span>
              <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current">
                <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
              </svg>
            </button>
            <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: 'max-height 0.3s ease-in-out 0s' }}>
              <div className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed">Our insurance plans are customizable. You can tailor your coverage to meet your specific needs and budget.</div>
              </div>
            </div>
          </li>
          <li>
            <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10" aria-expanded="false" onClick={(e) => toggleFAQ(e.currentTarget)}>
              <span className="flex-1 text-base-content">Is there a waiting period for insurance claims?</span>
              <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current">
                <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
              </svg>
            </button>
            <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: 'max-height 0.3s ease-in-out 0s' }}>
              <div className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed">There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details.</div>
              </div>
            </div>
          </li>
        </ul>
        </div>
        <ul className="basis-1/2">
          <li>
            <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10" aria-expanded="false" onClick={(e) => toggleFAQ(e.currentTarget)}>
              <span className="flex-1 text-base-content">How secure is my insurance information?</span>
              <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current">
                <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
              </svg>
            </button>
            <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: 'max-height 0.3s ease-in-out 0s' }}>
              <div className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed">We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.</div>
              </div>
            </div>
          </li>
          <li>
            <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10" aria-expanded="false" onClick={(e) => toggleFAQ(e.currentTarget)}>
              <span className="flex-1 text-base-content">How can I customize my insurance coverage?</span>
              <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current">
                <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
              </svg>
            </button>
            <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: 'max-height 0.3s ease-in-out 0s' }}>
              <div className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed">Our insurance plans are customizable. You can tailor your coverage to meet your specific needs and budget.</div>
              </div>
            </div>
          </li>
          <li>
            <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10" aria-expanded="false" onClick={(e) => toggleFAQ(e.currentTarget)}>
              <span className="flex-1 text-base-content">Is there a waiting period for insurance claims?</span>
              <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current">
                <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
              </svg>
            </button>
            <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: 'max-height 0.3s ease-in-out 0s' }}>
              <div className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed">There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details.</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
        </div>
 
  );
};

export default FAQSection;
