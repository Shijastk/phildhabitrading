type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  inverted?: boolean;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  inverted = false,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={`sectionHeading sectionHeading--${align} ${inverted ? 'sectionHeading--inverted' : ''}`.trim()}>
      <p className="sectionEyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="sectionHeading__copy">{copy}</p> : null}
    </div>
  );
}
