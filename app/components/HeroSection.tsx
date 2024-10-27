import React from 'react'
import styles from './HeroSection.module.css';

export const HeroSection = () => {
  return (
<section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.box}>Welcome to <span className='font-black text-6xl text-purple-300'>CODE HUB</span></h1>
        <p className={styles.description}> Unlock Your Coding Potential with<span className="font-black text-4xl text-purple-300"> Expert Tutorials, Resources, and Community Support</span></p>
        <button className={styles.cta}>Learn More</button>
        <button className={styles.ctb}>Enroll Now</button>
      </div>
    </section>

  )
};
export default  HeroSection;
