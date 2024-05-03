import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/front.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
               I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/backend.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/solidity.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Smart Contract Developer</h3>
              <p>
              I have experience in designing ,developing  and deploying  smart contracts on various blockchain platforms. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/blo.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Blockchain Implementation</h3>
              <p>
              I have a good understanding of the architecture and protocols of the technology and
              possess specialized knowledge and skills in developing, implementing, and managing Blockchain technology
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/promp.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Prompt Engineering</h3>
              <p>
                I have experience in designing, developing and refining AI-generated text prompts, optimizing prompt performance, and improving the AI prompt generation process for various applications.
                
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/bit.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Cryptoanalytics</h3>
              <p>
                I have experience in analyzing trends and pricing of different cryptocurrencies available and using that information to trade effectively
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
