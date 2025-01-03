import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>eduway</h1>
        <p className={styles.description}>
          Education website
          <br />
          Welcome to the career exploration portal
        </p>
      </div>

      <img
        src="/assets/hero/hero2.png" // Correct path for assets in the public folder
        alt="hero img of me"
        className={styles.heroImg}
      />
    </section>
  );
};

export default Hero;
