import Carta from "@/components/carta";
import { promises as fs } from "fs";
export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/src/app/data.json", "utf8");
  const datos = JSON.parse(file);
  return <Carta data={datos} />;
}
