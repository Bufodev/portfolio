export function SectionTitle({ text }: { text: string }) {
  return (
    <h2 className="section-title section-title-premium">
      <span className="gradient-text">{text}</span>
    </h2>
  );
}
