const TEXT =
  "HATHA \u00b7 VINYASA \u00b7 YIN \u00b7 BREATHWORK \u00b7 ONLINE SESSIONS \u00b7 FREE TO ATTEND \u00b7 $5 DONATION \u00b7 \u00a0\u00a0";

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-foreground py-4 select-none">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 28s linear infinite" }}
      >
        {/* Duplicate for seamless loop — animate translateX(-50%) */}
        <span className="font-sans text-[11px] tracking-[0.28em] uppercase text-primary pr-0">
          {TEXT.repeat(8)}
        </span>
        <span
          className="font-sans text-[11px] tracking-[0.28em] uppercase text-primary pr-0"
          aria-hidden
        >
          {TEXT.repeat(8)}
        </span>
      </div>
    </div>
  );
}
