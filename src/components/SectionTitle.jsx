export default function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  const isCenter = align === 'center';

  return (
    <div className={isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-forest sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-ink/70 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
