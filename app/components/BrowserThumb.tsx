import Image from "next/image";

interface BrowserThumbProps {
  src: string;
  alt: string;
  accent: string;
  url?: string;
  sizes?: string;
}

// Screenshot presented inside a browser window on a backdrop in the client's brand colour.
// The window bleeds off the bottom-right edge and lifts on card hover.
export default function BrowserThumb({ src, alt, accent, url, sizes }: BrowserThumbProps) {
  const host = url ? new URL(url).hostname.replace(/^www\./, "") : undefined;

  return (
    <div className="absolute inset-0 overflow-clip" style={{ backgroundColor: accent }}>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(120% 90% at 0% 0%, rgba(255,255,255,0.22), transparent 55%), radial-gradient(80% 70% at 100% 100%, rgba(0,0,0,0.35), transparent 60%)",
        }}
      />
      <div aria-hidden className="bg-grid absolute inset-0 opacity-25" />

      <div className="absolute left-[9%] top-[13%] w-[104%] overflow-hidden rounded-tl-xl border border-white/15 bg-[#111] shadow-[0_30px_80px_-10px_rgba(0,0,0,0.6)] transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-[3%] group-hover:-translate-y-[4%]">
        <div className="flex h-7 items-center gap-3 border-b border-white/10 bg-[#1a1a1a] px-3">
          <span className="flex gap-1.5">
            <span className="size-2 rounded-full bg-white/20" />
            <span className="size-2 rounded-full bg-white/20" />
            <span className="size-2 rounded-full bg-white/20" />
          </span>
          {host && (
            <span className="truncate rounded-md bg-white/[0.06] px-2.5 py-0.5 font-mono text-[10px] text-white/50">
              {host}
            </span>
          )}
        </div>
        <div className="relative aspect-[16/9.1]">
          <Image src={src} alt={alt} fill sizes={sizes} className="object-cover object-top" />
        </div>
      </div>
    </div>
  );
}
