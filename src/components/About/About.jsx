import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { Skills } from "./Skills";

export const About = () => {
  return (
    <section id="about">
      <div className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>I'm <span className={styles.spanText}>Nishanth </span>from Erode,Tamilnadu,India. I specialize in 
                   developing <span className={styles.spanText}>Flutter apps</span> and <span className={styles.spanText}>Full Stack Website</span> 
                   and have worked on numerous projects in this field.</p>
                   <br />
                   <p>
                   As a Student , I am actively seeking opportunities in the field of Computer Science. Over the years, I have participated in various <span class={styles.spanText}>hackathons</span> and <span class={styles.spanText}>workshops</span>, where I have achieved and expanded my 
                      knowledge of different technologies.
                  </p>
                  <br />
                  <p>
                      Thank you for visiting my portfolio, and I'm excited to share my skills and 
                      experiences with you!
                  </p>
            </div>
          </li>
        </ul>
      </div>
      </div>
      <Skills />
    </section>
  );
};