import { genContent } from "@/lib/action";
import Image from "next/image";

export default async function Home() {

  const data = await genContent("hello");
  return <div>{data.content}</div>
}
