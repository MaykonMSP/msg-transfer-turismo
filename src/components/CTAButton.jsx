import { ArrowRight } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5551999920055';

export default function CTAButton({
  children = 'Solicitar roteiro',
  className = '',
  variant = 'primary',
}) {
  const styles =
    variant === 'outline'
      ? 'border border-white/35 bg-white/10 text-white hover:border-gold hover:bg-gold hover:text-forest'
      : 'bg-gold text-forest shadow-gold hover:bg-[#d6b873]';

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-extrabold uppercase tracking-[0.14em] transition duration-300 ${styles} ${className}`}
    >
      {children}
      <ArrowRight aria-hidden="true" size={18} strokeWidth={2.4} />
    </a>
  );
}

export { WHATSAPP_URL };
