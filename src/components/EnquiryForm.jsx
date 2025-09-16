// D:\GITHUB\printing_website_frontend\src\components\EnquiryForm.jsx
import { useState } from "react";
import { useEnquiryForm, SERVICES } from "../hooks/useForm";
import { submitEnquiry } from "../services/api";

export default function EnquiryForm() {
  const { form, setForm, errors } = useEnquiryForm();
  const [submitting, setSubmitting] = useState(false);
  const [banner, setBanner] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    if (Object.keys(errors).length) return;
    setSubmitting(true);
    try {
      const payload = { ...form, quantity: Number(form.quantity) };
      await submitEnquiry(payload);
      setBanner({ kind: "success", msg: "Thank you! Our team will contact you shortly." });
      setForm((f) => ({ ...f, notes: "", quantity: "" }));
    } catch (err) {
      setBanner({ kind: "error", msg: err.message || "Something went wrong" });
    } finally {
      setSubmitting(false);
      setTimeout(() => setBanner(null), 3500);
    }
  }

  return (
    <section id="enquiry" className="bg-[#f3fbf7]">
      <div className="container py-16">
        <h2 className="text-2xl font-bold">Enquiry</h2>
        <p className="mt-2 text-gray-600">Tell us what you need. We'll share a tailored quote.</p>

        {banner && (
          <div className={`mt-4 rounded-xl px-4 py-3 text-sm text-white ${banner.kind === "success" ? "bg-green-600" : "bg-red-600"}`}>
            {banner.msg}
          </div>
        )}

        <form onSubmit={onSubmit} className="mt-6 grid gap-8 md:grid-cols-2">
          <div className="card p-4 shadow-soft">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1">
                <label className="text-sm">Name *</label>
                <input className={`mt-1 w-full rounded-xl border p-2 ${errors.name ? "border-red-500" : ""}`}
                  value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>

              <div className="col-span-2 md:col-span-1">
                <label className="text-sm">Company</label>
                <input className="mt-1 w-full rounded-xl border p-2"
                  value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
              </div>

              <div className="col-span-2 md:col-span-1">
                <label className="text-sm">Email</label>
                <input className={`mt-1 w-full rounded-xl border p-2 ${errors.email ? "border-red-500" : ""}`}
                  value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>

              <div className="col-span-2 md:col-span-1">
                <label className="text-sm">Phone</label>
                <input inputMode="tel" className={`mt-1 w-full rounded-xl border p-2 ${errors.phone ? "border-red-500" : ""}`}
                  placeholder="+91 90000 00000"
                  value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
              </div>

              <div className="col-span-2 md:col-span-1">
                <label className="text-sm">City / Location</label>
                <input className={`mt-1 w-full rounded-xl border p-2 ${errors.city ? "border-red-500" : ""}`}
                  placeholder="Hosur"
                  value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
                {errors.city && <p className="mt-1 text-xs text-red-600">{errors.city}</p>}
              </div>

              <div className="col-span-2 md:col-span-1">
                <label className="text-sm">Service *</label>
                <select className={`mt-1 w-full rounded-xl border p-2 ${errors.service ? "border-red-500" : ""}`}
                  value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                  <option value="">Select…</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && <p className="mt-1 text-xs text-red-600">{errors.service}</p>}
              </div>

              <div>
                <label className="text-sm">Quantity *</label>
                <input type="number" min={1}
                  className={`mt-1 w-full rounded-xl border p-2 ${errors.quantity ? "border-red-500" : ""}`}
                  value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} />
                {errors.quantity && <p className="mt-1 text-xs text-red-600">{errors.quantity}</p>}
              </div>

              <div className="col-span-2">
                <label className="text-sm">Notes</label>
                <textarea rows="4" className="mt-1 w-full rounded-xl border p-2"
                  placeholder="Any specs or links…" value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}></textarea>
              </div>

              <div className="col-span-2 flex items-center justify-between">
                <p className="text-xs text-gray-500">By submitting you agree to our terms.</p>
                <button disabled={submitting || Object.keys(errors).length > 0}
                  className={`btn ${submitting || Object.keys(errors).length ? "bg-gray-400 text-white" : "btn-primary"}`}>
                  {submitting ? "Submitting…" : "Submit Enquiry"}
                </button>
              </div>
            </div>
          </div>

          <div className="card p-4">
            <h3 className="font-semibold">Preview</h3>
            <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
              {[["Service", form.service || "—"], ["Quantity", form.quantity || "—"], ["City", form.city || "—"]]
                .map(([k, v]) => (
                  <div key={k} className="rounded-xl border p-3">
                    <dt className="text-gray-500">{k}</dt><dd className="font-medium">{v}</dd>
                  </div>
                ))}
            </dl>
            <div className="mt-3 rounded-xl border p-3 text-sm">
              <div className="font-medium">{form.name || "Your name"}</div>
              <div className="text-gray-600">{form.company || "Company"}</div>
              <div className="text-gray-600">
                {form.email || "email@example.com"} {form.phone && `• ${form.phone}`}
              </div>
              {form.notes && <div className="mt-2 text-gray-800">{form.notes}</div>}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

