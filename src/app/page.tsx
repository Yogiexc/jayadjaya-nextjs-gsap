import { Hero } from "@/components/home/Hero";
import { ProductCatalog } from "@/components/home/ProductCatalog";
import { ExportProcess } from "@/components/home/ExportProcess";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProductCatalog />
      <ExportProcess />
      <CTA />
    </div>
  );
}
