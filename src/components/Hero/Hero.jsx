import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import pdf from "../../../assets/resume/Nishanth I_Resume.pdf"

export const Hero = () => {
  return (
    <section className={styles.container} id="hero">
      <div className={styles.content}>
        <h1 className={styles.title}>Hi There!</h1>
        <h1 className={styles.title2}>I'm Nishanth</h1>
        <p className={styles.description}>
          Full Stack and Flutter Developer
        </p>
        <div className={styles.buttons}>
        <a href="mailto:nishant.jcs@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href={pdf} className={styles.cvBtn}>
          Download Resume
        </a>
        </div>
      </div>
      <img
        src={getImageUrl("about/aboutPage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};