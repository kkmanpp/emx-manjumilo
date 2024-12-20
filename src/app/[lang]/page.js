import Image from "next/image";
import { getDictionary } from "./dictionaries";
import LinkButton from "@/components/LinkButton";

export default async function Home({ params: { lang } }) {
  const t = await getDictionary(lang);
  return <div>Home</div>;
}
