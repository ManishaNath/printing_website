// /frontend/src/components/Hero.jsx
export default function Hero() {
  return (
    <section
      id="home"
      className="hero-gradient bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container pt-10 pb-8 md:pt-16 md:pb-12">
        <div className="max-w-4xl">
          <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs bg-white/70">
            Since 1985 · 35+ years
          </span>

          {/* Revert to solid heading (no gradient), prevent clipping & allow wrap */}
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-slate-900 mb-4 md:mb-6">
            Designing & Printing that elevates your brand.
          </h1>

          <p className="mt-1 md:mt-2 text-gray-700 max-w-2xl">
            From brochures and tags to signage and boxes, we deliver quality and
            on-time execution for Hosur and beyond.
          </p>

          <div className="mt-5 flex gap-3">
            <a href="#enquiry" className="btn btn-primary">
              Start Enquiry
            </a>
            <a href="#services" className="btn btn-ghost">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
