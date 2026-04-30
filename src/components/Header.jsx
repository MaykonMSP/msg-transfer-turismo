import CTAButton from './CTAButton.jsx';

const navItems = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Roteiros', href: '#roteiros' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="section-shell flex items-center justify-between py-5">
        <a href="#topo" className="focus-ring rounded-md">
          <img
            src="/images/logo-msg.png"
            alt="MSG Transporte e Turismo"
            className="h-24 w-24 rounded-md bg-cream object-cover p-1.5 shadow-soft sm:h-28 sm:w-28 lg:h-32 lg:w-32"
          />
        </a>

        <div className="hidden items-center gap-8 rounded-md border border-white/15 bg-forest/35 px-6 py-3 text-sm font-semibold text-white/86 backdrop-blur-md lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-gold">
              {item.label}
            </a>
          ))}
        </div>

        <CTAButton className="hidden lg:inline-flex" variant="outline">
          WhatsApp
        </CTAButton>
      </nav>
    </header>
  );
}
