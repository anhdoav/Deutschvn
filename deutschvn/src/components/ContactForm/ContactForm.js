import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ image, name, role, bio }) => (
  <section className={styles.section}>
    <div className={styles.founderHeader}>
      <h1 className={styles.title}>Liên hệ với đội ngũ của chúng tôi</h1>
    </div>
    <section className={styles.contactSection}>
      <div className={styles.contactLeft}>
        <div>
          Nhận trợ giúp về giá cả và các gói dịch vụ, lên lịch trình diễn thử, khám phá các trường hợp sử dụng cho đội ngũ của bạn, và nhiều hơn nữa.
        </div>
        <div>
          Để được hỗ trợ kỹ thuật hoặc sản phẩm, hãy gửi email cho chúng tôi tại team@deutsch.vn
        </div>
      </div>
      <div className={styles.contactRight}>
        <form name="contact" method="POST" data-netlify="true">
          <div className={styles.formGroup}>
            <label>Họ tên: </label>
            <input type="text" name="name" />
          </div>
          <div className={styles.formGroup}>
            <label>Email: </label>
            <input type="email" name="email" />
          </div>
          <div className={styles.formGroup}>
            <label>Công việc: </label>
            <input type="text" name="position" />
          </div>
          <div className={styles.formGroup}>
            <label>Tên công ty: </label>
            <input type="text" name="company" />
          </div>
          <div className={styles.formGroup}>
            <label>Quy mô công ty: </label>
            <select name="size" style={{ width: '100%' }}>
              <option value="10">1-10</option>
              <option value="50">11-50</option>
              <option value="50">51-200</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Thành phố: </label>
            <input type="text" name="city" />
          </div>
          <div className={styles.formGroup}>
            <label>Số điện thoại: </label>
            <input type="tel" name="phone" />
          </div>
          <div className={styles.formGroup}>
            <label>Bạn muốn liên hệ vấn đề gì: </label>
            <select name="topic" style={{ width: '100%' }}>
              <option value="Marketing">Marketing</option>
              <option value="Colab">Hợp tác</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Vấn đề cụ thể: </label>
            <textarea name="message"></textarea>
          </div>
          <div className={styles.formGroup}>
            <label style={{display:'inline-flex', width:'100%', height:'20px'}}>
              <input type="checkbox" name="consent" style={{width: 'auto'}}/>
              Tôi đồng ý gửi thông tin
            </label>
          </div>
          <div className={styles.formGroup}>
            <button type="submit">Gửi thông tin</button>
          </div>
        </form>
      </div>
    </section>
  </section>
);

export default ContactForm;
