import React from "react";
import styles from "./OpenSourceSection.module.css";

const OpenSourceSection = ({ image, subtitle, title, description }) => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={image} alt="Open Source" />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.subtitle}>{subtitle}</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default OpenSourceSection;
