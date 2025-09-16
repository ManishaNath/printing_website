const PRODUCT_RANGE = [
  "Designing",
  "Flex printing",
  "Header Card",
  "Catalogue",
  "Tags",
  "Brochures",
  "U Board",
  "Invitation card",
  "Paper / Cloth / Jute Bags",
  "Sign Board",
  "Barcode",
  "RF Labels",
  "Boxes – Hard Board & Soft Board",
  "Outdoor Publicity Material",
];

export default function Services() {
  return (
    <section id="services" className="bg-[#f4f7ff]">
      <div className="container py-16">
        <h2 className="text-2xl font-bold">Product Range & Services</h2>
        <p className="mt-2 text-gray-600">
          Designed with creativity, carefully planned, and printed after your
          approval.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {PRODUCT_RANGE.map((item) => (
            <div key={item} className="card p-4">
              <div className="font-medium">{item}</div>
              <p className="mt-1 text-sm text-gray-600">
                Custom sizes · Branding matched · Quality assured
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

