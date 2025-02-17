import React, { useEffect, useRef } from 'react';
import styles from './PureHero.module.css';

const PureHero = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink,
  titleColor = "#ffffff",
  subtitleColor = "#f0f0f0",
  buttonColor = "#ffffff",
  navColor = "#ffffff",
  overlayColor = "rgba(0, 0, 0, 1)",
  overlayOpacity = 0.4,
  contentWidth = "50%",
  contentPosition = "center",
  horizontalPosition = "5vw",
  verticalPosition = "2vh",
  logoSrc = "img/avt.jpeg",
  logoLink = "#home",
}) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef?.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navAlignmentClass =
    contentPosition === 'left' ? styles.navLeft :
    contentPosition === 'right' ? styles.navRight :
    styles.navCenter;

  const contentAlignmentClass =
    contentPosition === 'left' ? styles.contentLeft :
    contentPosition === 'right' ? styles.contentRight :
    styles.contentCenter;

  const contentStyle = {
    maxWidth: contentWidth,
    color: titleColor,
    ...(contentPosition === 'left' && { textAlign: 'left', marginLeft: horizontalPosition }),
    ...(contentPosition === 'right' && { textAlign: 'right', marginRight: horizontalPosition }),
    ...(contentPosition === 'center' && { textAlign: 'center', marginTop: verticalPosition }),
  };

  return (
    <section
      className={styles.heroWrapper}
      ref={heroRef}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div
        className={styles.overlay}
        style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}
      ></div>

      <div className={`${styles.content} ${contentAlignmentClass}`} style={contentStyle}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle} style={{ color: subtitleColor }}>{subtitle}</p>
        {buttonText && (
          <a
            href={buttonLink}
            className={styles.heroButton}
            style={{
              color: buttonColor,
              borderColor: buttonColor,
            }}
            target={buttonLink.startsWith('http') ? "_blank" : "_self"}
            rel={buttonLink.startsWith('http') ? "noopener noreferrer" : ""}
          >
            {buttonText}
          </a>
        )}
      </div>

      <div className={styles.scrollHint} style={{ borderColor: navColor }}></div>
    </section>
  );
};

export default PureHero;
