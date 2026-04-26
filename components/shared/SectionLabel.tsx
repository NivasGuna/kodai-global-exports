interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="text-xs font-bold uppercase tracking-[0.3em] text-kodai-green">
      {children}
    </span>
  );
}
