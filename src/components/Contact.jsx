// /frontend/src/components/Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50">
      <div className="container py-16">
        <h2 className="text-2xl font-bold">Contact</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="card p-4">
            <div className="font-semibold">Address</div>
            <p className="text-sm mt-1">
              No.12, Denkanikotta Rd, Prakash Nagar, Hosur, Tamil Nadu 635109
            </p>
          </div>
          <div className="card p-4">
            <div className="font-semibold">Email</div>
            <a
              className="text-sm text-blue-600"
              href="mailto:gopinath.print@gmail.com"
            >
              gopinath.print@gmail.com
            </a>
          </div>
          <div className="card p-4">
            <div className="font-semibold">Phone</div>
            <div className="text-sm">
              <a className="text-blue-600" href="tel:+919487015331">
                +91 94870 15331
              </a>
              <br />
              <a className="text-blue-600" href="tel:+919487162301">
                +91 94871 62301
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <iframe
            title="Sri Lakshmi Power Printers Map"
            className="w-full h-72 rounded-2xl border"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=No.12,+Denkanikottai+Rd,+Prakash+Nagar,+Hosur,+Tamil+Nadu+635109&output=embed"
          ></iframe>
        </div>
        <p className="mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Sri Lakshmi Power Printers. All rights
          reserved.
        </p>
      </div>
      {/* <button
        id="kollect-pay-btn"
        style={{ padding: "5px 20px", borderRadius: "7px" }}
      >
        Pay using Kollect
      </button> */}
    </section>
  );
}
