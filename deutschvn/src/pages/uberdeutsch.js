import React from "react";
import TwoColumnSection from "@site/src/components/TwoColumnSection/TwoColumnSection";
import TwoColumnSection2 from "@site/src/components/TwoColumnSection2/TwoColumnSection2";
import MediaPartners from "@site/src/components/MediaPartners/MediaPartners"; // Thêm component MediaPartners
import styles from "@site/src/components/FounderProfile/FounderProfile.module.css";
import Layout from '@theme/Layout';

const partnersData = [
  { name: "Báo Mới", logo: "/img/logos/baomoi.png", link: "https://baomoi.com/" },
  { name: "VNExpress", logo: "/img/logos/vnexpress.png", link: "https://vnexpress.net/" },
  { name: "Tuổi Trẻ", logo: "/img/logos/tuoitre.png", link: "https://tuoitre.vn/" },
];

const App = () => {
  return (
    <Layout>
      <div className={styles.founderSection}>
        {/* Tiêu đề chung */}
        <section className={styles.founderHeader}>
          <p className={styles.subtitle}>Über Deutsch.vn</p>
          <h1 className={styles.title}>Tại sao bọn mình ở đây!.</h1>
        </section>

        {/* Hàng 1 */}
        <TwoColumnSection
          image="/img/10.jpg"
          altText="Illustration 1"
          heading="Mình đã từng học tiếng Đức tại nhiều trung tâm!"
          description="Nhưng 3 trong 4 trung tâm mình học đều có chất lượng kém. Thậm chí mình còn bị lừa bởi một thầy giáo dạy tiếng Đức."
        />

        {/* Hàng 2 */}
        <section className={styles.section}>
          <div className={styles.container}>
            {/* Hình ảnh bên trái */}
            <div className={styles.imageWrapper}>
              <img src='/img/11.jpg' alt='Illustration 2' className={styles.image} />
            </div>

            {/* Văn bản bên phải */}
            <div className={styles.text}>
              <h3 className={styles.heading}>Mình hiểu cảm giác hoang mang của bạn.</h3>
              <p className={styles.description}>
                Tiếng Đức ở Việt Nam chỉ bùng nổ trong 5-7 năm qua. Vừa đi một, thị trường chưa có một đơn vị nào đủ uy tín để dẫn đầu. Người học phải tự mình mò mẫm, tự đánh giá chất lượng bằng... niềm tin.
                <br />
                <br />
                Đó là vấn đề!
              </p>
            </div>
          </div>
        </section>

        {/* Hàng 3 */}
        <section className={styles.section}>
          <div className={styles.container}>
            {/* Hình ảnh bên trái */}
            <div className={styles.imageWrapper}>
              <img src='/img/12.jpg' alt='Illustration 3' className={styles.image} />
            </div>

            {/* Văn bản bên phải */}
            <div className={styles.text}>
              <h3 className={styles.heading}>Bọn mình muốn thay đổi điều đó.</h3>
              <p className={styles.description}>
                Bọn mình không phải là một trung tâm tiếng Đức. Cũng không phải là một công ty tư vấn du học.
                <br />
                <br />
                Deutsch.vn là cầu nối, là nơi bảo vệ quyền lợi cho cả người học và các đơn vị cung cấp dịch vụ uy tín.
              </p>
            </div>
          </div>
        </section>


        {/* Hàng 4 */}
        <TwoColumnSection2
          image="/img/13.jpg"
          altText="Illustration 4"
          heading="Deutsch.vn có 3 giai đoạn chính:"
          description=""
        />

        {/* Hàng 5 */}
        <section className={styles.section}>
          <div className={styles.container}>
            {/* Hình ảnh bên trái */}
            <div className={styles.imageWrapper}>
              <img src='/img/14.jpg' alt='Illustration 5' className={styles.image} />
            </div>

            {/* Văn bản bên phải */}
            <div className={styles.text}>
              <h3 className={styles.heading}>Hãu cùng nhau xây dựng thị trường!</h3>
              <p className={styles.description}>
                Đây không chỉ là một nền tảng học tập. Đây là một phong trào, một cộng đồng.
                <br />
                <br />
                Bọn mình tin rằng nếu mỗi người góp một chút—dù là thử nghiệm nền tảng, đóng góp ý kiến, hay chia sẻ trải nghiệm—chúng ta có thể tạo ra một thị trường học tiếng Đức minh bạch và công bằng hơn.
                <br />
                <br />
                Hãy cùng nhau làm mọi thứ đẹp nhé!
              </p>
            </div>
          </div>
        </section>


        {/* 🆕 Phần Đội Ngũ Sáng Lập */}
        <section className={styles.founderSection}>
          <h2 className={styles.founderTitle}>Đội ngũ sáng lập</h2>
          Mình là <strong>Khoa Võ</strong>, người chịu trách nhiệm cho <strong>nội dung</strong>.
          <br />
          <strong>Tuấn Anh Đỗ</strong>, người chịu trách nhiệm cho phần <strong>xây dựng hệ thống</strong>.
          <p className={styles.readMore}>
            Đọc thêm về bọn mình. <a href="/founder">Tại đây! 🔥</a>
          </p>
        </section>

        {/* 🆕 Phần Đối Tác Truyền Thông */}
        {/* <MediaPartners partners={partnersData} /> */}
      </div>
    </Layout>

  );
};

export default App;
