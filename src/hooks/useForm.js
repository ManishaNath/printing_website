// /frontend/src/hooks/useForm.js
import { useMemo, useState } from "react";

export const SERVICES = [
  "Designing",
  "2D & 3D Animation",
  "Header Card",
  "Catalogue",
  "Tags",
  "Brochures",
  "Flex printing",
  "U Board",
  "Invitation card",
  "Bags (Paper/Cloth/Jute)",
  "Sign Board",
  "Barcode",
  "RF Labels",
  "Boxes – Hard & Soft Board",
  "Outdoor Publicity Material",
];

export function useEnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    quantity: "",
    notes: "",
  });

  const errors = useMemo(() => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() && !form.phone.trim()) {
      e.email = "Provide email or phone";
      e.phone = "Provide email or phone";
    }
    if (form.email && !/^\S+@\S+\.[\w-]+$/.test(form.email))
      e.email = "Invalid email";
    if (!form.service) e.service = "Select a service";
    if (!form.quantity || Number(form.quantity) <= 0)
      e.quantity = "Quantity must be > 0";
    return e;
  }, [form]);

  return { form, setForm, errors };
}
