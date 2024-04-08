import React from 'react';
import { Carousel } from "flowbite-react"


const Languages = () => {
  return (
    <div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
        <div className="flex h-full items-center justify-center  dark:bg-gray-700 dark:text-white">
          Slide 1
        </div>
        <div className="flex h-full items-center justify-center  dark:bg-gray-700 dark:text-white">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center  dark:bg-gray-700 dark:text-white">
          Slide 3
        </div>
      </Carousel>
    </div>
    </div>
  );
};

export default Languages;