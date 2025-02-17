import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import PureHero from '../components/PureHero/PureHero';
import IntroductionSection from '../components/IntroductionSection/IntroductionSection';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Cùng học tiếng Đức với mình nhé!`}
      description="Bạn không cần phải học thật nhanh, chỉ cần học theo cách phù hợp với chính mình. Và đây là tất cả tài liệu mình ghi chú lại trong quá trình học của mình. Mong là sẽ giúp được bạn phần nào đó!">
      <main>
        <PureHero
          title="Cùng học tiếng Đức với mình nhé!"
          subtitle="Bạn không cần phải học thật nhanh, chỉ cần học theo cách phù hợp với chính mình. Và đây là tất cả tài liệu mình ghi chú lại trong quá trình học của mình. Mong là sẽ giúp được bạn phần nào đó!"
          backgroundImage="https://images.unsplash.com/photo-1453219562534-36e2ce0ea18e?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D"
          buttonText="Tham gia cộng đồng"
          buttonLink="#"
        />
        <IntroductionSection
          title="Tại sao lại là Deutsch.vn!"
          subtitle="Là một du học sinh tại Áo, mình có cơ hội tiếp cận với rất nhiều nguồn tài liệu học tiếng Đức miễn phí. Trong quá trình học, mình đã tỉ mỉ ghi chép lại tất cả trên Notion để hệ thống hóa kiến thức. Deutsch.vn chính là nơi mình chia sẻ những tài liệu đó, giúp các bạn dễ dàng học tập và phát triển hơn."
          style={{
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            maxWidth: '600px',
            margin: '20px auto',
          }}
        />
      </main>
    </Layout>
  );
}
