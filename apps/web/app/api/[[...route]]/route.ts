import { Hono } from "hono";
import { handle } from "hono/vercel";

// Vercel Functionsの設定
export const runtime = "nodejs"; // Fluid Computeを使用するためにnodejsランタイムを指定

// APIルートのベースパスを指定
const app = new Hono().basePath("/api");

// 各APIエンドポイントを定義
app.get("/hello", (c) => {
  return c.json({ message: "Hello from Hono!" });
});

app.get("/hello/:name", (c) => {
  const name = c.req.param("name");
  return c.json({ message: `Hello, ${name}!` });
});

// 型定義をエクスポート（フロントエンド側で使用）
export type AppType = typeof app;

// Next.jsのRoute Handlersとして各HTTPメソッドをエクスポート
export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
