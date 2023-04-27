import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { services } from '../constants';
import SectionWrapper from './HOC/SectionWrapper';
import { ServiceCardType } from '../utils/types';

const ServiceCard = ({ index, icon, title }: ServiceCardType) => {
  return (
    <div className="xs:w-[230px] w-full mx-auto floating">
      <div className="w-full green-pink-gradient p-1 rounded-[20px] shadow-card">
        <div className="py-5 px-12 bg-tertiary rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-20 h-20" />
          <h3 className="text-white text-center text-xl">{title}</h3>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <motion.div variants={textVariant(0.2)}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
      <motion.p className="text-secondary text-[16px] max-w-4xl">
        Creative web developer with experience in building, optimizing and
        maintaining the performance of user centric websites. Clear
        understanding of modern technologies and best design practices. An
        ambitious problem solver willing to join a team of like-minded people
      </motion.p>
      <div className="flex my-20 flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            icon={service.icon}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(About, 'about');
