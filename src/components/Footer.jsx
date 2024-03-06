import React from "react";
import { logo } from "../assets";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
          <div className="flex">
            <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          </div>
          <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-2 ">
            <div className="mx-auto max-w-sm lg:max-w-none">
              <p className="mt-4 text-center text-white lg:text-left lg:text-lg dark:text-white">
                FutureInno Technologies is a software development and consulting
                company that builds, designs, and helps companies deliver
                market-leading experiences.
              </p>
              <br></br>
              {/* Email, Phone, and Address */}
              <div className="flex flex-col justify-center items-center lg:items-start gap-2">
                <div className="flex items-center text-white">
                  <svg
                    className="h-6 w-6 text-gray-500 mr-2 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                  <span>Futureinno.technologies@gmail.com</span>
                </div>
                <div className="flex items-center text-white">
                  <svg
                    className="h-6 w-6 text-gray-500 mr-2 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2 7c0-1.1.9-2 2-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M22 12h-6"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M22 12h-6"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 12H4"
                    ></path>
                  </svg>
                  <span>+923114554242</span>
                </div>
                <div className="flex items-center text-white">
                  <svg
                    className="h-6 w-6 text-gray-500 mr-2 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                    ></path>
                  </svg>
                  <span>C Block Valencia Town, Lahore</span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="mt-6 flex justify-center gap-4 lg:justify-start">
                {/* Social media icons go here */}
              </div>
            </div>
            {/* <div className="mx-auto max-w-md">
              <strong className="block text-center text-xl font-bold text-white sm:text-3xl dark:text-white">
                Let's Transform The Business
              </strong>

              <form className="mt-6">
                <div className="relative max-w-lg">
                  <label className="sr-only" htmlFor="email">
                    {" "}
                    Email{" "}
                  </label>

                  <input
                    className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium dark:border-gray-700 dark:bg-gray-800 text-white"
                    id="email"
                    type="email"
                    placeholder="Enter your Email Address"
                  />

                  <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                    Subscribe
                  </button>
                </div>
              </form>
            </div> */}
            <div className="mx-auto max-w-md">
              <strong className="block text-center text-xl font-bold text-white sm:text-3xl dark:text-white">
                Subscribe For Lattest News!
              </strong>

              <form className="mt-6">
                <div className="relative max-w-lg flex flex-col items-center">
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium dark:border-gray-700 dark:bg-gray-800 text-white"
                    id="email"
                    type="email"
                    placeholder="Enter your Email Address"
                  />
                  <button className="mt-5 sm:mt-3 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                    Subscribe
                  </button>
                  {/* <button className="w-1/3 mt-5 sm:mt-3 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                    <span className="inline-block max-w-full overflow-hidden whitespace-nowrap">
                      Subscribe
                    </span>
                  </button> */}
                </div>
              </form>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-100 pt-8 dark:border-gray-800">
            <p className="text-center text-xs/relaxed text-white dark:text-white">
              © FutureInno 2022. All rights reserved.
              <br />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
