import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { trunk_details } from '../assets';
import { Tilt } from 'react-tilt';

const Experience = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-10 pt-10'>
      <motion.div variants={textVariant()}>
        <h1 className={`${styles.sectionHeadText} text-white`}>
          Work Experience
        </h1>
      </motion.div>
      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <h2 className="mt-4 text-secondary text-center text-[26px] max-w-3xl leading-[30px] text-balance">
          As a SWE at Genesys I developed and tested a debugging microservice for the Genesys Cloud Voice team. The service extracts details pertaining to an organization's number trunk prefixes and displays them under the Supportability service webpage.
        </h2>
      </motion.div>
      <Tilt>
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
        >
          <div className="bg-tertiary p-5 rounded-2xl flex sm:flex-row flex-col justify-center items-center sm:w-[1200px] w-full mt-10"> {/* Increased width */}
            <div className='flex-1 flex flex-col justify-center items-start sm:w-1/2'>
              <p className="text-secondary text-[18px] leading-[30px] text-left">
                These essential trunk features were previously available only through robust API calls. There was a need for extracting trunk details and displaying them in a simple, easy-to-access webpage. The project utilizes Java Spring Boot to build endpoints that will receive API responses, and the Ember.js framework along with HTML and CSS to display the stored information.
              </p>
            </div>
            <div className='flex-1 flex justify-center items-center sm:w-1/2'>
              <img
                src={trunk_details}
                alt="Trunks Details"
                className='w-full h-auto object-contain rounded-2xl'
              />
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default Experience;
