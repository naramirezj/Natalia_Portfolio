import React from 'react';

import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles'
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({index, title, icon, description}) =>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          <p className='mt-4 text-secondary text-[15px] text-balance text-center max-w-3xl- leading-[30px]'>{description}</p>
        </div>
      </motion.div>
    </Tilt>
   
  )
}

const Skills = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center mt-10 pt-10'>
      <motion.div variants={textVariant()}>
          <h1 className={`${styles.sectionHeadText} text-white`}>
            Skills
          </h1>
        </motion.div>
      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <h2 className="mt-4 text-secondary text-center text-[26px] max-w-3xl leading-[30px] text-balance">
            I build microservices with Java Spring Boot and Ember.js, along with technologies like Docker, Maven, and AWS. 
            Additionally, I have previous experience with Mobile Software Development, Machine Learning Models, Neural Network construction, 
            and Computer Graphics in Kotlin.
        </h2>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10 justify-center items-center pb-12">
        {services.map((service, index) => (<ServiceCard key={service.title} index={index} {...service}/>))}
      </div>
    </div>
    </>
  );
}

export default Skills;