import React, { useState, useEffect } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion';
import { IOffsetHeight, useOffsetHeight } from '../../components/useOffsetHeight';
import './index.scss';

export const Page01 = () => {

  const [height, setHeight] = useState<IOffsetHeight>({
    offsetHeight: 0
  });

  const { offsetHeight } = useOffsetHeight();

  useEffect(() => {
    setHeight({offsetHeight})
  }, [offsetHeight])

  // const mask = {
  //   open: (height = 0) => {
  //     clipPath: `inset(calc(100% - ${height}px) 0px 0px)`
  //   },
  // }

  return (
    <div className='wrapper'>
      <div className='homepage' >
      <motion.img custom={height} style={{clipPath: `inset(calc(100vh -${height}px) 0px 0px)`}} src="/s1.png" />
      </div>
    </div>
  )
}