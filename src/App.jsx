import {
  ArrowLeft,
  CalendarDays,
  Car,
  Clock,
  MapPinned,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import CTAButton from './components/CTAButton.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import Header from './components/Header.jsx';
import SectionTitle from './components/SectionTitle.jsx';

const services = [
  {
    icon: Plane,
    title: 'Transfer aeroporto',
    text: 'Recepção organizada em Porto Alegre, Caxias do Sul e deslocamentos sob medida para a Serra Gaúcha.',
  },
  {
    icon: MapPinned,
    title: 'City tour privativo',
    text: 'Gramado, Canela, parques, mirantes, restaurantes e pontos clássicos com tempo flexível.',
  },
  {
    icon: CalendarDays,
    title: 'Roteiros especiais',
    text: 'Natal Luz, lua de mel, viagens em família e experiências pensadas conforme o perfil do grupo.',
  },
];

const gallery = [
  {
    src: '/images/hero-canela.jpg',
    title: '',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  { src: '/images/portal-gramado-dia.jpg', title: '' },
  { src: '/images/natal-luz.jpg', title: '' },
  { src: '/images/mundo-a-vapor.jpg', title: '' },
  { src: '/images/gramado-centro.jpg', title: '' },
  { src: '/images/portal-gramado-noite.jpg', title: '' },
  { src: '/images/canela-catedral-1.jpg', title: '' },
  { src: '/images/canela-catedral-2.jpg', title: '' },
];

const routes = [
  'Gramado essencial com Lago Negro, Rua Coberta, lojas temáticas e centro histórico.',
  'Canela completo com Catedral de Pedra, parques, Mundo a Vapor e experiências gastronômicas.',
  'Roteiro Natal Luz com deslocamentos pontuais, conforto e retorno no horário combinado.',
  'Transfer executivo para hotéis, eventos, restaurantes e passeios de curta distância.',
];

const differentials = [
  { icon: ShieldCheck, label: 'Atendimento seguro e pontual' },
  { icon: Car, label: 'Veículo confortável para a Serra' },
  { icon: Clock, label: 'Roteiro sem pressa e com flexibilidade' },
  { icon: Users, label: 'Experiência privativa para seu grupo' },
];

const testimonials = [
  {
    name: 'Mariana Ludwig',
    text: 'Tudo foi muito tranquilo desde o aeroporto. O passeio em Canela ficou leve, bonito e sem correria.',
  },
  {
    name: 'Rodrigo Civa',
    text: 'A MSG organizou nossos deslocamentos no Natal Luz de Gramado com pontualidade impecável e muita gentileza.',
  },
  {
    name: 'Elisete Macedo',
    text: 'Excelente para quem quer conhecer Gramado e Canela com conforto e orientação local.',
  },
];

const faqs = [
  {
    question: 'A MSG atende aeroportos?',
    answer:
      'Sim. O atendimento pode ser combinado para aeroportos, hotéis, eventos e deslocamentos entre cidades da Serra Gaúcha.',
  },
  {
    question: 'Os passeios são privativos?',
    answer:
      'A proposta principal é oferecer transfers e city tours privativos, com roteiro alinhado ao tempo e interesse do cliente.',
  },
  {
    question: 'Como solicito um orçamento?',
    answer:
      'Clique em qualquer botão de WhatsApp e envie datas, quantidade de passageiros e locais desejados.',
  },
];

const PRIVACY_LAST_UPDATED = '30 de abril de 2026';

const privacySections = [
  {
    title: '1. Coleta de informações',
    body: [
      'Podemos coletar informações fornecidas voluntariamente pelo usuário ao entrar em contato conosco, como:',
    ],
    list: [
      'Nome',
      'Telefone',
      'Mensagem enviada',
      'Informações sobre o passeio, transfer ou roteiro desejado',
    ],
    after:
      'Essas informações podem ser enviadas por meio de botões de WhatsApp, formulários de contato ou outros canais disponíveis no site.',
  },
  {
    title: '2. Uso das informações',
    body: ['As informações coletadas são utilizadas para:'],
    list: [
      'Responder solicitações de orçamento',
      'Entrar em contato com o cliente',
      'Organizar reservas, transfers e passeios',
      'Enviar informações sobre serviços solicitados',
      'Melhorar o atendimento ao cliente',
    ],
  },
  {
    title: '3. Compartilhamento de informações',
    body: [
      'A MSG Transfer Turismo não vende, aluga ou comercializa dados pessoais dos usuários.',
      'As informações podem ser compartilhadas apenas quando necessário para:',
    ],
    list: [
      'Cumprimento de obrigações legais',
      'Organização do serviço contratado',
      'Atendimento ao cliente',
    ],
  },
  {
    title: '4. WhatsApp e links externos',
    body: [
      'Este site pode conter botões e links que direcionam o usuário para o WhatsApp ou outros canais externos. Ao acessar esses serviços, o usuário estará sujeito também às políticas de privacidade dessas plataformas.',
    ],
  },
  {
    title: '5. Cookies e dados de navegação',
    body: [
      'Este site pode utilizar cookies ou ferramentas de análise para melhorar a experiência do usuário, entender o desempenho da página e otimizar campanhas de divulgação.',
      'O usuário pode configurar seu navegador para bloquear cookies, se desejar.',
    ],
  },
  {
    title: '6. Segurança das informações',
    body: [
      'Adotamos medidas razoáveis para proteger as informações fornecidas pelos usuários. No entanto, nenhum sistema de transmissão ou armazenamento de dados é totalmente seguro.',
    ],
  },
  {
    title: '7. Direitos do usuário',
    body: [
      'O usuário pode solicitar a correção, atualização ou exclusão de seus dados pessoais entrando em contato pelos canais oficiais da empresa.',
    ],
  },
  {
    title: '8. Contato',
    body: [
      'Em caso de dúvidas sobre esta Política de Privacidade ou sobre o uso de dados pessoais, entre em contato com:',
      'MSG Transfer Turismo',
      'Serra Gaúcha - RS',
      'WhatsApp: +55 51 9992-0055',
    ],
  },
  {
    title: '9. Alterações nesta política',
    body: [
      'Esta Política de Privacidade poderá ser atualizada periodicamente. Recomendamos que o usuário revise esta página sempre que acessar o site.',
    ],
  },
];

function Hero() {
  return (
    <section
      id="topo"
      className="relative min-h-[720px] overflow-hidden bg-forest text-white sm:min-h-[760px]"
    >
      <img
        src="/images/hero-canela.jpg"
        alt="Catedral de Pedra em Canela sob céu azul"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-hero-shade" />
      <Header />

      <div className="section-shell relative z-10 flex min-h-[720px] items-end pb-14 pt-32 sm:min-h-[760px] sm:pb-20 lg:items-center lg:pb-0">
        <div className="max-w-3xl animate-fade-up">
          <p className="eyebrow text-gold">Transfer e city tour em Gramado e Canela</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-bold leading-[0.98] text-balance sm:text-7xl lg:text-8xl">
            MSG Transfer Turismo
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-xl">
            Experiências privativas na Serra Gaúcha com conforto, pontualidade e um
            atendimento pensado para transformar deslocamentos em parte da viagem.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton>Falar no WhatsApp</CTAButton>
            <a
              href="#roteiros"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-white/35 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition hover:border-gold hover:text-gold"
            >
              Ver roteiros
            </a>
          </div>
        </div>

        <div className="absolute bottom-5 right-5 hidden max-w-xs rounded-md border border-white/16 bg-white/12 p-4 backdrop-blur-md lg:block">
          <p className="text-sm font-semibold text-white">Gramado, Canela e Serra Gaúcha</p>
          <p className="mt-1 text-xs leading-5 text-white/70">
            Transfers, city tours e roteiros personalizados para casais, famílias e grupos.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="bg-linen py-20 sm:py-28">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Serviços"
          title="Deslocamentos com a calma que a sua viagem merece"
          description="Da chegada ao último passeio, cada trajeto é combinado com clareza, cuidado e atenção aos detalhes."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="animate-fade-up rounded-lg border border-forest/10 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-gold/60"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-forest text-gold">
                  <Icon aria-hidden="true" size={24} />
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-forest">{service.title}</h3>
                <p className="mt-3 leading-7 text-ink/70">{service.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="bg-cream py-20 sm:py-28">
      <div className="section-shell">
        <SectionTitle
          align="center"
          eyebrow="Galeria"
          title="Cenários reais da Serra Gaúcha"
          description="Imagens de Gramado e Canela usadas para valorizar a autenticidade dos roteiros."
        />

        <div className="mt-12 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item) => (
            <figure
              key={item.src}
              className={`group relative overflow-hidden rounded-lg bg-forest shadow-soft ${item.span || ''}`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/88 to-transparent px-4 pb-4 pt-12 text-sm font-bold text-white">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Routes() {
  return (
    <section id="roteiros" className="bg-forest py-20 text-white sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow">Roteiros</p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Passeios desenhados ao redor do seu tempo
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/74">
            O roteiro pode ser objetivo, contemplativo, romântico, familiar ou focado em
            atrações específicas. A MSG ajusta o percurso para a sua viagem render melhor.
          </p>
          <CTAButton className="mt-8">Montar meu roteiro</CTAButton>
        </div>

        <div className="grid gap-4">
          {routes.map((route, index) => (
            <div
              key={route}
              className="rounded-lg border border-white/12 bg-white/8 p-5 transition duration-300 hover:border-gold/60 hover:bg-white/12"
            >
              <div className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gold text-sm font-black text-forest">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="leading-7 text-white/82">{route}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  return (
    <section className="bg-linen py-20 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Diferenciais"
              title="Atendimento discreto, elegante e pontual"
              description="Uma operação enxuta, direta e humana para quem quer viajar bem sem perder tempo com improvisos."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {differentials.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="rounded-lg border border-forest/10 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-gold/60"
                >
                  <Icon className="text-gold" aria-hidden="true" size={28} />
                  <p className="mt-5 text-lg font-extrabold leading-7 text-forest">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="section-shell">
        <SectionTitle
          align="center"
          eyebrow="Depoimentos"
        title="Viagens conduzidas com cuidado"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-lg bg-white p-7 shadow-soft">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} aria-hidden="true" size={17} fill="currentColor" />
                ))}
              </div>
              <p className="mt-5 leading-7 text-ink/72">"{testimonial.text}"</p>
              <p className="mt-6 font-extrabold text-forest">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="bg-linen py-20 sm:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionTitle
          eyebrow="FAQ"
          title="Perguntas frequentes"
          description="As principais dúvidas antes de reservar seu transfer ou city tour."
        />
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg border border-forest/10 bg-white p-5 shadow-soft"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-extrabold text-forest">
                {faq.question}
                <Sparkles
                  className="shrink-0 text-gold transition group-open:rotate-45"
                  aria-hidden="true"
                  size={20}
                />
              </summary>
              <p className="mt-4 leading-7 text-ink/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const handleFinalImageError = (event) => {
    event.currentTarget.src = '/images/portal-gramado-noite.jpg';
  };

  return (
    <section className="relative flex min-h-[580px] items-center overflow-hidden bg-forest py-28 text-white sm:min-h-[680px] sm:py-36 lg:py-44">
      <img
        src="/images/lumi-experience-gramado.jpg"
        alt="Lumni Experience Gramado"
        onError={handleFinalImageError}
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/75 to-forest/82" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,61,43,0.08),rgba(20,40,29,0.58))]" />
      <div className="section-shell relative z-10 text-center">
        <div className="mx-auto max-w-4xl">
        <p className="eyebrow drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">Reserve com a MSG</p>
        <h2 className="mx-auto mt-4 max-w-4xl font-display text-5xl font-bold leading-[1.02] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)] sm:text-7xl lg:text-8xl">
          Sua experiência em Gramado e Canela começa pelo trajeto certo
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-lg font-medium leading-8 text-white/88 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:text-xl">
          Envie sua data, quantidade de passageiros e destinos desejados para receber uma
          proposta personalizada pelo WhatsApp.
        </p>
        <CTAButton className="mt-10 animate-float">Chamar no WhatsApp</CTAButton>
        </div>
      </div>
    </section>
  );
}

function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-linen text-ink">
      <section className="bg-forest py-8 text-white">
        <div className="section-shell flex items-center justify-between gap-4">
          <a href="#topo" className="focus-ring rounded-md">
            <img
              src="/images/logo-msg.png"
              alt="MSG Transporte e Turismo"
              className="h-20 w-20 rounded-md bg-cream object-cover p-1.5 shadow-soft sm:h-24 sm:w-24"
            />
          </a>
          <a
            href="#topo"
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/25 px-4 py-2 text-sm font-bold text-white transition hover:border-gold hover:text-gold"
          >
            <ArrowLeft aria-hidden="true" size={18} />
            Voltar
          </a>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="section-shell">
          <article className="mx-auto max-w-4xl rounded-lg border border-forest/10 bg-white px-6 py-9 shadow-soft sm:px-10 sm:py-12 lg:px-14">
            <p className="eyebrow">MSG Transfer Turismo</p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-forest sm:text-6xl">
              Política de Privacidade
            </h1>
            <p className="mt-3 text-sm font-semibold text-ink/62">
              Última atualização: {PRIVACY_LAST_UPDATED}
            </p>

            <p className="mt-8 text-lg leading-8 text-ink/76">
              A MSG Transfer Turismo valoriza a privacidade dos visitantes e clientes.
              Esta Política de Privacidade explica como coletamos, usamos e protegemos as
              informações fornecidas por meio deste site e dos canais de atendimento.
            </p>

            <div className="mt-10 space-y-9">
              {privacySections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-2xl font-extrabold text-forest">{section.title}</h2>
                  <div className="mt-4 space-y-4 text-base leading-8 text-ink/74">
                    {section.body?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.list ? (
                      <ul className="list-disc space-y-2 pl-6">
                        {section.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                    {section.after ? <p>{section.after}</p> : null}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 border-t border-forest/10 pt-8">
              <a
                href="#topo"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-forest shadow-gold transition duration-300 hover:bg-[#d6b873]"
              >
                <ArrowLeft aria-hidden="true" size={18} />
                Voltar à página inicial
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-forestDark py-10 text-white">
      <div className="section-shell grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-start">
        <div className="flex items-start gap-4">
          <img
            src="/images/logo-msg.png"
            alt="MSG Transporte e Turismo"
            className="h-14 w-14 rounded-md bg-cream object-cover p-1"
          />
          <div>
            <p className="font-extrabold">MSG Transfer Turismo</p>
            <p className="mt-1 text-sm text-white/62">Serra Gaúcha - RS</p>
            <a
              href="https://wa.me/5551999920055"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-sm font-semibold text-gold transition hover:text-white"
            >
              WhatsApp: +55 51 9992-0055
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-sm text-white/66 md:items-end">
          <p>Transfer, turismo, city tour e passeios na Serra Gaúcha.</p>
          <a
            href="#politica-de-privacidade"
            className="font-semibold text-white underline decoration-gold/60 underline-offset-4 transition hover:text-gold"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [isPrivacyPage, setIsPrivacyPage] = useState(
    () => window.location.hash === '#politica-de-privacidade',
  );

  useEffect(() => {
    const syncRoute = () => {
      const nextIsPrivacyPage = window.location.hash === '#politica-de-privacidade';

      setIsPrivacyPage(nextIsPrivacyPage);

      if (nextIsPrivacyPage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '#topo') {
        window.requestAnimationFrame(() => {
          document.getElementById('topo')?.scrollIntoView({ behavior: 'smooth' });
        });
      }
    };

    syncRoute();
    window.addEventListener('hashchange', syncRoute);

    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  if (isPrivacyPage) {
    return (
      <>
        <PrivacyPolicyPage />
        <Footer />
        <FloatingWhatsApp />
      </>
    );
  }

  return (
    <>
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Routes />
        <Differentials />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
