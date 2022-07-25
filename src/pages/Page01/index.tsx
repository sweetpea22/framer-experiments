import React, { useRef } from 'react'
import {motion, useScroll} from 'framer-motion';
import './index.scss';

export const Page01 = () => {

  const s2Ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: s2Ref,
    offset: ["end end", "start end"]
  });

  return (
    <main>
      <div className='wrapper'>
      <div className='homepage'>
        <div className='s1'>
          <h1>Hello</h1>  
        </div>
        <div className='s2'></div>
      </div>
      </div>
    </main>
  )
}