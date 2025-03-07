import React from "react";
import styles from "./CommunitySection.module.css";

const CommunitySection = ({ title, content }) => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>{title}</h2>
        </div>
        <div className={styles.right}>
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
