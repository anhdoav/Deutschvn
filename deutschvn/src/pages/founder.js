import React from "react";
import FounderProfile from "@site/src/components/FounderProfile/FounderProfile";
import styles from "@site/src/components/FounderProfile/FounderProfile.module.css";
import Layout from '@theme/Layout';

const App = () => {
  return (
    <Layout>
      <div className={styles.founderSection}>
        {/* Tiêu đề chung */}
        <section className={styles.founderHeader}>
          <p className={styles.subtitle}>Über Uns</p>
          <h1 className={styles.title}>Deutsch.vn được tạo ra bởi...</h1>
        </section>

        {/* Founder Profile 1 */}
        <FounderProfile
          image="/img/22.jpg"
          name="Khoa Võ"
          role="Founder"
          bio="Mình phụ trách nội dung, thiết kế và chiến lược marketing.
        Mình đã khởi nghiệp được hơn 5 năm với rất nhiều dự án. Trong quá trình khởi nghiệp, mình đã học rất nhiều chứng chỉ về nghiệp vụ kế toán và quản trị.
        Qua quá làm hồ sơ đi du học, mình nhận ra rằng thị trường du học đang tồn tại rất nhiều rủi ro, và những rủi ro này đều đổ dồn về phía người sử dụng dịch vụ. Mình hiểu rất rõ nguồn gốc cũng như nguyên nhân của những rủi ro đó. Chính vì vậy, mình muốn tạo ra một giải pháp có thể giúp bảo vệ quyền lợi của người sử dụng dịch vụ trong lĩnh vực này."
          highlights={[
            { title: "5 Năm Khởi Nghiệp", description: "Kinh nghiệm phát triển dự án." },
            { title: "Xây Dựng Cộng Đồng", description: "Sáng lập cộng đồng tiếng Đức." },
            { title: "Du Học Sinh", description: "Hiện đang học tại Wien (Áo)." },
          ]}
        />
      </div>
    </Layout>
  );
};

export default App;
