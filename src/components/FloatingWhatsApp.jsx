import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from './CTAButton.jsx';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chamar a MSG Transfer Turismo no WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_18px_38px_rgba(37,211,102,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-[#1fbd59] sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <MessageCircle aria-hidden="true" size={30} strokeWidth={2.5} />
    </a>
  );
}
