import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { github } from '../assets';

const ProjectCard = ({
  index,  
  isLast,
  isOdd,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className={`
        ${isLast && isOdd ? "lg:col-span-2 flex justify-center" : ""}
      `}
    >
      <Tilt
        options={{ max: 12, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 sm:p-6 rounded-2xl w-full max-w-[720px]"
      >
        <div className="flex flex-col lg:flex-row gap-4 items-start h-full">
          {/* Left side: text */}
          <div className="flex-1 w-full">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-white font-bold text-[20px] sm:text-[22px] leading-tight">
                {name}
              </h3>

              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer flex-shrink-0"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <p className="mt-3 text-secondary text-[14px] sm:text-[15px] leading-[24px]">
              {description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[13px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>

          {/* Right side: image */}
          <div className="w-full lg:w-[180px] flex-shrink-0">
            <img
              src={image}
              alt={name}
              className="w-full h-[160px] lg:h-[180px] object-cover rounded-xl place-self-center"
            />
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10 pt-10 py-16 px-6">
        <motion.div variants={textVariant()}>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Projects
          </h1>
        </motion.div>

        <motion.div variants={fadeIn("", "", 0.1, 1)}>
          <h2 className="mt-4 text-secondary text-center text-[26px] max-w-3xl leading-[30px] text-balance">
            These are some of the projects I have worked on.{" "}
            <span className="font-bold">
              Click on the Github icon to see the app or source code.
            </span>
          </h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-7xl">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              isLast={index === projects.length - 1}
              isOdd={projects.length % 2 !== 0}
              {...project}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Works;