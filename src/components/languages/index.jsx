import React from 'react';
import { Carousel } from "flowbite-react"
import './style.css';

const Languages = (props) => {
  return (
    <div className='languages'>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
          {props.data.map((item, index) => (
            <div key={index} className="flex w-3/4 h-full items-center justify-center  dark:bg-gray-700 dark:text-white">
              <div className='container_languages'>
                <div className='languages_title'>
                  <h1>{item.title}</h1>
                </div>
                <div className='content_languages'>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
    </div>
    </div>
  );
};

export default Languages;