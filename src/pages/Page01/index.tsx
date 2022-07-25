import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion';
import './index.scss';

export const Page01 = () => {

  return (
    <div className='wrapper'>
      <div className='homepage'>
        <h1>Lodestar</h1>  
        <div className='mask'></div>
      </div>
    </div>
  )
}