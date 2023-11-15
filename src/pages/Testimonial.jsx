import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

const Testimonial = () => {
  useEffect(() => {
    // Initialize Swiper when component mounts
    const mySwiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    // Destroy Swiper when component unmounts
    return () => {
      mySwiper.destroy();
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
      <h3 className="mb-6 text-3xl font-bold text-neutral-800 dark:text-neutral-200">
        Testimonials
      </h3>

      {/* Container for the Testimonials Slider */}
      <div className="swiper-container mx-auto my-8">
        <div className="swiper-wrapper grid gap-6 text-center md:grid-cols-1 lg:grid-cols-3 lg:gap-12">
          {/* First Testimonial */}
          <div className="swiper-slide">
            {/* Testimonial content */}
            <div className="mb-6 flex justify-center">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                alt="User"
              />
            </div>
            <h5 className="mb-4 text-xl font-semibold">Maria Smantha</h5>
            <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
              Web Developer
            </h6>
            <p className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
            </p>
          </div>

          {/* Second Testimonial */}
          <div className="swiper-slide">
            {/* Testimonial content */}
            <div className="mb-6 flex justify-center">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
                className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                alt="User"
              />
            </div>
            <h5 className="mb-4 text-xl font-semibold">Lisa Cudrow</h5>
            <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
              Graphic Designer
            </h6>
            <p className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid commodi.
            </p>
            {/* Rating stars */}
            <ul className="mb-0 flex items-center justify-center">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.23l-4.39 3.8 1.43 5.682c.308 1.22-.532 1.803-1.544 1.14L12 16.682l-4.857 3.544c-1.012.663-1.852.081-1.544-1.14l1.43-5.682-4.39-3.8c-.887-.685-.415-2.137.749-2.23l5.404-.433 2.082-5.007zM12 15.155l-3.766 2.744 1.445-5.735L5.805 8.37l4.738-.383L12 2.74l1.457 5.247 4.738.383-3.874 3.794 1.445 5.735L12 15.155z"
                  />
                </svg>
              </li>
              {/* Add more stars if needed */}
            </ul>
          </div>

          {/* Third Testimonial */}
          <div className="swiper-slide">
            {/* Testimonial content */}
            <div className="mb-6 flex justify-center">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(3).jpg"
                className="w-32 rounded-full shadow-lg dark:shadow-black/30"
                alt="User"
              />
            </div>
            <h5 className="mb-4 text-xl font-semibold">John Doe</h5>
            <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
              Product Manager
            </h6>
            <p className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </div>

        {/* Add Pagination */}
        <div className="swiper-pagination"></div>

        {/* Add Navigation */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
};

export default Testimonial;
