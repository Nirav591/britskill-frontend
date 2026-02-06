// app/api/teachworks/students/route.ts
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  // Static export builds cannot run dynamic server fetches.
  return NextResponse.json([]);
}
