interface HeroBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroBadge({ children, className }: HeroBadgeProps) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full bg-kodai-green px-5 py-2 text-[11px] font-bold tracking-[0.25em] text-white uppercase shadow-[0_8px_20px_rgba(45,122,79,0.3)] transition-all hover:scale-105 hover:shadow-[0_10px_25px_rgba(45,122,79,0.4)]${className ? ` ${className}` : ''}`}
    >
      {children}
    </span>
  );
}
