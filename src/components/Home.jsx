import React from 'react';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          ADHYAN NEGI
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Computer Science Student.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
            Currently a Junior at Michigan State University. I love to code, and to explore new things about coding. I have gained experience in programming 
            languages such as Python, C++, and JavaScript through both my university course curriculum and self-learning. I believe in hands-on learning, so 
            I love to make projects with the skills I learn!
        </p>
      </div>
    </div>
  );
};

export default Home;