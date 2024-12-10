import ModalCore from "@/components/modalCore";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p className="font-display mx-auto max-w-4xl text-5xl font-medium tracking-tight text-blue-600 sm:text-7xl">
        Hello
        <span className="relative whitespace-nowrap text-blue-600"> World</span>
      </p>
      <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
        <Link href="/chiba">千葉県</Link>
        東京都
      </div>
      <ModalCore />
    </div>
  );
}
