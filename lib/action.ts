"use server"

import { GoogleGenerativeAI } from "@google/generative-ai";



const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


// const result = await model.generateContent(prompt);
// console.log(result.response.text());

export const genContent =  async (prompt: string) => {
     const result = await model.generateContent(prompt);
     return {
        content:result.response.text(),
    }
}