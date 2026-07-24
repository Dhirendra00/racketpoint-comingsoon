import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Racket Point Nepal | Premium Sports Store in Nepal" },
      {
        name: "description",
        content:
          "Racket Point Nepal is Nepal's trusted destination for premium badminton rackets, shuttlecocks, shoes, grips, accessories, and sports equipment. Retail and wholesale available.",
      },
      { property: "og:title", content: "Racket Point Nepal | Premium Sports Store in Nepal" },
      {
        property: "og:description",
        content:
          "Nepal's premium sports destination. Badminton rackets, shuttlecocks, shoes, grips and accessories. Retail & wholesale.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Racket Point Nepal" },
      {
        name: "twitter:description",
        content: "Nepal's premium sports destination — launching soon.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: ComingSoon,
});

const FACEBOOK_URL = "https://www.facebook.com/share/1DVDTFHHn9/?mibextid=wwXIfr";
const INSTAGRAM_URL = "https://www.instagram.com/racketpointnepal?igsh=MWQ0MjB2eGlxd3hqNg%3D%3D&utm_source=qr";

function ComingSoon() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-carbon">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full animate-glow-drift"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.14), rgba(255,255,255,0.03) 60%, transparent 75%)",
          filter: "blur(20px)",
        }}
      />
      {/* Diagonal accent lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(255,255,255,0.9) 0 1px, transparent 1px 120px)",
        }}
      />
      {/* Racket mesh pattern (blended) */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-40 -bottom-40 h-[720px] w-[720px] opacity-[0.06]"
        viewBox="0 0 200 200"
      >
        <defs>
          <pattern id="mesh" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.4" />
          </pattern>
        </defs>
        <ellipse cx="100" cy="100" rx="90" ry="90" fill="url(#mesh)" />
        <ellipse cx="100" cy="100" rx="90" ry="90" fill="none" stroke="white" strokeWidth="0.6" />
      </svg>

      {/* Top bar */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
        <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Est. Nepal
        </span>
        <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-metallic">
          Launching Soon
        </span>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-8 pb-20 text-center sm:pt-16">
        <div className="animate-fade-up">
          <div className="relative animate-float-slow">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-full blur-2xl"
              style={{ background: "radial-gradient(closest-side, rgba(255,255,255,0.25), transparent 70%)" }}
            />
            <img
              src={logo.url}
              alt="Racket Point Nepal — Badminton House"
              width={220}
              height={220}
              className="h-40 w-40 rounded-full object-cover ring-1 ring-white/10 sm:h-52 sm:w-52"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="mt-10 flex items-center gap-3 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="h-px w-8 bg-white/30" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">
            Racket Point Nepal
          </span>
          <span className="h-px w-8 bg-white/30" />
        </div>

        <h1
          className="mt-6 text-balance text-4xl font-black leading-[1.05] tracking-tight text-metallic sm:text-6xl md:text-7xl animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Nepal's Premium
          <br />
          Sports Destination
        </h1>

        <p
          className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Our website is currently under development. We're building an amazing shopping
          experience for athletes across Nepal.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.5)]"
          >
            <Facebook className="h-4 w-4" strokeWidth={2.4} />
            Visit Facebook
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100"
            />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.08]"
          >
            <Instagram className="h-4 w-4" strokeWidth={2.4} />
            Follow on Instagram
          </a>
        </div>

        {/* Category strip */}
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <span>Rackets</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>Shuttlecocks</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>Shoes</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>Grips</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>Accessories</span>
        </div>
      </section>

      {/* Contact */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-16">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <a
            href="tel:+9779749809000"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur transition hover:border-white/25 hover:bg-white/[0.05]"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.04]">
              <Phone className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Call
              </div>
              <div className="mt-1 truncate text-sm font-semibold text-white">
                +977 9749809000
              </div>
            </div>
          </a>
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.04]">
              <MapPin className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Visit
              </div>
              <div className="mt-1 truncate text-sm font-semibold text-white">
                Kathmandu, Nepal
              </div>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Facebook"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.03] text-white transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.08]"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.03] text-white transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.08]"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <span>© 2026 Racket Point Nepal. All Rights Reserved.</span>
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Premium Sports · Nepal
          </span>
        </div>
      </footer>
    </main>
  );
}
