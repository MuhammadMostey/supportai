import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI();
const systemPrompt = ``;
export async function POST(req) {
  const data = await req.json();
  console.log(data);
}
