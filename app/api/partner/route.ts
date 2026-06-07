// POST /api/partner — 提交城市合伙人申请
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, city, role, resource, remark, agree } = body;

    if (!name?.trim() || !phone?.trim() || !city?.trim() || !agree) {
      return NextResponse.json({ error: "请填写必填字段" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("partner_applies")
      .insert({
        name: name.trim(),
        phone: phone.trim(),
        city: city.trim(),
        role: role || "城市合伙人",
        resource: resource ? resource.split(",").filter(Boolean) : [],
        remark: remark || "",
        agree: true,
        status: "pending",
      })
      .select("id")
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, id: data.id });
  } catch (err: any) {
    console.error("partner apply error:", err);
    return NextResponse.json({ error: "提交失败，请稍后重试" }, { status: 500 });
  }
}
