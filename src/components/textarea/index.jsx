import React from 'react';
import { Label, Textarea } from "flowbite-react";

import './style.css';

const TextArea = () => {
  return (
    <div className='text_area'>
      <div className="w-3/4">
        <div className="mb-2 block">
          <Label htmlFor="comment" value="Your message" />
        </div>
        <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
      </div>
    </div>
  );
};

export default TextArea;