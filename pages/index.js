// import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import img1 from "../public/img1.webp";
import img2 from "../public/img2.jpg";
import img3 from "../public/img3.jpg";

export default function Home() {
  const ImagesArr = [img1, img2, img3];

  return (
    <div className={styles.container}>
      <span className={styles.logo}>
        <Image src={img1} alt="img 1" height="300" width="300" />
      </span>
      <span className={styles.logo}>
        <Image src="/img2.jpg" alt="img 2" height="300" width="300" />
      </span>
      <span className={styles.logo}>
        <Image src="/img3.jpg" alt="img 3" height="300" width="300" />
      </span>
      <span className={styles.logo}>
        <Image src="/img4.jpeg" alt="img 4" height="300" width="300" />
      </span>
      <span className={styles.logo}>
        <Image src="/img5.jpg" alt="img 5" height="300" width="300" />
      </span>
      <span className={styles.logo}>
        <Image src="/img1.webp" alt="img 1" height="300" width="300" />
      </span>
    </div>
  );
}
