export default function WhatsAppFloat({ phone }: { phone: string }) {
  return (
    <a
      href={`https://wa.me/${phone}?text=vim%20do%20site%20e%20quero%20saber%20mais%20sobre%20o%20produto`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-[#25D366] text-white w-15 h-15 rounded-full flex items-center justify-center text-3xl shadow-[0_4px_15px_rgba(0,0,0,0.4)] z-50 transition-transform duration-200 hover:scale-110 w-[60px] h-[60px]"
      aria-label="Falar pelo WhatsApp"
    >
      <i className="fa-brands fa-whatsapp" />
    </a>
  );
}
