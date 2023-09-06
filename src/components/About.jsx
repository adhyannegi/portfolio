import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Adhyan, nice to meet you. I am 19 years old and I am from New Delhi, India.</p>
            </div>
            <div>
              <p>I am a rising junior studying Computer Science at Michigan State University. I have a curious and 
                inquisitive nature, which motivates me to explore various topics and ideas. I have a keen interest in technology and am 
                always eager to learn more about the latest advancements in the field and finding innovative solutions to complex problems.
                I am seeking opportunities to gain hands-on experience and contribute to tech projects. My current experiences related to 
                computer science include working as a Teaching Assistant for Introduction to Python at MSU and as a Data Science Intern 
                at Airtel Africa. I have gained valuable experience working on real-world projects and collaborating with teams through 
                these positions.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;