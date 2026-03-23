import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { trunk_details, globaldb } from '../assets';
import { Tilt } from 'react-tilt';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Genesys',
    period: '2025 - Present',
    description:
      'Design and develop full-stack telephony features for a 2M+ user cloud communications platform supporting global call management services and partner integrations.',
    bullets: [
      'Implement disaster recovery operations, enabling phone number rerouting across 15 AWS deployment regions through Lambda streams for DynamoDB global tables and Kafka consumers.',
      'Delivered a 20ms-latency real-time metrics pipeline by implementing Redis Lua scripts and redesigning Kafka ingestion processes with multi-threading parallelization and SQL high throughputs.',
      'Led development of a partner-facing Microsoft Teams authentication integration that automated trunk domain verification via temporary DNS TXT/A records, reducing manual configuration and enabling faster third-party onboarding.',
    ],
    image: globaldb,
  },
  {
    title: 'Associate Software Engineer',
    company: 'Genesys',
    period: '2024 - 2025',
    description:
      'Contributed to cloud voice tooling and backend systems, supporting feature delivery and production reliability.',
    bullets: [
      'Helped design and implement internal tools for debugging and support engineering use cases.',
      'Gained experience with microservices, deployment workflows, testing, and production systems.',
      'Collaborated across engineering teams to improve clarity and access to service data in an internal website.',
    ],
    image: trunk_details,
  }
];

const ExperienceCard = ({
  index,
  title,
  company,
  period,
  description,
  bullets,
  image,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', 0.2 * index, 0.75)}>
      <Tilt
        options={{
          max: 10,
          scale: 1,
          speed: 450,
        }}
        className="w-full"
      >
        <div className="bg-tertiary p-5 sm:p-6 rounded-2xl w-full">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-white font-bold text-[22px] sm:text-[26px]">
                    {title}
                  </h3>
                  <p className="text-[#93278f] font-semibold text-[16px] sm:text-[18px] mt-1">
                    {company}
                  </p>
                </div>

                <p className="text-secondary text-[14px] sm:text-[16px]">
                  {period}
                </p>
              </div>

              <p className="mt-4 text-secondary text-[15px] sm:text-[17px] leading-[26px]">
                {description}
              </p>

              <ul className="mt-4 space-y-3">
                {bullets.map((bullet, bulletIndex) => (
                  <li
                    key={bulletIndex}
                    className="text-white text-[14px] sm:text-[16px] leading-[24px] flex gap-3"
                  >
                    <span className="text-[#93278f] mt-[2px]">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {image && (
              <div className="w-full lg:w-[340px] flex-shrink-0">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-[220px] object-cover rounded-2xl"
                />
              </div>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16 mt-10 pt-10 px-6">
      <motion.div variants={textVariant()}>
        <h1 className={`${styles.sectionHeadText} text-white`}>
          Work Experience
        </h1>
      </motion.div>

      <motion.div variants={fadeIn('', '', 0.1, 1)}>
        <h2 className="mt-4 text-secondary text-center text-[18px] sm:text-[22px] lg:text-[26px] max-w-4xl leading-[30px]">
          My experience combines backend engineering, cloud systems, internal
          tooling, and machine learning-driven project work, with a focus on
          building scalable and practical solutions.
        </h2>
      </motion.div>

      <div className="mt-14 flex flex-col gap-8 w-full max-w-6xl">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`${experience.title}-${index}`}
            index={index}
            {...experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;