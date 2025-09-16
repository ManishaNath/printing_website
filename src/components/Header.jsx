// /frontend/src/components/Header.jsx
import logo from "../assets/logo.png"; // header logo only

export default function Header() {
  const items = [
    ["#home", "Home"],
    ["#about", "About"],
    ["#services", "Services"],
    ["#clients", "Clients"],
    ["#enquiry", "Enquiry"],
    ["#contact", "Contact"],
  ];
  return (
    <header className="relative header-diagonal header-ribbon header-glass border-b">
      <div className="container flex items-center justify-between py-5 md:py-6">
        <a
          href="#home"
          className="flex items-center gap-3 font-semibold text-base sm:text-lg md:text-xl"
        >
          <img
            src={logo}
            alt="Sri Lakshmi Power Printers"
            className="h-14 w-14 sm:h-16 sm:w-16 md:h-[4.5rem] md:w-[4.5rem] rounded-xl border object-contain bg-transparent"
            onError={(e) => {
              e.currentTarget.outerHTML =
                '<svg width="36" height="36" viewBox="0 0 24 24" aria-hidden fill="currentColor"><path d="M5 3h14v4H5zM3 9h18v4H3zM5 15h14v6H5z"/></svg>';
            }}
          />
          Sri Lakshmi Power Printers
        </a>
        <nav className="hidden gap-6 md:flex">
          {items.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-base font-medium text-gray-700 hover:text-black"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#enquiry"
          className="btn btn-primary !px-5 !py-2.5 !text-base"
        >
          Get a Quote
        </a>
      </div>
    </header>
  );
}

