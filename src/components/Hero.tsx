import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const toRotate = [
  "Web Developer",
  "UI/UX Designer",
  "Blockchain Developer",
  "App Developer",
];

const Hero = () => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const tick = useCallback(() => {
    let i = count % toRotate.length;
    let fulllength = toRotate[i];
    let updatedText = isDeleting
      ? fulllength.substring(0, text.length - 1)
      : fulllength.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && text === fulllength) {
      setIsDeleting(true);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setCount((prev) => prev + 1);
    }
  }, [text, count, isDeleting]);

  useEffect(() => {
    const tickInterval = setInterval(() => {
      tick();
    }, 100);
    return () => clearInterval(tickInterval);
  }, [text, tick]);
  return (
    <section className={`relative w-full h-[110vh] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rotate-45 bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            👋Hi, I'm <span className="text-[#915EFF]">Rajat</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 pl-10 text-white-100`}>
            🚀I am a <span>{text}❗</span>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-16 bottom-24 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
