import Link from "next/link";
import Image from "next/image";

export default function ArticleHeader() {
  return (
    <div className="sticky top-0 z-50 bg-black/20 shadow-[0_1px_0_0_#E8E8F0] backdrop-blur-sm py-4">
      <div className="container-site flex items-center justify-between gap-4 text-[12px] text-[#4B4B6A]">
        <Link href="/" className="inline-flex items-center gap-2 hover:text-[#1A1A2E] transition-colors">
          <span className="text-[15px] leading-none">←</span>
          <span className="font-medium">Back to all articles</span>
        </Link>
        <button type="button" className="flex gap-2 flex-row items-center rounded-full bg-[#12141B] px-5 py-2 text-[12px] font-medium text-white shadow-[0_6px_20px_rgba(18,20,27,0.18)] hover:bg-[#2A2A3E] transition-colors">
          <Image src="/images/icons8_Share 1.png" alt="share icon"  width="15" height="15" />
          <span> Share article</span>
        </button>
      </div>
    </div>
  );
}
