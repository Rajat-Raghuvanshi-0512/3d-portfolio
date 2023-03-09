import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { code, github } from "../assets";
import SectionWrapper from "./HOC/SectionWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { ProjectCardType } from "../utils/types";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_url,
}: ProjectCardType) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full h-[450px]">
        <div className="relative w-full h-[200px] overflow-clip rounded-lg flex justify-center items-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            src={image}
            typeof="video/mp4"
            className="w-full h-[160px] object-contain bg-gray-200 rounded"
          />

          <div className="absolute hover:bg-[rgba(0,0,0,0.4)] w-full h-full top-0 left-0 flex items-center justify-center gap-5 duration-300 opacity-0 hover:opacity-100">
            <a
              className="hover:opacity-100 hover:scale-75 duration-300"
              href={source_code_link}
              target="_blank"
              rel="noreferrer noopener"
              title="View code"
            >
              <img
                src={github}
                alt="github"
                className="w-10 h-10 rounded-full text-white bg-[rgba(0,0,0,0.4)] p-2"
              />
            </a>
            <a
              className="hover:opacity-100 hover:scale-75 duration-300"
              href={live_url}
              target="_blank"
              rel="noreferrer noopener"
              title="View site"
            >
              <img
                src={code}
                alt="github"
                className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.5)] p-2"
              />
            </a>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[12px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[13px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="my-20  flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
