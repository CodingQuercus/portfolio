import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Pixel.module.css';

const anim = {
  initial: {
    opacity: 0,
  },
  open: (i) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.03 * i },
  }),
  closed: (i) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.03 * i },
  }),
};

/*
* All credits for the pixelanimation goes to Olivier Larose
* https://blog.olivierlarose.com/tutorials/pixel-transition
*
*/
export default function PixelBackground({ isTransitioning }) {
  const [blocksPerColumn, setBlocksPerColumn] = useState(0);

  const shuffle = (a) => {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      const blockSize = innerWidth * 0.05;
      const nbOfBlocks = Math.ceil(innerHeight / blockSize);
      setBlocksPerColumn(nbOfBlocks);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getBlocks = () => {
    if (blocksPerColumn === 0) return null;

    const shuffledIndexes = shuffle([...Array(blocksPerColumn)].map((_, i) => i));
    return shuffledIndexes.map((randomIndex, index) => (
      <motion.div
        key={index}
        className={styles.block}
        variants={anim}
        initial="initial"
        animate={isTransitioning ? 'open' : 'closed'}
        custom={randomIndex}
      />
    ));
  };

  return (
    <div className={styles.pixelBackground}>
      {[...Array(20)].map((_, index) => (
        <div key={index} className={styles.column}>
          {getBlocks()}
        </div>
      ))}
    </div>
  );
}
