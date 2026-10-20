import emailjs from "@emailjs/browser";

// EmailJS IDs from the original site. The public key is meant to be exposed client-side.
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_hlqy3z6";
const ADMIN_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID || "template_vzbnvob";
const CLIENT_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CLIENT_TEMPLATE_ID || "template_951rn0c";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "09hU4csKxrUYO4zF1";

export async function sendContactEmail(form) {
  const params = {
    client_name: form.name,
    client_email: form.email,
    company_name: form.company || "N/A",
    phone_number: form.phone || "N/A",
    demo_date: "N/A - Contact Form Inquiry",
    product_title: "General Consultation",
    message: form.message,
    description: form.message,
    notes: form.message,
  };
  try {
    const admin = await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, params, PUBLIC_KEY);
    const client = await emailjs.send(SERVICE_ID, CLIENT_TEMPLATE_ID, params, PUBLIC_KEY);
    return admin.status === 200 && client.status === 200;
  } catch (err) {
    console.error("Failed to send emails via EmailJS:", err);
    return false;
  }
}
