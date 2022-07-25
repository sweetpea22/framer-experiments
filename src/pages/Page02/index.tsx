import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion';

import './index.scss';

export const Page02 = () => {

  return (
    <div className='wrapper'>
      <div className='parallax'>
        <div className='mask'>
        </div>
          <span className='headline'>
            Horus is a suite of cross-chain developer tools.
          </span>
      </div>
      <div className='content'>
        <p>Horus is a flexible, modular library that  allows developers to easily query and broadcast to multiple chains through a single interface. By normalizing data returned from the different chains, it simplifies the development process.</p>
        <div className='second'>
         <p>Address the painpoints brought about by trusted systems and enable peer-to-peer transactions by removing themselves out of the equation.</p>
         <p>Or reincarnate intermediation and lose the benefits of consensus-based networks</p>
         <p>The choice is yours.</p>

        </div>
      </div>
    </div>
  )
}