import React from "react";
import cloud from "/src/assets/cloud.jpeg"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
          <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-2 ">
            <div className="mx-auto max-w-sm lg:max-w-none">
              <div className="flex items-center mb-6 lg:mb-0">
                <img src={cloud} alt="logo" className="w-24 h-24 mr-4" />

                <p className="text-white text-base font-light">
                Cloud Design Lab is a cutting-edge cloud design lab specializing in AI software development and consulting. We design, build, and empower companies to deliver innovative, market-leading experiences through intelligent and scalable solutions.
                </p>
              </div>
              <br></br><br />
              <div className="flex flex-col justify-center items-center lg:items-start gap-2">
                <div className="flex items-center text-white">
                  <FaEnvelope className="text-blue-500 mr-2" />
                  <span>munir@clouddesignlab.com</span>
                </div>
                <div className="flex items-center text-white">
                  <FaPhone className="text-green-500 mr-2" />
                  <span>+07722107520</span>
                </div>
                <div className="flex items-center text-white">
                  <FaMapMarkerAlt className="text-red-500 mr-2" />
                  <span>Address G15, Westlink House, 981 Great West Road, Brentford, TW8 9DN</span>
                </div>
              </div>
              {/* Social Media Icons */}
              <div className="mt-6 flex justify-center gap-4 lg:justify-start">
                {/* Social media buttons go here */}
                <a
                  href="https://www.linkedin.com/company/cloud-design-lab-uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border border-gray-300 rounded-full py-2 px-4"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/clouddesignlab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border border-gray-300 rounded-full py-2 px-4"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div className="mx-auto max-w-md">
              <strong className="block text-center text-xl font-bold text-white sm:text-3xl dark:text-white">
                Subscribe For Latest News!
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
                  <button className="mt-5 sm:mt-3 rounded-full border-purple-600 border-solid bg-purple-600 px-5 py-3 text-sm font-medium text-white transition transition hover:bg-purple-700 hover:border-purple-800">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-100 pt-8 dark:border-gray-800">
            <p className="text-center text-xs/relaxed text-white dark:text-white">
              © FutureInno 2024. All rights reserved.
              <br />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
