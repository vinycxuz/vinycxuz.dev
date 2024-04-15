import React from 'react';
import "./style.css";

import Contact from '../contact';
import ModalAbout from './modal';

const About = () => {
  return (
    <div className='about'>
      <section className='solution_section'>
        <div className='titulo'>
          <h1>Competências</h1>
        </div>
        <div className='timeline'>
          <ModalAbout />
          <ModalAbout />
          <ModalAbout />
          <ModalAbout />
          <ModalAbout />
          <ModalAbout />
          <ModalAbout />
          <ModalAbout />
          <ModalAbout />
          <ModalAbout />
          <ModalAbout />
          <ModalAbout />
          <ModalAbout />
          <ModalAbout />
          <ModalAbout />
        </div>
      </section>
    <Contact />
    </div>
  );
};

export default About;