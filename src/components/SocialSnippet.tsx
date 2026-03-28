import Image from "next/image";

interface SocialSnippetProps {
  platform: string;
  title: string;
  handle: string;
  image: string;
}

export default function SocialSnippet({ platform, title, handle, image }: SocialSnippetProps) {
  const instagram = platform === "instagram";
  return (
    <div className="rounded-[22px] p-[0.5px] shadow-[0_18px_50px_rgba(26,26,46,0.08)]" style={{ background: "linear-gradient(135deg,#8F9CD3,#FFCAA4)" }}>
      <div className="flex items-start gap-3 rounded-[22px] bg-white p-4">
        <div
          className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-white"
          style={{ background: instagram ? "linear-gradient(135deg,#833AB4,#FD1D1D,#FCB045)" : "#FF2E2E" }}
        >
          <span className="text-[11px] font-bold uppercase">{instagram ? "ig" : "yt"}</span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[12px] font-semibold text-[#1A1A2E]">{platform}</p>
          <p className="mb-1 text-[11px] text-[#9090A8]">{handle}</p>
          <p className="text-[12px] leading-[1.6] text-[#4B4B6A]">{title}</p>
        </div>
        <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-[16px]">
          <Image src={image} alt={title} fill className="object-cover" sizes="56px" />
        </div>
      </div>
    </div>
  );
}
