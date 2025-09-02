import fs from "fs";
import path from "path";
import { Metadata } from "next";
import NewsletterScroll from "../components/NewsletterScroll";

export const metadata: Metadata = {
  title: "Noesis Insights | Noesis Systems",
  description: "Read recent insights and frameworks from Noesis Systems.",
};

type Item = {
  id: string;
  title: string;
  dateISO: string; // used for sorting, not shown
  summary: string;
  href: string;
};

export default async function NewsletterPage() {
  const dir = path.join(process.cwd(), "public", "newsletters");
  const files = fs.readdirSync(dir).filter((f) => /\.pdf$/i.test(f));

  const items: Item[] = files.map((file) => {
    const cleanFile = file.toLowerCase().replace(/\.pdf$/, "");
    const match = cleanFile.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/);
    const dateISO = match ? `${match[1]}-${match[2]}-${match[3]}` : "1970-01-01";

    const rawTitle = match ? match[4] : cleanFile;
    const title = rawTitle
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    return {
      id: cleanFile,
      title,
      dateISO,
      summary: "Download the full PDF to explore this edition.",
      href: `/newsletters/${file}`, // keep original filename for link
    };
  });

  items.sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime());

  return <NewsletterScroll items={items} />;
}
