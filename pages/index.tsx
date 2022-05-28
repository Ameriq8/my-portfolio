import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amer Mohammed</title>
        <meta
          name="description"
          content="Amer Mohammed a Full Stack Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img className={styles.avatar} src="/logo.jpg" alt="logo" />
        <h1 className={styles.title}>
          I&apos;m <a>Amer Mohammed!</a>
        </h1>

        <p className={styles.description}>
          I&apos;m a Full Stack Developer from Iraq.
          <br />I can code everything if it is reasobale and not impossible.
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Skills</h2>
            <p>
              JS/TS, PostgreSQL, MongoDB, React and more!
            </p>
          </a>

          <a
            href="https://github.com/Ameriq8"
            about="_blank"
            className={styles.card}
          >
            <h2>Github &rarr;</h2>
            <p>You can found more about me on my github account!</p>
          </a>

          <a
            href="https://www.instagram.com/56_bc/"
            about="_blank"
            className={styles.card}
          >
            <h2>Instagram &rarr;</h2>
            <p>You can follow me on my instagram account.</p>
          </a>

          <a href="https://4meg.net" about="_blank" className={styles.card}>
            <h2>4Meg Store &rarr;</h2>
            <p>
              It&apos;s a simple store you can found what do want to buy.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
