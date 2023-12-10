import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const tag = req.nextUrl.searchParams.get("tags");

  if (!tag) throw new Error("태그는 필수입니다.");

  revalidateTag(tag);

  return NextResponse.json({ message: "재검증 성공", tag: tag });
}
