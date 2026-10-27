import React from "react";
import styles from "./Header.module.css";

export function Header({ siteTitle = "サイト名未設定" }) {

  const handleClick = () => {
    alert('当社では、プログラミング学習者向けにReactを活用した実践的な学習教材を提供しています。Reactの基本から応用まで、手を動かしながら学べるコンテンツを通じて、確かなスキル習得を目指せます。');
  }

  return (
    <header className={styles.header}>
      <nav>
        <h1>{siteTitle}</h1>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="#">HOME</a></li>
          <li className={styles.navItem}><a href="#" onClick={handleClick}>会社概要</a></li>
        </ul>
      </nav>
    </header>
  );
}