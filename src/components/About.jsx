// /frontend/src/components/About.jsx
export default function About() {
  return (
    <section id="about" className="bg-[#fff8f1]">
      <div className="container py-16">
        <h2 className="text-2xl font-bold">About Us</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <p className="text-gray-700 leading-relaxed">
            Sri Lakshmi Power Printers – the company with 35 years of experience
            In printing. We produce eye‑catching design solutions across sectors
            and focus on flawless execution to win client confidence. Our
            expertise spans Creative Graphic Design, including Industrial
            printing, Screen print, Binding stickers, Collateral, Brochures,
            Catalogues and more.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We welcome the opportunity to understand your business requirements
            and add value through efficient handling of all your Corporate
            Designing / Animation needs. We continuously research and evolve our
            products to meet market demands, serving multiple states with
            quality that top multinationals trust.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            "Robust infrastructure",
            "Quality monitoring",
            "Affordable pricing",
            "On‑time delivery",
          ].map((t) => (
            <div key={t} className="card p-4 text-sm">
              <div className="font-semibold">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

