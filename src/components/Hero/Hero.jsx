import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm SAJAL</h1>
        <p className={styles.description}>
           I'm a full-stack developer with 2 years of experience using React and
          NodeJS also have good knowledge of blockchain and has experience in developing different Smartcontracts
           Reach out if you'd like to learn more!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
        wizardry

        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage2.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
