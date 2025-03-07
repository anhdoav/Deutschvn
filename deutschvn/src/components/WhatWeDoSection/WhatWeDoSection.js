import React from "react";
import styles from "./WhatWeDoSection.module.css";

const stages = [
  {
    title: "Xây dựng nền tảng học tập",
    description:
      "Giai đoạn này bọn mình sẽ xây dựng một nền tảng tiếng Đức một cách nhất quán. Giúp các bạn có thể học một cách thuận lợi nhất. Chắc chắn bài tập thực hành là không thể thiếu!",
    image: "/img/05.jpg",
  },
  {
    title: "Xây dựng công cụ đánh giá",
    description:
      "Để nhanh chóng tiến bộ, việc tự đánh giá lại chính bản thân mình là tối quan trọng. Công cụ sẽ giúp bạn hiểu rõ hơn phần cần tập trung cải thiện và lộ trình cụ thể.",
    image: "/img/06.jpg",
  },
  {
    title: "Người đi trước giúp người đi sau",
    description:
      "Bọn mình sẽ xây dựng một platform giúp các bạn đã có thành tựu, có thể dễ thoải mái tạo workshop và giúp đỡ các bạn đi sau.",
    image: "/img/07.jpg",
  },
  {
    title: "Du học an toàn",
    description:
      "Bọn mình sẽ kết nối với những đơn vị làm hồ sơ uy tín. Và xây dựng một quy trình trả phí an toàn thông qua các luật sư của team để bảo vệ quyền lợi 2 bên.",
    image: "/img/08.jpg",
  },
];

const WhatWeDoSection = () => {
  return (
    <div className={styles.section}>
      <h2>Bọn mình sẽ làm những gì?</h2>
      <p>
        Mục tiêu lớn nhất của Team là có thể giúp các bạn học tiếng Đức một cách thuận lợi nhất!
        <br />
        Deutsch.vn có 4 giai đoạn:
      </p>
      <div className={styles.grid}>
        {stages.map((stage, index) => (
          <div key={index} className={styles.card}>
            <img src={stage.image} alt={stage.title} />
            <h3>{stage.title}</h3>
            <p>{stage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDoSection;
