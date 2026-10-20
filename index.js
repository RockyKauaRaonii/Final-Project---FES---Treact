const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Open navigation" : "Close navigation",
  );
  navLinks?.classList.toggle("is-open", !isOpen);
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation");
    navLinks.classList.remove("is-open");
  });
});

const signupForm = document.querySelector("#signup-form");
const formMessage = document.querySelector("#form-message");

signupForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(signupForm).get("email");
  if (typeof email !== "string" || !email.trim()) {
    formMessage.textContent = "Please enter a valid email address.";
    return;
  }
  formMessage.textContent = "Thanks! You're on the list.";
  signupForm.reset();
});

const testimonials = [
  {
    title: "Love the Developer Experience and Design Principles!",
    quote:
      "“The templates gave our team a thoughtful starting point. We were able to customize the details quickly and focus on creating a product our customers love.”",
    name: "Charlotte Hale",
    role: "Director, Delos Inc.",
  },
  {
    title: "A beautiful foundation for our next big idea.",
    quote:
      "“Everything feels considered, from the layouts to the smallest details. We spent less time rebuilding common patterns and more time improving our product.”",
    name: "Adam Cuppy",
    role: "Founder, EventsNYC",
  },
  {
    title: "An experience our whole team can build on.",
    quote:
      "“The components are clear, flexible, and easy to make our own. Treact helped us get from the first concept to a polished launch with confidence.”",
    name: "Sophie Moore",
    role: "Product Lead, Creativix",
  },
];

let activeTestimonial = 0;
const quoteTitle = document.querySelector(".quote-title");
const quoteText = document.querySelector(".quote-text");
const quoteName = document.querySelector(".quote-name");
const quoteRole = document.querySelector(".quote-role");

function showTestimonial(index) {
  activeTestimonial = (index + testimonials.length) % testimonials.length;
  const testimonial = testimonials[activeTestimonial];
  quoteTitle.textContent = testimonial.title;
  quoteText.textContent = testimonial.quote;
  quoteName.textContent = testimonial.name;
  quoteRole.textContent = testimonial.role;
}

document.querySelector(".quote-prev")?.addEventListener("click", () => {
  showTestimonial(activeTestimonial - 1);
});
document.querySelector(".quote-next")?.addEventListener("click", () => {
  showTestimonial(activeTestimonial + 1);
});
