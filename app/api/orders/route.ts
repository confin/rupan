// POST /api/orders — 创建订单
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, programId, programTitle, qty, total, region, form } = body;

    if (!id || !programId || !qty || !total) {
      return NextResponse.json({ error: "订单数据不完整" }, { status: 400 });
    }

    const { error } = await supabase.from("orders").insert({
      id,
      program_id: programId,
      program_title: programTitle || "",
      qty,
      total,
      region: region || {},
      form_data: form || {},
      payment_method: "",
      paid_at: null,
      expired: false,
    });

    if (error) throw error;

    return NextResponse.json({ success: true, orderId: id });
  } catch (err: any) {
    console.error("order create error:", err);
    return NextResponse.json({ error: "创建订单失败" }, { status: 500 });
  }
}

// GET /api/orders?id=xxx — 查询订单
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "缺少订单 ID" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: "订单不存在" }, { status: 404 });
  }

  return NextResponse.json({ success: true, order: data });
}

// PATCH /api/orders — 标记支付成功
export async function PATCH(req: Request) {
  try {
    const { id, paymentMethod } = await req.json();

    const { error } = await supabase
      .from("orders")
      .update({ paid_at: new Date().toISOString(), payment_method: paymentMethod || "mock" })
      .eq("id", id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("order update error:", err);
    return NextResponse.json({ error: "更新订单失败" }, { status: 500 });
  }
}
