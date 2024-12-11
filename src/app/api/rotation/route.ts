import { Rotation } from "@/types/rotation.type";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "Content-Type": "application/json",
        "X-Riot-Token": process.env.RIOT_API_KEY as string,
      },
    }
  );
  const data: Rotation = await response.json();

  return NextResponse.json({ data });
}