// app/api/teachworks/students/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`${process.env.TEACHWORKS_API_BASE}/students`, {
    headers: {
      Authorization: `Token token=${process.env.TEACHWORKS_API_KEY}`,
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const text = await res.text();

  if (!res.ok) {
    return NextResponse.json(
      { error: "Teachworks request failed", status: res.status, bodyPreview: text.slice(0, 500) },
      { status: res.status }
    );
  }

  return NextResponse.json(text ? JSON.parse(text) : []);
}