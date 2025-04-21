'use client'

import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

// APIからデータを取得するコンポーネント
const HonoApiDemo = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello');
        if (!response.ok) {
          throw new Error('APIリクエストに失敗しました');
        }
        const data = await response.json();
        setMessage(data.message);
      } catch (err) {
        setError(err instanceof Error ? err.message : '不明なエラーが発生しました');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.apiDemo}>
      <h2>Hono API デモ</h2>
      {loading ? (
        <p>読み込み中...</p>
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : (
        <p className={styles.message}>{message}</p>
      )}
      <div className={styles.apiLinks}>
        <a href="/api/hello" target="_blank" rel="noopener noreferrer">
          API レスポンスを見る
        </a>
        <a href="/api/hello/world" target="_blank" rel="noopener noreferrer">
          パラメータ付きAPI レスポンスを見る
        </a>
      </div>
    </div>
  );
};

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.counter}>
          <h2>SPA機能のデモ</h2>
          <p>カウント: {count}</p>
          <div className={styles.counterButtons}>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(0)}>リセット</button>
          </div>
        </div>

        <div className={styles.navigation}>
          <Link href="/about" className={styles.navLink}>
            Aboutページへ
          </Link>
        </div>

        <HonoApiDemo />
        <ThemeImage
          className={styles.logo}
          srcLight="turborepo-dark.svg"
          srcDark="turborepo-light.svg"
          alt="Turborepo logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>apps/web/app/page.tsx</code>
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new/clone?demo-description=Learn+to+implement+a+monorepo+with+a+two+Next.js+sites+that+has+installed+three+local+packages.&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F4K8ZISWAzJ8X1504ca0zmC%2F0b21a1c6246add355e55816278ef54bc%2FBasic.png&demo-title=Monorepo+with+Turborepo&demo-url=https%3A%2F%2Fexamples-basic-web.vercel.sh%2F&from=templates&project-name=Monorepo+with+Turborepo&repository-name=monorepo-turborepo&repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fturborepo%2Ftree%2Fmain%2Fexamples%2Fbasic&root-directory=apps%2Fdocs&skippable-integrations=1&teamSlug=vercel&utm_source=create-turbo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://turbo.build/repo/docs?utm_source"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
        <Button appName="web" className={styles.secondary}>
          Open alert
        </Button>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com/templates?search=turborepo&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://turbo.build?utm_source=create-turbo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to turbo.build →
        </a>
      </footer>
    </div>
  );
}
