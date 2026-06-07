#!/usr/bin/env node
// 汝攀营地教育 — 数据库迁移脚本（pg 直连）
// 运行: node scripts/migrate.mjs
// 需要先设置环境变量或 .env.local 中的 SUPABASE_SERVICE_KEY

import { readFileSync } from "fs";
import pg from "pg";

const sql = readFileSync(new URL("../lib/migration.sql", import.meta.url), "utf8");
const connectionString = "postgresql://postgres.bslnhdvrvvbpzrinpufh:rupan1_database@aws-1-ap-southeast-2.pooler.supabase.com:5432/postgres";

const pool = new pg.Pool({ connectionString });

async function run() {
  console.log("🔄 正在连接 Supabase PostgreSQL...");
  const client = await pool.connect();
  try {
    console.log("✅ 已连接，正在执行建表 SQL...");
    await client.query(sql);
    console.log("✅ 所有表已创建成功！");
  } catch (err) {
    console.error("❌ 建表失败:", err.message);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

run();
