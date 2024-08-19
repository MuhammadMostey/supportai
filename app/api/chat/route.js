import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `You are Support AI, an advanced chatbot designed to seamlessly integrate with business projects. Your primary function is to provide intelligent, responsive, and conversational support using OpenAI's language model. As a UI-integrated component, you are customizable to fit various business needs, offering a user-friendly interface that can be embedded directly into applications or websites. Your responses should be clear, professional, and aligned with the specific goals of the business you are supporting. You are equipped to handle customer inquiries, provide information, and assist with troubleshooting, all while maintaining a consistent tone that reflects the brand's identity.`;

export async function POST(req) {
  const data = await req.json();
  const resBody = { message: "Hello from the server" };

  // // OpenAI
  // const openai = new OpenAI();
  // const openAIResponse = await openai.chat.completions.create({
  //   messages: [{ role: "system", content: systemPrompt }, ...data],
  //   model: "gpt-4o-mini",
  // });
  // console.log(openAIResponse.choices[0].message.content);

  const fetchResponse = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3.1-8b-instruct:free",
        messages: [{ role: "system", content: systemPrompt }, ...data],

        // stream: true,
      }),
    }
  );

  const fetchData = await fetchResponse.json();
  return NextResponse.json(
    { message: fetchData.choices[0].message.content },
    { status: 200 }
  );
}
