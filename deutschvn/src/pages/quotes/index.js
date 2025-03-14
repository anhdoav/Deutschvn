
import React from 'react';
import Layout from '@theme/Layout'; // Import Layout component from Docusaurus
import ImageGallery from '@site/src/components/ModernDesign/ImageGallery/ImageGallery'; // Import your ImageGallery component
import styles from './imageGalleryDemo.module.css'; // Import custom CSS (create this file if you want extra styling)

// PHẦN KHAI BÁO DỮ LIỆU -----------------

const images = [
  {
    src: '/img/quotes/1.png',
    alt: 'Hành trình của chúng tôi',
    title: 'Hành trình khám phá của chúng tôi',
    description: 'Khám phá những miền đất mới, gặp gỡ những con người thú vị.',
    link: '/family-therapy',
  },
  {
    src: '/img/quotes/2.png',
    alt: 'Group Counseling',
    title: 'Group Counseling',
    description: 'Building connections and sharing experiences.',
    link: '/group-counseling',
  },
  {
    src: '/img/quotes/3.png',
    alt: 'Emotional Support',
    title: 'Emotional Support',
    description: 'Providing care and understanding in difficult times.',
    link: '/emotional-support',
  },
  {
    src: '/img/quotes/4.png',
    alt: 'Family Therapy',
    title: 'Family Therapy',
    description: 'Supporting families through meaningful conversations.',
    link: '/family-therapy',
  },
  {
    src: '/img/quotes/5.png',
    alt: 'Group Counseling',
    title: 'Group Counseling',
    description: 'Building connections and sharing experiences.',
    link: '/group-counseling',
  },
  {
    src: '/img/quotes/6.png',
    alt: 'Emotional Support',
    title: 'Emotional Support',
    description: 'Providing care and understanding in difficult times.',
    link: '/emotional-support',
  },
];

// PHẦN CHÈN CÁC THẺ HIỂN THỊ NỘI DUNG -----------------

function ImageGalleryDemo() {
  return (
    <Layout title="Image Gallery Demo" description="A demo page showcasing the Image Gallery component">
      <div className={styles.demoContainer}>

        {/* Render the ImageGallery component with custom props */}
        <ImageGallery
          title="Deutsch.vn"
          description=""
          images={images}
          lightboxLinkText="Tham gia ngay!"
          titleColor="#2f4f4f"          // Adaptive title color for light mode
          descriptionColor="#555555"     // Adaptive description color for light mode
          textColor="#FFFFFF"            // Lightbox text color
          linkColor="#FF6F61"            // Lightbox link color
          linkHoverColor="#FFFFFF"       // Hover color for link
        />

      </div>
    </Layout>
  );
}

export default ImageGalleryDemo;
