import React from 'react';
import SectionProject from './section';
import Contact from '../contact';

import './style.css';

const Project = () => {
  const projectData = [
    { title: "Title 1", content: "Content 1" },
    { title: "Title 2", content: "Content 2" },
  ];
  return (
    <>
    <div className='section_project'>
      <div className='container_project'>
        {projectData.map((data, index) => (
          <SectionProject key={index} title={data.title} content={data.content} />
        ))}
        )
      </div>
      <Contact />
    </div>
    </>
  );
};

export default Project;