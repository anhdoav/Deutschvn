import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import WelcomeSection from '../components/WelcomeSection/WelcomeSection';
import CommunitySection from '../components/CommunitySection/CommunitySection';
import WhatWeDoSection from '../components/WhatWeDoSection/WhatWeDoSection';
import OpenSourceSection from '../components/OpenSourceSection/OpenSourceSection';
import FeedbackSection from '../components/FeedbackSection/FeedbackSection';

const faqData = [
  {
    question: "Nếu tôi có thắc mắc hoặc cần giúp đỡ, tôi liên hệ ai?",
    answer: "Bạn có thể tham gia vào cộng đồng `Deutsch.vn` – nơi không chỉ có những người học như bạn mà còn có các thầy cô dạy tiếng Đức và những người bạn với trình độ vững chắc. Tại đây, mọi người luôn sẵn lòng chia sẻ kinh nghiệm và giúp bạn giải đáp mọi thắc mắc trong hành trình chinh phục tiếng Đức.",
  },
  {
    question: "Liệu bạn có đang sử dụng cộng đồng để quảng cáo hay thu lợi không?",
    answer: "Mục tiêu của tôi là xây dựng một không gian học tập thân thiện, không bị chi phối bởi quảng cáo.",
  },
  {
    question: "Đây có thật sự là trang web miễn phí không?",
    answer: "Hoàn toàn miễn phí! Với hơn 5 năm kinh nghiệm xây dựng nhiều cộng đồng chất lượng, mình hiểu rõ giá trị của việc chia sẻ kiến thức. Trang web này đơn thuần chỉ là nơi mình công khai những tài liệu học tập cá nhân mà mình đã tích lũy và sử dụng trong quá trình học tiếng Đức. Vì vậy, bạn có thể yên tâm rằng đây chắc chắn là một trang web miễn phí.",
  },
];


export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Cùng học tiếng Đức với mình nhé!`}
      description="Bạn không cần phải học thật nhanh, chỉ cần học theo cách phù hợp với chính mình. Và đây là tất cả tài liệu mình ghi chú lại trong quá trình học của mình. Mong là sẽ giúp được bạn phần nào đó!">
      <main>
      <WelcomeSection
        title="Willkommen bei Deutsch.vn!"
        description="Chúng mình ở đây, với mong muốn có thể xây một cộng đồng tiếng Đức lành mạnh và an toàn."
        buttonText="Mach mit!"
        highlights={[
          { title: "Miễn phí", icon: "/img/02.jpg" },
          { title: "An toàn", icon: "/img/04.jpg" },
          { title: "Hiệu quả", icon: "/img/03.jpg" },
        ]}
        backgroundImage="/img/1.png" /* Ảnh nền */
      />

      {/* Phần Community Section */}
      <CommunitySection
        title="Tại đây, chúng ta tạo lên tiếng nói của chính mình!"
        content={[
          "Mình đã từng là một học sinh mong muốn kiếm được một đơn vị học tiếng Đức uy tín. Mình cũng đã từng trải qua việc làm hồ sơ tại nơi không uy tín. Và mình đã từng phải ngậm ngùi chịu quả và không thể làm gì hơn.",
          "Đó là lý do chúng ta ở đây, tạo nên cộng đồng của chính mình!",
          "Nơi mà bạn có quyền đánh giá các đơn vị cung cấp dịch vụ tiếng Đức một cách thẳng thắn và minh bạch.",
        ]}
      />

      {/* Phần What We Do Section */}
      <WhatWeDoSection />

      {/* Phần Open Source Section (Mới thêm vào) */}
      <OpenSourceSection
        image="/img/09.jpg"
        subtitle="Deutsch.vn"
        title="Được xây dựng cho người học, bởi những người học."
        description="Bọn mình cố gắng xây dựng trang web như một dự án mở. Mở để các bạn cùng xây dựng và cởi mở nhận góp ý của các bạn."
      />

      {/* Phần Feedback Section (Mới thêm vào) */}
      <FeedbackSection
        feedbacks={[
          {
            message: "Đợi mọi người sử dụng rồi góp ý nè!",
            avatar: "/img/25.jpg",
            name: "Siêu nhân hồng",
            description: "Thành viên cộng đồng",
          },
          {
            message: "Nhớ góp ý một cách ân thật nha! hihi",
            avatar: "/img/24.jpg",
            name: "Siêu nhân đỏ",
            description: "Thành viên tích cực",
          },
          {
            message: "Chân thật mà phải góp ý tốt nha mấy khứa! 😀",
            avatar: "/img/26.jpg",
            name: "Siêu nhân vàng",
            description: "Người hỗ trợ",
          },
        ]}
      />
      </main>
    </Layout>
  );
}
