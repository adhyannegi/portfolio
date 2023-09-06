import React from 'react';

const Projects = () => {
  return (
    <div name='projects' className='w-full bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full min-h-screen'>
        <div className='max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-4'>
          <div className='md:text-right pb-8 md:pb-0'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Projects
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid md:grid-cols-2 gap-8 p-4'>
          {/* Project 1 */}
          <div className='md:text-right text-2xl font-bold flex flex-col'>
            <p className='text-pink-600'>Grocery Store Management System</p>
            <p className='text-gray-400'>Skills: Python, MongoDb</p>
            <a
              href='https://github.com/adhyannegi/Grocery-Store-Management-System'
              className='text-blue-500 hover:underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              Link to Project
            </a>
          </div>

          {/* Project 2 */}
          <div className='md:text-right text-2xl font-bold flex flex-col'>
            <p className='text-pink-600'>Student Organization Website Development</p>
            <p className='text-gray-400'>Skills: HTML, CSS, JavaScript</p>
            <a
              href='https://msuuiisa.github.io'
              className='text-blue-500 hover:underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              Link to Project
            </a>
          </div>

          {/* Project 3 */}
          <div className='md:text-right text-2xl font-bold flex flex-col'>
            <p className='text-pink-600'>Stock Exchange Simulation System</p>
            <p className='text-gray-400'>Skills: C++, Git</p>
            <a
              href='https://github.com/adhyannegi/cse232/tree/main/Project3'
              className='text-blue-500 hover:underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              Link to Project
            </a>
          </div>

          {/* Add more projects as needed */}
          <div className='md:text-right text-2xl font-bold flex flex-col'>
            <p className='text-pink-600'>Amazon Clone</p>
            <p className='text-gray-400'>Skills: HTML, CSS</p>
            <a
              href='https://github.com/adhyannegi/amazon-clone'
              className='text-blue-500 hover:underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              Link to Project
            </a>
          </div>

          {/* Add more projects as needed */}
          <div className='md:text-right text-2xl font-bold flex flex-col'>
            <p className='text-pink-600'>Image Annotation GUI</p>
            <p className='text-gray-400'>Skills: Python</p>
            <a
              href='https://github.com/killerHet/GUI'
              className='text-blue-500 hover:underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              Link to Project
            </a>
          </div>

          {/* Add more projects as needed */}
          <div className='md:text-right text-2xl font-bold flex flex-col'>
            <p className='text-pink-600'>Name Generator App</p>
            <p className='text-gray-400'>Skills: Flutter</p>
            <a
              href='https://github.com/adhyannegi/namer-app'
              className='text-blue-500 hover:underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              Link to Project
            </a>
          </div>

          
        </div>                
      </div>
    </div>
  );
};

export default Projects;
