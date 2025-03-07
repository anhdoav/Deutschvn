import React from "react";
import FounderProfile from "@site/src/components/FounderProfile/FounderProfile";
import styles from "@site/src/components/FounderProfile/FounderProfile.module.css";
import Layout from '@theme/Layout';

const App = () => {
    return (
        <Layout>
            <div>
                <div className={styles.founderSection}>
                    {/* Tiêu đề chung */}
                    <section className={styles.founderHeader}>
                        <h1 className={styles.title}>Liên hệ với đội ngũ của chúng tôi</h1>
                    </section>
                    <p>
                        Nhận trợ giúp về giá cả và các gói dịch vụ, lên lịch trình diễn thử, khám phá các trường hợp sử dụng cho đội ngũ của bạn, và nhiều hơn nữa.
                    </p>
                    <p>
                        Để được hỗ trợ kỹ thuật hoặc sản phẩm, hãy gửi email cho chúng tôi tại team@deutsch.vn
                    </p>
                </div>
            </div>
            <div className={styles.founderSection}>
                <form name="contact" method="POST" data-netlify="true">
                    <p>
                        <label>Họ tên: <input type="text" name="name" /></label>
                    </p>
                    <p>
                        <label>Email: <input type="email" name="email" /></label>
                    </p>
                    <p>
                        <label>Công việc: <input type="text" name="position" /></label>
                    </p>
                    <p>
                        <label>Tên công ty: <input type="text" name="company" /></label>
                    </p>
                    <p>
                        <label>Quy mô công ty: <select name="size">
                            <option value="10">1-10</option>
                            <option value="50">11-50</option>
                            <option value="50">51-200</option>
                        </select></label>
                    </p>
                     
                    <p>
                        <label>Thành phố: <input type="text" name="city" /></label>
                    </p>
                    <p>
                        <label>Số điện thoại: <input type="tel" name="phone" /></label>
                    </p>

                    <p>
                        <label>Quy mô công ty: <input type="" name="company" /></label>
                    </p>
                    <p>
                        <label>Bạn muốn liên hệ vấn đề gì: <select name="topic[]" multiple>
                            <option value="Marketing">Marketing</option>
                            <option value="Colab">Hợp tác</option>
                        </select></label>
                    </p>
                    
                    <p>
                        <label>Vấn đề cụ thể: <textarea name="message"></textarea></label>
                    </p>
                    <p>
                        <label><input type="checkbox" name="consent"/>Tôi đồng ý để Deutsch.vn gửi thông tin tiếp thị về Deutsch.vn (optional)</label>                        
                    </p> 
                    <p>
                        <button type="submit">Contact Sales</button>
                    </p>
                </form>
            </div>
        </Layout>
    );
};

export default App;
