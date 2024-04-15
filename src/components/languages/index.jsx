import React from 'react';
import { Carousel } from "flowbite-react"
import './style.css';

const Languages = () => {
  return (
    <div className='languages'>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
        <div className="flex w-3/4 h-full items-center justify-center  dark:bg-gray-700 dark:text-white">
          <div className='container_languages'>
            <div className='languages_title'>
              <h1>Responsividade</h1>
            </div>
            <div className='content_languages'>
              <p>
                This site is a responsive site, which means it can be viewed on any device, whether it's a desktop, tablet, or mobile phone.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-3/4 h-full items-center justify-center  dark:bg-gray-700 dark:text-white">
          <div className='container_languages'>
            <div className='languages_title'>
              <h1>RESTful API</h1>
            </div>
            <div className='content_languages'>
              <p>
                This site uses API's to fetch data from the server and display it on the site.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-3/4 h-full items-center justify-center  dark:bg-gray-700 dark:text-white">
          <div className='container_languages'>
            <div className='languages_title'>
              <h1>Web Applications</h1>
            </div>
            <div className='content_languages'>
              <p>
                Like this, but how you want it. I can create web applications that are tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
    </div>
  );
};

export default Languages;