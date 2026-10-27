// Edit these three lines with your real details.
const CONTACT = {
  email: "your-email@example.com",
  linkedin: "https://www.linkedin.com/in/your-profile",
  whatsapp: "91XXXXXXXXXX" // country code + number, no + or spaces
};

document.querySelectorAll("[data-email]").forEach(a => {
  a.href = "mailto:" + CONTACT.email; a.textContent = a.dataset.label || CONTACT.email;
});
document.querySelectorAll("[data-linkedin]").forEach(a => a.href = CONTACT.linkedin);
document.querySelectorAll("[data-whatsapp]").forEach(a => a.href = "https://wa.me/" + CONTACT.whatsapp);

const menu = document.getElementById("menu"), list = document.getElementById("nav-list");
if (menu) menu.addEventListener("click", () => {
  const open = list.classList.toggle("open");
  menu.setAttribute("aria-expanded", open);
});

const form = document.getElementById("contact-form");
if (form) form.addEventListener("submit", e => {
  e.preventDefault();
  const d = new FormData(form);
  const body = `Name: ${d.get("name")}\nBrand: ${d.get("brand")}\nInterested in: ${d.get("service")}\n\n${d.get("message")}`;
  location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Enquiry from " + d.get("name"))}&body=${encodeURIComponent(body)}`;
});
