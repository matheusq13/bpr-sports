type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: Props) {
  const isCenter = align === "center";
  return (
    <div
      className={`flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-rubra-red/40 bg-rubra-red/10 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-rubra-redLt mb-5">
          {eyebrow}
        </span>
      )}
      <h2 className="display-font text-4xl sm:text-5xl lg:text-6xl leading-[1.02] uppercase max-w-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-base sm:text-lg text-rubra-white/70 leading-relaxed ${
            isCenter ? "" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
