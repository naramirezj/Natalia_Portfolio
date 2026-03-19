import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon, description }) => {
  return (
    <Tilt className="xs:w-[220px] sm:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card h-full"
      >
        <div
          className="
            bg-tertiary rounded-[20px]
            px-3 py-4
            xs:px-4 xs:py-4
            sm:px-5 sm:py-5
            min-h-[190px]
            xs:min-h-[220px]
            sm:min-h-[280px]
            flex justify-start sm:justify-evenly items-center flex-col
          "
        >
          <img
            src={icon}
            alt={title}
            className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 object-contain"
          />

          <h3 className="text-white text-[15px] xs:text-[16px] sm:text-[20px] font-bold text-center mt-3">
            {title}
          </h3>

          <p className="mt-3 text-secondary text-[12px] xs:text-[13px] sm:text-[15px] text-center leading-[20px] xs:leading-[22px] sm:leading-[30px]">
            {description}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 pt-10 px-4 sm:px-6">
      <motion.div variants={textVariant()}>
        <h1 className={`${styles.sectionHeadText} text-white`}>
          Skills
        </h1>
      </motion.div>

      <motion.div variants={fadeIn('', '', 0.1, 1)}>
        <h2 className="mt-4 text-secondary text-center text-[18px] sm:text-[22px] lg:text-[26px] max-w-3xl leading-[28px] sm:leading-[30px]">
          I build microservices with Java Spring Boot and Ember.js, along with
          technologies like Docker, Maven, AWS, and TypeScript. Additionally, I
          have previous experience with Mobile Software Development, Machine
          Learning Models, Neural Network construction, and Computer Graphics in
          Kotlin.
        </h2>
      </motion.div>

      <div className="mt-12 sm:mt-20 flex flex-wrap gap-4 sm:gap-10 justify-center items-stretch pb-12 w-full">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;