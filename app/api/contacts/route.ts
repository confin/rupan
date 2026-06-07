// POST /api/contacts — 提交联系/合作留言
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, message } = body;

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json({ error: "请填写姓名和手机号" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("contacts")
      .insert({
        name: name.trim(),
        phone: phone.trim(),
        email: email?.trim() || "",
        message: message?.trim() || "",
      })
      .select("id")
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, id: data.id });
  } catch (err: any) {
    console.error("contact error:", err);
    return NextResponse.json({ error: "提交失败" }, { status: 500 });
  }
}
