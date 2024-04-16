import React from 'react';
import "./style.css";

import Contact from '../contact';
import ModalAbout from './modal';

const About = () => {
  const modalData = [
    { title: "Title 1", content: "Content 1" },
    { title: "Title 2", content: "Content 2" },
    // Add more objects as needed
  ];

  return (
    <div className='about'>
      <section className='solution_section'>
        <div className='titulo'>
          <h1>Competências</h1>
        </div>
        <div className='timeline'>
          {modalData.map((data, index) => (
            <ModalAbout key={index} title={data.title} content={data.content} />
          ))}
        </div>
      </section>
    <Contact />
    </div>
  );
};

export default About;