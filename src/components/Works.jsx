import React from 'react';

import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles'
import { projects, services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { github } from '../assets';

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return(
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div
        className='relative w-full flex flex-wrap h-[250px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div onClick={() => window.open(source_code_link, "_blank")} 
                 className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointed'
            >
              <img 
              src={github}
              alt="github"
              className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-whote font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[20px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center mt-10 pt-10'>
      <motion.div variants={textVariant()}>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Projects
          </h1>
        </motion.div>
      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <h2 className="mt-4 text-secondary text-center text-[26px] max-w-3xl leading-[30px] text-balance">
            These are some of the projects I have worked on throughout college. <span className='font-bold'>Click on the Github icon to see the app or source code.</span>
        </h2>
      </motion.div>
      <div
      className='mt-20 flex flex-wrap gap-7 justify-center md-18'>
        {projects.map((project, index) => (
          <ProjectCard 
          key={`project-${index}`}
          index={index}
          {...project}
          />
        ))}
      </div>
    </div>
  </>
  )
}

export default Works