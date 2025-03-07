import React from "react";
import styles from "./WelcomeSection.module.css";

const WelcomeSection = ({ title, description, buttonText, highlights, backgroundImage }) => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.textContainer}>
        <h1>{title}</h1>
        <p>{description}</p>
        {buttonText && <button className={styles.button}>{buttonText}</button>}
        <div className={styles.icons}>
          {highlights &&
            highlights.map((item, index) => (
              <div key={index} className={styles.iconItem}>
                <img src={item.icon} alt={item.title} />
                <span>{item.title}</span>
              </div>
            ))}
        </div>
      </div>
      <div>
        <img src="/img/01.jpg" className={styles.backgroundImage}/>
      </div>
    </div>
  );
};

export default WelcomeSection;
