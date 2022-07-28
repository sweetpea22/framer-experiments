import React, { useState, useRef, useEffect } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion';
import { useOffsetHeight } from '../../components/useOffsetHeight';
import './index.scss';

export const Page01 = () => {

  const [height, setHeight] = useState(0);

  const { offsetHeight } = useOffsetHeight();
  console.log(offsetHeight);

  // useEffect(() => {
  //   setHeight()
  // }, [])

  return (
    <div className='wrapper'>
      <div className='homepage'>
        <h1>Lodestar</h1>  
        <div className='mask'></div>
      </div>
    </div>
  )
}