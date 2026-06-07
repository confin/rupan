-- ============================================================
-- 汝攀营地教育 — Supabase 数据库表结构
-- 基于项目已有的 3 个表单：合伙人申请 / 营地订单 / 联系留言
-- 运行方式: node scripts/migrate.mjs
-- ============================================================

-- 1. 城市合伙人申请表
create table if not exists partner_applies (
  id           bigint generated always as identity primary key,
  name         text not null,
  phone        text not null,
  city         text not null,
  role         text not null default '城市合伙人',
  resource     text[] default '{}',
  remark       text default '',
  agree        boolean default true,
  status       text not null default 'pending'
    check (status in ('pending','contacted','closed')),
  created_at   timestamptz not null default now()
);

-- 2. 营地订单表
create table if not exists orders (
  id                text primary key,
  program_id        text not null,
  program_title     text not null,
  qty               int not null,
  total             int not null,
  region            jsonb default '{}',
  form_data         jsonb default '{}',
  payment_method    text default '',
  paid_at           timestamptz,
  expired           boolean not null default false,
  created_at        timestamptz not null default now()
);

-- 3. 联系/留言表（合作机构页面）
create table if not exists contacts (
  id           bigint generated always as identity primary key,
  name         text not null,
  phone        text not null,
  email        text default '',
  message      text not null default '',
  created_at   timestamptz not null default now()
);

-- 索引
create index if not exists idx_partner_applies_phone on partner_applies(phone);
create index if not exists idx_partner_applies_status on partner_applies(status);
create index if not exists idx_orders_paid_at on orders(paid_at);
create index if not exists idx_orders_created_at on orders(created_at desc);
