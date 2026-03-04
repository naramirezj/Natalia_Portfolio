import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { natalia_profile } from '../assets';

const Hero = () => {
  return (
    <section className='relative w-full h-full mx-auto'>
  <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-6 pt-40`}> {/* Stack on small screens; row on sm+; center items on mobile */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#93278f]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className='flex-1'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi! I'm <span className='text-[#93278f]'>Natalia Ramirez</span>
          </h1>
          <h2 className={`${styles.heroSubText} text-white mt-5`}>
            Full-stack Software Engineer at Genesys, building scalable, partner-facing systems for large-scale cloud platforms.
          </h2>
          <h2 className={`${styles.heroSubText} text-white mt-5 pb-12`}>
            I am passionate about Operating Systems, Distributed Systems, and Machine Learning.
            I enjoy painting and running!
          </h2>
        </div>
        <div className='flex-shrink-0 mt-6 ml-0 sm:ml-2 sm:mt-6 mx-auto sm:mx-0'>
          <img
            src={natalia_profile}
            alt="Natalia Ramirez"
            className='w-28 h-28 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full object-cover'
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
