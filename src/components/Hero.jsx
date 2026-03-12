import React from 'react';
import { styles } from '../styles';
import { natalia_profile } from '../assets';

const Hero = () => {
  return (
    <section className="relative w-full h-full mx-auto">
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto pt-40 flex items-start gap-2 sm:gap-6`}
      >
        <div className="flex flex-col justify-center items-center mt-5 flex-shrink-0">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#93278f]" />
          <div className="w-1 h-24 sm:h-80 violet-gradient" />
        </div>

        <div className="w-[62%] sm:flex-1 min-w-0">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi! I'm <span className="text-[#93278f]">Natalia Ramirez</span>
          </h1>
          <h2 className={`${styles.heroSubText} text-white mt-5`}>
            Full-stack Software Engineer at Genesys, building scalable,
            partner-facing systems for large-scale cloud platforms.
          </h2>
          <h2 className={`${styles.heroSubText} text-white mt-5 pb-12`}>
            I am passionate about Operating Systems, Distributed Systems, and
            Machine Learning. I enjoy painting and running!
          </h2>
        </div>

        <div className="w-[28%] sm:w-auto flex justify-start sm:block mt-6 sm:mt-2 self-start">
          <img
            src={natalia_profile}
            alt="Natalia Ramirez"
            className="w-24 h-24 xs:w-28 xs:h-28 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;