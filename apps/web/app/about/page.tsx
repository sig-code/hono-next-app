'use client'

import { useState } from 'react';
import Link from 'next/link';
import styles from '../page.module.css';

export default function AboutPage() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.counter}>
          <h2>Aboutページ</h2>
          <p>これはSPAのAboutページです</p>
          <p>カウント: {count}</p>
          <div className={styles.counterButtons}>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(0)}>リセット</button>
          </div>
        </div>

        <div className={styles.navigation}>
          <Link href="/" className={styles.navLink}>
            ホームに戻る
          </Link>
        </div>

        <div className={styles.aboutContent}>
          <h3>Next.js SPAについて</h3>
          <p>
            このアプリケーションはNext.jsを使用したSPA（Single Page Application）です。
            ページ間の遷移はクライアントサイドで行われ、ページ全体の再読み込みは発生しません。
          </p>
          <p>
            SPAの特徴:
          </p>
          <ul>
            <li>高速なページ遷移</li>
            <li>クライアントサイドでの状態管理</li>
            <li>ページ間で状態を保持可能</li>
            <li>静的エクスポートによるデプロイの容易さ</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
