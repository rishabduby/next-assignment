import Link from "next/link";
import styles from "./AppNavbar.module.css";

export default function AppNavbar() {
  return (
    <nav className={styles.header}>
      <Link href="/" passHref>
        <a className={styles.childLI}>Home</a>
      </Link>

      <Link href="/table-filter" passHref>
        <a className={styles.childLI}>Table</a>
      </Link>

      <Link href="/next-js" passHref>
        <a className={styles.childLI}>Next.JS</a>
      </Link>
    </nav>
  );
}
