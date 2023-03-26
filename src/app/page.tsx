import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home!!</h1>
      <div>
        <Link href="/signin">ログイン</Link>
        <Link href="/signup">ユーザー登録</Link>
      </div>
    </main>
  );
}
