import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
          <h1>FIND ME ON</h1>
          <p>Feel Free to connect with me</p>
        </div>
        <ul className={styles.links}>
        <li className={styles.link}>
              <a
                href="https://github.com/NishanthIlango"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
        </li>
        <li  className={styles.link}>
              <a
              href="https://x.com/nishanthI196752"

                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li  className={styles.link}>
              <a
                href="https://www.linkedin.com/in/nishanth-i-095858227/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li  className={styles.link}>
              <a
                href="https://www.instagram.com/neymarjr_nishanth"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
        </ul>
    </footer>
  );
};