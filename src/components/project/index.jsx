import React from 'react';
import SectionProject from './section';
import Contact from '../contact';

import './style.css';

const Project = () => {
  return (
    <>
    <div className='section_project'>
      <div className='container_project'>
        <SectionProject className='project'/>
        <SectionProject className='project'/>
        <SectionProject className='project'/>
        <SectionProject className='project'/>
        <SectionProject className='project'/>
        <SectionProject className='project'/>
        <SectionProject className='project'/>
        <SectionProject className='project'/>
        <SectionProject className='project'/>
        <SectionProject className='project'/>
      </div>
      <Contact />
    </div>
    </>
  );
};

export default Project;