import React, { useState } from 'react';
import styles from './FAQSection.module.css'; // Import CSS module
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome for icons

const FAQSection = ({ faqData = [] }) => { // Đổi tên prop thành `faqData` để khớp với phần Home
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle trạng thái active
  };

  if (!faqData.length) {
    return (
      <section className={styles.faqSection} id="faq">
        <h2 className={styles.sectionTitle}>Câu Hỏi Thường Gặp</h2>
        <p className={styles.noFaqs}>Hiện không có câu hỏi nào được cung cấp.</p>
      </section>
    );
  }

  return (
    <section className={styles.faqSection} id="faq">
      <h2 className={styles.sectionTitle}>Câu Hỏi Thường Gặp</h2>
      <div className={styles.faqWrapper}>
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
          >
            <div
              className={styles.faqQuestion}
              onClick={() => toggleFAQ(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && toggleFAQ(index)}
            >
              <h3>{faq.question}</h3>
              <i
                className={`fas ${
                  activeIndex === index ? 'fa-minus' : 'fa-plus'
                } ${styles.icon}`}
              ></i>
            </div>
            {activeIndex === index && (
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
