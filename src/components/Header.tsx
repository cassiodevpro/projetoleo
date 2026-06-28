"use client";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-[5%] py-5 bg-[rgba(11,15,25,0.8)] backdrop-blur-md fixed w-full top-0 z-50 border-b border-white/5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-extrabold text-black text-2xl">
          F
        </div>
        <span className="text-xl font-extrabold tracking-tight">
          FACILITO <span className="text-[#00E5FF]">SMART</span>
        </span>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://www.instagram.com/leocelularesdf/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9CA3AF] hover:text-[#E1306C] transition-colors duration-200 text-2xl"
          aria-label="Instagram"
        >
          <i className="fa-brands fa-instagram" />
        </a>
        <a
          href="https://wa.me/5561995638827?text=vim%20do%20site%20e%20quero%20saber%20mais%20sobre%20o%20produto"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9CA3AF] hover:text-[#25D366] transition-colors duration-200 text-2xl"
          aria-label="WhatsApp"
        >
          <i className="fa-brands fa-whatsapp" />
        </a>
      </div>
    </header>
  );
}
