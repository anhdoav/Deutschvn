import React from 'react';
import styles from './TwoColumnSection2.module.css';

const TwoColumnSection2 = ({ image, altText, heading, description }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Hình ảnh bên trái */}
        <div className={styles.imageWrapper}>
          <img src={image} alt={altText} className={styles.image} />
        </div>

        {/* Văn bản bên phải */}
        <div className={styles.text}>
          <h3 className={styles.heading}>{heading}</h3>
          <p className={styles.description}>
            <b>Giai đoạn 1:</b> Bọn mình xây dựng một nền tảng luyện tiếng Đức miễn phí nhưng thực sự hiệu quả. Dự trên những tài liệu mình có từ nước ngoài (cụ thể là Áo)
            <br />
            <br />
            <b>Giai đoạn 2:</b> Bọn mình sẽ giúp các đơn vị dạy tiếng Đức có tâm phát triển khóa học, đồng thời tạo ra một hệ thống đánh giá minh bạch từ chính học viên.
            <br />
            <br />
            <b>Giai đoạn 3:</b> Bọn mình trở thành một đơn vị kiểm định độc lập, giúp bảo vệ hồ sơ và tài chính của người học trước những rủi ro không đáng có.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnSection2;
