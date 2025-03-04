import React from "react";
import FounderProfile from "@site/src/components/FounderProfile/FounderProfile";
import styles from "@site/src/components/FounderProfile/FounderProfile.module.css";

const App = () => {
  return (
    <div className={styles.founderSection}>
    {/* Tiêu đề chung */}
    <section className={styles.founderHeader}>
      <p className={styles.subtitle}>Über Uns</p>
      <h1 className={styles.title}>Deutsch.vn được tạo ra bởi...</h1>
    </section>


      {/* Founder Profile 1 */}
      <FounderProfile
        image="/images/22.png"
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

      {/* Founder Profile 2 (Nhân đôi) */}
      <FounderProfile
        image="/images/23.jpeg"
        name="Tuấn Anh Đỗ"
        role="Founder"
        bio="Phụ trách công nghệ và kỹ thuật.
        Với 10 năm kinh nghiệm là lập trình viên tại Microsoft, mình nhận thấy rằng công nghệ thực sự là chìa khóa quan trọng khi nghe Khoa nói về vấn đề của ngành dịch vụ du học.
        Vấn đề này được giải quyết khá hiệu quả tại thị trường Mỹ, nơi họ công khai tất cả các thông tin cần thiết cho học sinh, sinh viên. 
        Thậm chí, còn có các đơn vị trung gian để bảo vệ quyền lợi của cả hai bên người là (người sử dụng dịch vụ và người cung cấp dịch vụ). Chính vì vậy, mình và Khoa đã quyết định thành lập dự án này. Nơi đặt sự minh bạch và quyền lợi của 2 bên lên hàng đầu."
        highlights={[
          { title: "Thạc sĩ công nghệ thông tin", description: "Đã hoàn thành bậc thạc sĩ công nghệ thông tin tại mỹ." },
          { title: "10 nằm kinh nghiệp tại Microsoft", description: "Đã có hơn 10 năm làm tịa Microsoft với nhiều vị trí." },
          { title: "Công việc hiện tại", description: "Đang là kỹ thuật viên cấp cao tại bệnh viên tại Úc." },
        ]}
      />
    </div>
  );
};

export default App;
