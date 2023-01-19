'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText, WorldCard } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        )}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h0 text-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute lg:bottom-[150px] lg:right-[160px] bottom-[10%] right-[10%] w-[40px] h-[40px] p-[4px] lg:w-[70px] lg:h-[70px] lg:p-[7px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute lg:top-[50px] lg:left-[140px] top-[2%] left-[5%] w-[40px] h-[40px] p-[4px] lg:w-[70px] lg:h-[70px] lg:p-[7px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute lg:top-[270px] lg:left-[660px] top-[40%] left-[45%] w-[40px] h-[40px] p-[4px] lg:w-[70px] lg:h-[70px] lg:p-[7px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <motion.div variants={fadeIn('up', 'tween', 0.5, 1.6)} className="absolute lg:bottom-[210px] bottom-[25%] left-[15%] lg:left-[250px]">
          <WorldCard
            imgUrl="/the-upside-down.png"
            amountJoined="264"
            title="The Upside Down"
            className="w-full h-full"
          />
        </motion.div>
        <motion.div variants={fadeIn('down', 'tween', 0.5, 1.8)} className="absolute lg:bottom-[400px] bottom-[60%] left-[60%] lg:left-[890px]">
          <WorldCard
            imgUrl="/hawkins-lab.png"
            amountJoined="264"
            title="Hawkins Labs"
            className="w-full h-full"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
