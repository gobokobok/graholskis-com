// Single place for links and contact details. Placeholders are marked TODO.
export const site = {
  name: "Aleksandrs Graholskis",
  role: "AI Builder & AI Implementation Lead",
  email: "alex@graholskis.com", // TODO: confirm
  calendly: "", // TODO: e.g. "https://calendly.com/graholskis/intro"; falls back to mailto
  github: "https://github.com/gobokobok", // TODO: confirm profile
  linkedin: "https://www.linkedin.com/in/aleksandrs-graholskis/",
};

export const bookHref =
  site.calendly || `mailto:${site.email}?subject=Intro call`;
export const bookLabel = site.calendly ? "Book an intro call" : "Email me";
