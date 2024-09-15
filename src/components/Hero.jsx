import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { natalia_profile } from '../assets';

const Hero = () => {
  return (
    <section className='relative w-full h-full mx-auto'>
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start gap-6 pt-40`}> {/* Increased gap and padding-top */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#93278f]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className='flex-1'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi! I'm <span className='text-[#93278f]'>Natalia Ramirez</span>
          </h1>
          <h2 className={`${styles.heroSubText} text-white mt-5`}>
            Full-time Associate Software Engineer at Genesys. Graduated as a Computer Scientist from Grinnell College in May 2024. <br />
          </h2>
          <h2 className={`${styles.heroSubText} text-white mt-5 pb-12`}>
            I am passionate about Operating Systems, Computer Graphics, and Machine Learning.
            I enjoy painting and biking!
          </h2>
        </div>
        <div className='flex-shrink-0 mt-6 ml-2'>
        <img src={natalia_profile} alt="Natalia Ramirez" className='w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full object-cover' />
      </div>
      </div>
    </section>
  );
}

export default Hero;
