// /frontend/src/components/Clients.jsx
const CLIENTS = [
  "LARSEN & TOUBRO",
  "TITAN INDUSTRIES",
  "TITAN JEWELLERY",
  "TITAN PED",
  "ASHOK LEYLAND",
  "HOWDEN SOLYVENT",
  "MINDA GROUP",
  "BIOPLUS",
  "VHL",
];

export default function Clients() {
  return (
    <section id="clients" className="bg-gray-50">
      <div className="container py-16">
        <h2 className="text-2xl font-bold">Clients</h2>
        <p className="mt-2 text-gray-600">
          Trusted by leading manufacturers and brands.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {CLIENTS.map((c) => (
            <div key={c} className="card p-4 text-sm font-medium bg-white/90">
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
