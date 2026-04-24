"use client";

import Image from "next/image";
import Link from "next/link";
import { COMPANY_INFO, FOOTER_LINKS } from "@/lib/constants";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/cn";
import footerLogo from "../../../public/images/footer-logo.webp";

/*
 * Clouds start covering the NALA letters area (startLeft), then drift
 * outward to the edges (revealedLeft) to reveal the text — but not fully
 * off-screen so they remain partially visible as a soft frame.
 * direction: -1 = drifts left, 1 = drifts right.
 */
const FOOTER_CLOUDS: {
  src: string;
  top: string;
  startLeft: string;
  revealedLeft: string;
  direction: -1 | 1;
  width: string;
  duration: number;
  delay: number;
}[] = [
  // Left-drifting clouds (cover center → drift fully off-screen left)
  { src: "/images/cloud.webp", top: "0%", startLeft: "10%", revealedLeft: "-55%", direction: -1, width: "40%", duration: 3000, delay: 0 },
  { src: "/images/cloud3.webp", top: "15%", startLeft: "15%", revealedLeft: "-52%", direction: -1, width: "48%", duration: 2800, delay: 200 },
  { src: "/images/cloud5.webp", top: "30%", startLeft: "8%", revealedLeft: "-58%", direction: -1, width: "52%", duration: 3100, delay: 100 },
  { src: "/images/cloud.webp", top: "45%", startLeft: "12%", revealedLeft: "-54%", direction: -1, width: "44%", duration: 3300, delay: 300 },
  // Right-drifting clouds (cover center → drift fully off-screen right)
  { src: "/images/cloud2.webp", top: "5%", startLeft: "45%", revealedLeft: "105%", direction: 1, width: "42%", duration: 3200, delay: 100 },
  { src: "/images/cloud4.webp", top: "20%", startLeft: "40%", revealedLeft: "102%", direction: 1, width: "50%", duration: 3400, delay: 50 },
  { src: "/images/cloud6.webp", top: "35%", startLeft: "42%", revealedLeft: "108%", direction: 1, width: "46%", duration: 2900, delay: 200 },
  { src: "/images/cloud2.webp", top: "50%", startLeft: "38%", revealedLeft: "104%", direction: 1, width: "48%", duration: 3000, delay: 350 },
  // Inner fill clouds (cover the center gap → drift fully out)
  { src: "/images/cloud3.webp", top: "10%", startLeft: "25%", revealedLeft: "-52%", direction: -1, width: "38%", duration: 3600, delay: 500 },
  { src: "/images/cloud4.webp", top: "25%", startLeft: "30%", revealedLeft: "106%", direction: 1, width: "40%", duration: 3500, delay: 400 },
  { src: "/images/cloud5.webp", top: "42%", startLeft: "28%", revealedLeft: "-54%", direction: -1, width: "42%", duration: 3700, delay: 550 },
];

export default function Footer() {
  const { ref, isVisible } = useIntersectionObserver({
    triggerOnce: false,
    threshold: 0.15,
  });

  return (
    <footer ref={ref} className="relative overflow-hidden bg-light">
      {/* ── Top row: logo, NDIS, email, social, company ── */}
      {/* ── Mobile layout ── */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-[1.5rem] pt-[3rem] text-center sm:px-[2rem] sm:pt-[4rem] md:hidden">
        {/* Logo */}
        <Link href="/" className="relative h-[4.5rem] w-[3.5rem] shrink-0">
          <Image src={footerLogo} alt="NALA Properties" fill placeholder="blur" className="object-contain" />
        </Link>


        {/* Contact */}
        <div>
          <h3 className="font-outfit text-[1.25rem] font-medium leading-[1.26em] !text-[#3040ad]">Contact</h3>
          <a href={`mailto:${COMPANY_INFO.email}`} className="mt-3 block font-outfit text-[0.875rem] text-body">{COMPANY_INFO.email}</a>
          <a href="tel:0480850225" className="block font-outfit text-[0.875rem] text-body">0480 850 225</a>
          <p className="mt-2 font-outfit text-[0.875rem] text-body">Suite 320, 9 Union St,<br />Pyrmont NSW 2009</p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-outfit text-[1.25rem] font-medium leading-[1.26em] !text-[#3040ad]">Company</h3>
          <ul className="mt-3 flex flex-col gap-1">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-outfit text-[0.875rem] text-body">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Desktop layout ── */}
      <div className="relative z-10 mx-auto hidden md:flex md:items-start md:px-[clamp(1.5rem,4.17vw,5rem)] md:pt-[clamp(3rem,6vw,7.25rem)] short:pt-[7vh]">
        {/* Col 1: Logo */}
        <div className="flex-1 pl-4">
          <Link
            href="/"
            className={cn(
              "relative block transition-all duration-[1500ms] ease-out md:h-[clamp(4.5rem,6.25vw,7.5rem)] md:w-[clamp(3.5rem,5.36vw,6.44rem)] short:h-[9vh] short:w-[7vh]",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            )}
          >
            <Image src={footerLogo} alt="NALA Properties" fill placeholder="blur" className="object-contain" />
          </Link>
        </div>

        {/* Col 2: Empty */}
        <div className="flex-[1.5]" />

        {/* Col 3: Contact */}
        <FooterColumn title="Contact" isVisible={isVisible} delay="delay-300" className="flex-1 pl-4">
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="block font-outfit text-[clamp(0.875rem,1.04vw,1.25rem)] leading-[0.8em] text-body transition-colors duration-300 hover:text-primary mb-2"
          >
            {COMPANY_INFO.email}
          </a>
          <a
            href="tel:0480850225"
            className="block font-outfit text-[clamp(0.875rem,1.04vw,1.25rem)] leading-[1.6em] text-body transition-colors duration-300 hover:text-primary"
          >
            0480 850 225
          </a>
          <p className="mt-2 font-outfit text-[clamp(0.875rem,1.04vw,1.25rem)] leading-[1.6em] text-body">
            Suite 320, 9 Union St,<br />Pyrmont NSW 2009
          </p>
        </FooterColumn>

        {/* Col 4: Company */}
        <FooterColumn title="Company" isVisible={isVisible} delay="delay-700" className="flex-1 pl-4">
          <ul className="flex flex-col">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-outfit text-[clamp(0.875rem,1.04vw,1.25rem)] leading-[0.8em] text-body transition-colors duration-300 hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </FooterColumn>
      </div>

      {/* ── NALA letters + property collage + clouds + copyright overlay ── */}
      <div className="relative mt-4 short:mt-[16vh] h-[10rem] w-full sm:h-[clamp(14rem,28vw,35rem)] lg:h-[clamp(20rem,28vw,38rem)] xl:h-[clamp(26rem,30vw,45rem)] short:h-[45vh]">
        {/* Layer 1: NALA text — shrinks from 142% to 96.5% width */}
        <img
          src="/images/nala-letters.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-1/2 max-w-none -translate-x-1/2"
          style={{
            width: isVisible ? "90%" : "125%",
            bottom: "-8%",
            objectFit: "fill",
            transition: "width 2500ms cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
        />

        {/* Layer 2: Property images collage — fades out to reveal NALA */}
        <img
          src="/images/footer-bg-art.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 w-[102%] max-w-none -translate-x-1/2"
          style={{
            opacity: isVisible ? 0 : 1,
            transition: isVisible ? "opacity 2500ms ease-out 400ms" : "none",
          }}
        />

        {/* Layer 2b: Static bottom clouds — hug the very bottom edge */}
        <Image src="/images/cloud3.webp" alt="" width={800} height={400} aria-hidden className="pointer-events-none absolute z-[5]" style={{ bottom: "-38%", left: "-20%", width: "45%", opacity: 0.9 }} />
        <Image src="/images/cloud3.webp" alt="" width={800} height={400} aria-hidden className="pointer-events-none absolute z-[5]" style={{ bottom: "-38%", left: "35%", width: "45%", opacity: 0.9 }} />
        <Image src="/images/cloud5.webp" alt="" width={800} height={400} aria-hidden className="pointer-events-none absolute z-[5]" style={{ bottom: "-22%", left: "-1%", width: "40%", opacity: 0.85 }} />
        <Image src="/images/cloud4.webp" alt="" width={800} height={400} aria-hidden className="pointer-events-none absolute z-[5]" style={{ bottom: "-25%", right: "-10%", width: "45%", opacity: 0.9 }} />
        <Image src="/images/cloud4.webp" alt="" width={800} height={400} aria-hidden className="pointer-events-none absolute z-[5]" style={{ bottom: "60%", right: "-20%", width: "45%", opacity: 0.9 }} />
        <Image src="/images/cloud4.webp" alt="" width={800} height={400} aria-hidden className="pointer-events-none absolute z-[5]" style={{ bottom: "60%", left: "-30%", width: "45%", opacity: 0.9 }} />
        <Image src="/images/cloud6.webp" alt="" width={800} height={400} aria-hidden className="pointer-events-none absolute z-[5]" style={{ bottom: "-22%", left: "1%", width: "40%", opacity: 0.85 }} />
        <Image src="/images/cloud.webp" alt="" width={800} height={400} aria-hidden className="pointer-events-none absolute z-[5]" style={{ bottom: "-38%", left: "1%", width: "42%", opacity: 0.8 }} />

        {/* Layer 3: Clouds — start covering NALA, drift far outward to reveal */}
        {FOOTER_CLOUDS.map((cloud, i) => (
          <Image
            key={i}
            src={cloud.src}
            alt=""
            width={600}
            height={300}
            aria-hidden
            className="pointer-events-none absolute z-10"
            style={{
              top: cloud.top,
              width: cloud.width,
              left: isVisible ? cloud.revealedLeft : cloud.startLeft,
              opacity: isVisible ? 0 : 1,
              transition: isVisible
                ? `left ${cloud.duration}ms cubic-bezier(0.25, 0.1, 0.25, 1) ${cloud.delay}ms, opacity ${cloud.duration * 0.6}ms ease-out ${cloud.delay + 200}ms`
                : "none",
            }}
          />
        ))}

        {/* Layer 4: Copyright — overlays on top of NALA + clouds (desktop), below on mobile */}
        <p
          className={cn(
            "hidden md:block absolute bottom-0 left-0 z-20 w-full py-[clamp(1rem,1.5vw,1.75rem)] short:py-[2vh] text-center font-outfit text-[clamp(0.75rem,0.94vw,1.125rem)] short:text-[1.7vh] text-body transition-all duration-[1500ms] delay-1000 ease-out",
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          )}
        >
          {COMPANY_INFO.copyright}
        </p>
      </div>
      {/* Mobile copyright */}
      <p className="relative z-20 py-4 text-center font-outfit text-[0.75rem] text-body md:hidden">
        {COMPANY_INFO.copyright}
      </p>
    </footer>
  );
}

/* ── Footer column with heading color transition ── */

function FooterColumn({
  title,
  isVisible,
  delay,
  className,
  children,
}: {
  title: string;
  isVisible: boolean;
  delay: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "transition-all duration-[1500ms] ease-out",
        delay,
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className
      )}
    >
      <h3 className="font-outfit text-[clamp(1.25rem,1.875vw,2.25rem)] short:text-[3.4vh] font-medium leading-[1.26em] !text-[#3040ad]">
        {title}
      </h3>
      <div className="mt-[clamp(1rem,1.67vw,2rem)] short:mt-[2.5vh]">{children}</div>
    </div>
  );
}

