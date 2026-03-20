const TEXT =
  "Hatha \u00b7 Vinyasa \u00b7 Yin \u00b7 Breathwork \u00b7 Online Sessions \u00b7 Free to Attend \u00b7 $5 Donation \u00b7 \u00a0\u00a0";

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-foreground py-4 select-none">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 32s linear infinite" }}
      >
        <span className="font-sans text-[10px] tracking-[0.22em] text-background/35">
          {TEXT.repeat(10)}
        </span>
        <span
          className="font-sans text-[10px] tracking-[0.22em] text-background/35"
          aria-hidden
        >
          {TEXT.repeat(10)}
        </span>
      </div>
    </div>
  );
}
