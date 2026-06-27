export default function Hero() {
  return (
    <section
      className="pt-40 pb-20 px-[5%] text-center"
      style={{
        background:
          "radial-gradient(circle at top, rgba(0,82,255,0.15) 0%, transparent 60%)",
      }}
    >
      <h1 className="text-5xl md:text-6xl font-extrabold mb-5 tracking-tight leading-tight">
        Soluções Inteligentes para o{" "}
        <span className="text-[#00E5FF]">Varejo</span>
      </h1>
      <p className="text-lg text-[#9CA3AF] max-w-xl mx-auto leading-relaxed">
        Conecte sua empresa ao futuro da automação com o ecossistema integrado
        Facilito Smart.
      </p>
    </section>
  );
}
