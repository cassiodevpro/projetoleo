import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  badge: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  buttonLabel: string;
  buttonIcon: string;
  href?: string;
}

export default function ServiceCard({
  badge,
  title,
  description,
  imageUrl,
  imageAlt,
  buttonLabel,
  buttonIcon,
  href = "#",
}: ServiceCardProps) {
  return (
    <div className="bg-[#161C2A] rounded-2xl overflow-hidden border border-white/[0.03] flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00E5FF]/30">
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover border-b-2 border-white/[0.02]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className="self-start bg-[#00E5FF]/10 text-[#00E5FF] px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wide">
          {badge}
        </span>

        <h3 className="text-xl font-semibold mb-3">{title}</h3>

        <p className="text-[#9CA3AF] text-sm leading-relaxed mb-5 flex-1">
          {description}
        </p>

        <Link
          href={href}
          className="flex items-center justify-center gap-2.5 w-full py-3 bg-[#0052FF] hover:bg-[#0043D5] text-white rounded-lg font-semibold text-sm transition-colors duration-200 mt-auto"
        >
          <i className={buttonIcon} />
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
}
