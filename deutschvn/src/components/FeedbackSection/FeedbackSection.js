import React from "react";
import styles from "./FeedbackSection.module.css";

const FeedbackSection = ({ feedbacks }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Lời động viên của mọi người….</h2>
      <div className={styles.grid}>
        {feedbacks.map((feedback, index) => (
          <div key={index} className={styles.card}>
            <p className={styles.message}>{feedback.message}</p>
            <div className={styles.userInfo}>
              <img src={feedback.avatar} alt={feedback.name} className={styles.avatar} />
              <div>
                <p className={styles.name}>{feedback.name}</p>
                <p className={styles.description}>{feedback.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSection;
