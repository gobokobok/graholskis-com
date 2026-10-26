// Progressive enhancement for the contact form and the email capture.
// With a Web3Forms key the form posts in the background. Without one it opens an email instead.
import { contactEmail, web3formsKey } from "../config";

function mailtoFallback(subject: string, body: string) {
  const href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
}

export function wireForm(form: HTMLFormElement) {
  const status = form.querySelector<HTMLElement>("[data-status]");
  const button = form.querySelector<HTMLButtonElement>("button[type=submit]");
  const subject = form.dataset.subject ?? "Message from graholskis.com";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    if (data.get("botcheck")) return;
    const lines = [...data.entries()]
      .filter(([k]) => !["botcheck", "access_key"].includes(k))
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");

    if (!web3formsKey) {
      mailtoFallback(subject, lines);
      return;
    }

    data.append("access_key", web3formsKey);
    data.append("subject", subject);
    if (button) button.disabled = true;
    if (status) status.textContent = "Sending...";
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (!json.success) throw new Error(json.message || "Failed");
      form.reset();
      if (status) status.textContent = form.dataset.success ?? "Thank you. I will reply soon.";
    } catch {
      if (status) status.textContent = `Sending failed. Please email ${contactEmail} instead.`;
    } finally {
      if (button) button.disabled = false;
    }
  });
}

document.querySelectorAll<HTMLFormElement>("form[data-form]").forEach(wireForm);
