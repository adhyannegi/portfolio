import React from 'react';

const WorkExperience = () => {
  return (
    <div name='work' className='w-full bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full min-h-screen'>
        <div className='max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 pt-4'>
          <div className='md:text-left pb-8 md:pb-0'>
            <p className='text-4xl ml-4 font-bold inline border-b-4 border-pink-600'>
              Work Experience
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full flex flex-col'>
          {/* Work Experience 1 */}
          <div className='md:text-left text-2xl font-bold p-3'>
            <p className='text-pink-600'>- Student Information Technology Analyst</p>
            <p className='text-gray-400'>MSU Information Technology</p>
            <p className='text-gray-400'>East Lansing, MI</p>
          </div>

          {/* Work Experience 2 */}
          <div className='md:text-left text-2xl font-bold p-3'>
            <p className='text-pink-600'>- Undergraduate Teaching Assistant – Introduction to Python</p>
            <p className='text-gray-400'>College of Engineering at MSU</p>
            <p className='text-gray-400'>East Lansing, MI</p>
          </div>

          {/* Work Experience 3 */}
          <div className='md:text-left text-2xl font-bold p-3'>
            <p className='text-pink-600'>- Data Science Intern</p>
            <p className='text-gray-400'>Airtel Africa</p>
            <p className='text-gray-400'>New Delhi, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
