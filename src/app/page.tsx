import Image from "next/image";
import { Roboto } from "@next/font/google";
import styles from "./page.module.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "900"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={roboto.className} style={{ fontWeight: 900 }}>
          My Cv
        </h1>
        <p className={roboto.className} style={{ fontWeight: 400 }}>
          testing deploy nextjs app on vercel with github actions.
        </p>
        <p className={roboto.className} style={{ fontWeight: 400 }}>
          Testing update deployment.
        </p>
      </div>
    </main>
  );
}
