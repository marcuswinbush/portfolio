import Travel from "../../assets/images/travel sc.png";
import ecommerce from "../../assets/images/ecommerce-sc.png";
import Weather from "../../assets/images/weather-app.png"
import Instrumasters from "../../assets/images/Instrumaster.png";
import Anime from "../../assets/images/anime-api-sc.png";
import Sharp from "../../assets/images/Sharp.png";
import EchoChat from "../../assets/images/EchoChat.png";
// import Portfolio from "../../assets/images/MyPortfolio.png";
import { Tooltip } from "@material-tailwind/react";
import { useState } from "react";

export default function Projects() {
  const [showTextBoxOne, setShowTextBoxOne] = useState(false);

  const handleButtonClickOne = () => {
    setShowTextBoxOne(true);
  };

  const [showTextBoxTwo, setShowTextBoxTwo] = useState(false);

  const handleButtonClickTwo = () => {
    setShowTextBoxTwo(true);
  };

  const [showTextBoxThree, setShowTextBoxThree] = useState(false);

  const handleButtonClickThree = () => {
    setShowTextBoxThree(true);
  };

  // const [showTextBoxFour, setShowTextBoxFour] = useState(false);

  // const handleButtonClickFour = () => {
  //   setShowTextBoxFour(true);
  // };

  const [showTextBoxFive, setShowTextBoxFive] = useState(false);

  const handleButtonClickFive = () => {
    setShowTextBoxFive(true);
  };

  const [showTextBoxSix, setShowTextBoxSix] = useState(false);

  const handleButtonClickSix = () => {
    setShowTextBoxSix(true);
  };

  const [showTextBoxSeven, setShowTextBoxSeven] = useState(false);

  const handleButtonClickSeven = () => {
    setShowTextBoxSeven(true);
  };

  return (
    <div className="pt-32">
      <h1
        className="mb-4 text-4xl text-center font-extrabold lg:text-7xl bg-gradient-to-r bg-clip-text text-transparent 
        from-orange-500 via-red-500 to-orange-500
        animate-text"
      >
        Projects that I've worked on.
      </h1>
      <p className="text-center text-white text-2xl">
        More projects are on the way!
      </p>

      <div className="pt-32 grid lg:grid-cols-2">
        <section className="flex justify-center pb-10 px-4 text-center">
          <div className="bg-black text-white  shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              src={Travel}
              className="w-full h-auto max-w-7xl rounded-t-md"
              alt="travel"
              loading="lazy"
            />

            <div className="p-5 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-b-md">
              <div className=" flex justify-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                  Travel
                </h5>

                {
                  <Tooltip
                    content={`Learn More`}
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <button onClick={handleButtonClickOne}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 ml-2 mb-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12" y2="8"></line>
                      </svg>
                    </button>
                  </Tooltip>
                }
              </div>
              {
                <div className="flex justify-center items-center">
                  {showTextBoxOne && (
                    <div className="fixed z-10 inset-0 bg-black/30 flex justify-center items-center text-black px-8">
                      <div className="bg-white rounded-lg p-8 max-w-3xl">
                        <h1 className="text-xl mb-4">Description</h1>
                        <p>
                          Travel is a website developed using React and SCSS.
                          Built with cutting-edge technologies, our platform seamlessly blends stunning visuals with intuitive functionality, offering you a dynamic and immersive travel experience like no other.
                        </p>
                        <button
                          className="mt-4 text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text font-bold py-2 px-4 rounded"
                          onClick={() => setShowTextBoxOne(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              }
              <a
                href="https://github.com/marcuswinbush/Travel?tab=readme-ov-file"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center rounded-md text-white bg-gradient-to-br from-black to-gray-600 shadow-lg hover:shadow-gray-600/60 animate-text"
              >
                Repository
              </a>
              <a
                href="https://travel-ten-teal.vercel.app"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-md text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text"
              >
                Live Demo
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                  react
                </span>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600">
                  scss
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center pb-10 px-4 text-center">
          <div className="bg-black text-white  shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              src={ecommerce}
              className="w-full h-auto max-w-7xl rounded-t-md"
              alt="ecommerce"
              loading="lazy"
            />

            <div className="p-5 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-b-md">
              <div className="flex justify-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                  E-commerce
                </h5>
                {
                  <Tooltip
                    content={`Learn More`}
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <button onClick={handleButtonClickTwo}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 ml-2 mb-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12" y2="8"></line>
                      </svg>
                    </button>
                  </Tooltip>
                }
              </div>
              {
                <div className="flex justify-center items-center">
                  {showTextBoxTwo && (
                    <div className="fixed z-10 inset-0 bg-black/30 flex justify-center items-center text-black px-8">
                      <div className="bg-white rounded-lg p-8 max-w-3xl">
                        <h1 className="text-xl mb-4">Description</h1>
                        <p>
                        A cutting-edge e-commerce platform designed to provide an exceptional shopping experience for fashion enthusiasts. Built with the powerful Next.js framework and styled using tailwind css, E-commercce combines high performance with a visually stunning and responsive design.


                        </p>
                        <button
                          className="mt-4 text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text font-bold py-2 px-4 rounded"
                          onClick={() => setShowTextBoxTwo(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              }
              <a
                href="https://www.github.com/jwinbush/spotify"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center rounded-md text-white bg-gradient-to-br from-black to-gray-600 shadow-lg hover:shadow-gray-600/60 animate-text"
              >
                Repository
              </a>
              <a
                href="https://www.jawonwinbush.com"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-md text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text"
              >
                Live Demo
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                  next
                </span>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600">
                  tailwind-css
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center pb-10 px-4 text-center">
          <div className="bg-black text-white  shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              src={Anime}
              className="w-full h-auto max-w-7xl rounded-t-md"
              alt="OdysseyRentals"
              loading="lazy"
            />

            <div className="p-5 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-b-md">
              <div className="flex justify-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                  AnimeHaven
                </h5>

                {
                  <Tooltip
                    content={`Learn More`}
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <button onClick={handleButtonClickThree}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 ml-2 mb-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12" y2="8"></line>
                      </svg>
                    </button>
                  </Tooltip>
                }
              </div>
              {
                <div className="flex justify-center items-center">
                  {showTextBoxThree && (
                    <div className="fixed z-10 inset-0 bg-black/30 flex justify-center items-center text-black px-8">
                      <div className="bg-white rounded-lg p-8 max-w-3xl">
                        <h1 className="text-xl mb-4">Description</h1>
                        <p>
                        Welcome to AnimeHaven! The premier destination for anime enthusiasts seeking a rich, immersive experience. Built with React for a smooth, dynamic interface, styled with SCSS for a modern, aesthetic appeal, and powered by robust APIs for real-time content, AnimeHaven is designed to cater to all your anime needs.
                        </p>

                        <button
                          className="mt-4 text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text font-bold py-2 px-4 rounded"
                          onClick={() => setShowTextBoxThree(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              }

              <a
                href="https://github.com/marcuswinbush/Anime-Api?tab=readme-ov-file"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center rounded-md text-white bg-gradient-to-br from-black to-gray-600 shadow-lg hover:shadow-gray-600/60 animate-text"
              >
                Repository
              </a>
              <a
                href="https://anime-api-nine-rho.vercel.app"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-md text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text"
              >
                Live Demo
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                  api
                </span>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                  react
                </span>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                  scss
                </span>
                
              </div>
            </div>
          </div>
        </section>
        {/* <section className="flex justify-center pb-10 px-4 text-center">
          <div className="bg-black text-white rounded-b shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              src={Portfolio}
              className="w-full h-auto max-w-7xl rounded-t-md"
              alt="portfolio"
              loading="lazy"
            />

            <div className="p-5 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-b-md">
              <div className="flex justify-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                  My Portfolio
                </h5>

                {
                  <Tooltip
                    content={`Learn More`}
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <button onClick={handleButtonClickFour}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 ml-2 mb-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12" y2="8"></line>
                      </svg>
                    </button>
                  </Tooltip>
                }
              </div>
              {
                <div className="flex justify-center items-center">
                  {showTextBoxFour && (
                    <div className="fixed z-10 inset-0 bg-black/30 flex justify-center items-center text-black px-8">
                      <div className="bg-white rounded-lg p-8 max-w-3xl">
                        <h1 className="text-xl mb-4">Description</h1>
                        <p>
                          Odyssey Rentals is a rental car website built using
                          PHP, the MVC (Model-View-Controller) architecture,
                          MySQL database, CodeIgniter framework, and styled with
                          Tailwind CSS. The website incorporates an intuitive
                          admin panel, empowering administrators to efficiently
                          manage the rental process. Admins have the ability to
                          add and update vehicle listings, set rental rates, and
                          monitor reservations. The implementation of MVC
                          architecture and CodeIgniter framework ensures a
                          structured and organized codebase, enhancing code
                          maintainability and scalability. The integration with
                          MySQL database enables efficient storage and retrieval
                          of data related to vehicles, reservations, and user
                          profiles. With its registration system, users can
                          easily create accounts, manage their profiles, and
                          securely store their personal information.
                        </p>

                        <button
                          className="mt-4 text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text font-bold py-2 px-4 rounded"
                          onClick={() => setShowTextBoxFour(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              }

              <a
                href="https://www.github.com/jwinbush/portfolio"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center rounded-md text-white bg-gradient-to-br from-black to-gray-600 shadow-lg hover:shadow-gray-600/60 animate-text"
              >
                Repository
              </a>
              <a
                href="https://newportfolio2023.vercel.app"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-md text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text"
              >
                Live Demo
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                  react
                </span>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                  framer-motion
                </span>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600">
                  tailwind-css
                </span>
              </div>
            </div>
          </div>
        </section> */}

        <section className="flex justify-center pb-10 px-4 text-center">
          <div className="bg-black text-white  shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              src={Weather}
              className="w-full h-auto max-w-7xl rounded-t-md"
              alt="Weather App"
              loading="lazy"
            />

            <div className="p-5 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-b-md">
              <div className="flex justify-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                  Weather App
                </h5>
                {
                  <Tooltip
                    content={`Learn More`}
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <button onClick={handleButtonClickFive}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 ml-2 mb-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12" y2="8"></line>
                      </svg>
                    </button>
                  </Tooltip>
                }
              </div>
              {
                <div className="flex justify-center items-center">
                  {showTextBoxFive && (
                    <div className="fixed z-10 inset-0 bg-black/30 flex justify-center items-center text-black px-8">
                      <div className="bg-white rounded-lg p-8 max-w-3xl">
                        <h1 className="text-xl mb-4">Description</h1>
                        <p>
                        The WeatherApp API is a comprehensive solution designed to provide weather information to developers creating applications with React.js and CSS. This API delivers accurate and up-to-date weather data, including current conditions, forecasts, and weather alerts, enabling developers to build responsive and visually appealing weather applications.
                        </p>

                        <button
                          className="mt-4 text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text font-bold py-2 px-4 rounded"
                          onClick={() => setShowTextBoxFive(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              }

              <a
                href="https://github.com/marcuswinbush/Weather-App-API"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center rounded-md text-white bg-gradient-to-br from-black to-gray-600 shadow-lg hover:shadow-gray-600/60 animate-text"
              >
                Repository
              </a>
              <a
                href="https://weather-app-api-clone.vercel.app"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-md text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text"
              >
                Live Demo
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>

              <div className="px-6 py-4">
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                  react
                </span>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                  html
                </span>
                <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-600">
                  css
                </span>
              </div>
            </div>
          </div>
        </section>
       
        
      </div>
    </div>
  );
}
