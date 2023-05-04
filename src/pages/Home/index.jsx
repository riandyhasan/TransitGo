import Image from 'next/image';
import styles from '@src/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>p</p>
        <div className={styles.header_c}>
          <p>Current Location</p>
          <h3>Institut Teknologi Bandung</h3>
        </div>
      </div>
    </div>
  );
}
