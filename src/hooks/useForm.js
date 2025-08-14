// D:\GITHUB\printing_website_frontend\src\hooks\useForm.js
import { useMemo, useState } from "react";

export const SERVICES = [
  "Designing",
  "2D & 3D Animation",
  "Header Card",
  "Catalogue",
  "Tags",
  "Brochures",
  "U Board",
  "Invitation card",
  "Bags (Paper/Cloth/Jute)",
  "Sign Board",
  "Barcode",
  "RF Labels",
  "Boxes – Hard & Soft Board",
  "Outdoor Publicity Material",
];

const PHONE_RE = /^[+]?[\d\s\-()]{7,20}$/;

export function useEnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    city: "",        // NEW
    service: "",
    quantity: "",
    notes: "",
  });

  const errors = useMemo(() => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    const hasEmail = !!form.email.trim();
    const hasPhone = !!form.phone.trim();
    if (!hasEmail && !hasPhone) {
      e.email = "Provide email or phone";
      e.phone = "Provide email or phone";
    }
    if (hasEmail && !(form.email.includes("@") && form.email.includes("."))) e.email = "Invalid email";
    if (hasPhone && !PHONE_RE.test(form.phone)) e.phone = "Invalid phone number";
    if (!form.service) e.service = "Select a service";
    if (!form.quantity || Number(form.quantity) <= 0) e.quantity = "Quantity must be > 0";
    if (form.city && form.city.length > 80) e.city = "City too long";
    return e;
  }, [form]);

  return { form, setForm, errors };
}
