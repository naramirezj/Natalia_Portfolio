import React from 'react';

import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles'
import { projects, services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { github, linkedin } from '../assets';

const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-10 pt-10'>
      <motion.div variants={textVariant()}>
        <h1 className={`${styles.heroHeadText} text-white`}>
          Contact
        </h1>
      </motion.div>
      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <p className={`${styles.heroSubText} text-white`}>
          naramirezjim@gmail.com
        </p>
      </motion.div>
      <div className='flex mt-10 gap-10 pb-24'>
        <a href="https://www.linkedin.com/in/natalia-ramirez-jimenez-475931216/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className='w-16 h-16 object-contain' />
        </a>
        <a href="https://github.com/naramirezj" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className='w-16 h-16 object-contain' />
        </a>
      </div>
    </div>
  );
}

export default Contact;