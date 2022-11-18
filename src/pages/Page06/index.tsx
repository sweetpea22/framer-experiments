import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './index.scss';

export const Page06 = () => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  let background = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className='page6'>
      <div ref={ref} className='page6-section1'>
        <motion.div style={{ y: background }}>
          <img src='bg.png' alt='' />
        </motion.div>
      </div>
      <div className='page-hero'>
        <h1>LIVINGBAI GEISTIGNICHT 3.12.2023</h1>
      </div>
      <div className='page-grid'>
        <div className='grid-item'>
          <div className='box'></div>
          <h1>VAGNONI 11.2022</h1>
        </div>
        <div className='grid-item'>
          <div className='box'></div>
          <h1>VAGNONI 11.2022</h1>
        </div>
        <div className='grid-item'>
          <div className='box'></div>
          <h1>VAGNONI 11.2022</h1>
        </div>
        <div className='grid-item'>
          <div className='box'></div>
          <h1>VAGNONI 11.2022</h1>
        </div>
        <div className='grid-item'>
          <div className='box'></div>
          <h1>VAGNONI 11.2022</h1>
        </div>
        <div className='grid-item'>
          <div className='box'></div>
          <h1>VAGNONI 11.2022</h1>
        </div>
        <div className='grid-item'>
          <div className='box'></div>
          <h1>VAGNONI 11.2022</h1>
        </div>
      </div>
    </div>
  );
};
