import React from 'react';
import styles from './IntroductionSection.module.css';

const IntroductionSection = ({
  title = "Tiêu đề",
  subtitle = "Nội dung giới thiệu",
  titleFontSize = "2rem",
  subtitleFontSize = "1.2rem",
  titleColor = "#000000",
  subtitleColor = "#555555",
}) => {
  return (
    <section className={styles.introductionSection} style={{textAlign: 'center',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      maxWidth: '1200px',
      margin: '20px auto',}}>
      <div className={styles.header}>
        <h2 style={{ fontSize: titleFontSize, color: titleColor }}>{title}</h2>
        <div
          style={{
            fontSize: subtitleFontSize,
            color: subtitleColor,
            lineHeight: "1.6",
          }}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        ></div>
      </div>
    </section>
  );
};

export default IntroductionSection;
