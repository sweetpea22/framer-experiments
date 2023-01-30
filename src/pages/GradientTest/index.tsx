import { animate, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import './index.scss';

export function GradientTest() {
  const gradientRef = useRef<SVGLinearGradientElement>(null!);
  useEffect(() => {
    const gradient = gradientRef.current;
    const controls = animate(0, 90, {
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
      onUpdate: (v) =>
        gradient.setAttribute('gradientTransform', `rotate(${v} 0.5 0.5)`),
    });

    return controls.stop;
  });
  return (
    <div className='App'>
      <svg
        preserveAspectRatio='none'
        viewBox='0 0 100'
        xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <linearGradient id='MyGradient2'>
            <stop offset='50%' stopColor='rgb(13, 20, 13)' />
            <stop offset='95%' stopColor='rgb(180, 255, 95)' />
            <animateTransform
              attributeName='gradientTransform'
              attributeType='XML'
              type='rotate'
              from='0 0.2 0.9'
              to='360 0.5 0.5'
              dur='30s'
              repeatCount='indefinite'
            />
          </linearGradient>
        </defs>

        <rect
          fill='url(#MyGradient2)'
          x='0'
          y='0'
          width='100vw'
          height='100%'
        />
      </svg>
    </div>
    // return (
    //   <motion.div
    //     initial={{
    //       backgroundImage:
    //         'linear-gradient(to right, white, white), linear-gradient(0deg, green, white 40%)',
    //     }}
    //     animate={{
    //       backgroundImage:
    //         'linear-gradient(to right, white, white), linear-gradient(360deg, green, white 40%)',
    //     }}
    //     transition={{
    //       type: 'tween',
    //       ease: 'linear',
    //       duration: 3,
    //       repeat: Infinity,
    //     }}
    //     style={{
    //       border: '2px solid transparent',
    //       borderRadius: '20px',
    //       backgroundClip: 'padding-box, border-box',
    //       backgroundOrigin: 'padding-box, border-box',
    //       width: 160,
    //       height: 40,
    //       display: 'flex',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //     }}>
    //     Button
    //   </motion.div>
  );
}
