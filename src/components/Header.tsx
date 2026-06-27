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
    </header>
  );
}
