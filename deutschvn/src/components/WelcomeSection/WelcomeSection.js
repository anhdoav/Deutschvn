import React from "react";
import styles from "./WelcomeSection.module.css";

const WelcomeSection = ({ title, description, buttonText, highlights, backgroundImage }) => {
  return (
    <div className={styles.heroSection} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.overlay}></div> {/* Lớp phủ giúp chữ dễ đọc hơn */}
      <div className={styles.content}>
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
      </div>
    </div>
  );
};

export default WelcomeSection;
