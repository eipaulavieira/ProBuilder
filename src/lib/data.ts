export type Service = {
  slug: string;
  title: string;
  badge: "yellow" | "orange";
  image: string;
  bullets: string[];
  description: string;
  shortDescription: string;
};

export const services: Service[] = [
  {
    slug: "drywall",
    title: "Drywall & Interior Painting",
    badge: "yellow",
    image: "/images/Drywall.png",
    bullets: [
      "Installation and finishing of interior walls",
      "Drywall repairs with a flawless finish",
      "Painting of rooms or entire homes",
    ],
    description:
      "Perfect for those looking to refresh interior spaces or prepare properties for Airbnb rentals.",
    shortDescription:
      "Spaces renewed with smooth finishes and professional painting, ready to add value to your property and welcome visitors with pride.",
  },
  {
    slug: "flooring",
    title: "Flooring Installation",
    badge: "orange",
    image: "/images/Flooring.png",
    bullets: [
      "Laminate, vinyl, or porcelain floors",
      "Removal of old flooring",
      "Baseboards and trim with a fine finish",
    ],
    description:
      "Highly requested by homeowners who want to give their property a modern look.",
    shortDescription:
      "A modern and elegant look for your space, with well-installed, level, and durable floors, adding value and comfort to your home.",
  },
  {
    slug: "landscaping",
    title: "Landscaping & Gardening",
    badge: "yellow",
    image: "/images/Landscaping.png",
    bullets: [
      "Lawn mowing and yard maintenance",
      "Installation of stones, decks, fences, and plants",
      "Garden and outdoor area upkeep",
    ],
    description:
      "Very popular among suburban homes. Keep your yard beautiful and well cared for.",
    shortDescription:
      "A beautiful, clean, and organized yard, perfect for family moments, increasing your home's value, and leaving a great first impression at the entrance.",
  },
];

export type Testimonial = {
  title: string;
  quote: string;
  name: string;
  location: string;
};

export const testimonials: Testimonial[] = [
  {
    title: "Outstanding Results...",
    quote:
      "I hired the service to install vinyl flooring in my living room and hallway. The work was flawless, clean, and delivered on time. I found them very professional from the first contact through the final delivery. I'm already planning to hire them for painting the bedrooms as well!",
    name: "André M.",
    location: "Newark, NJ",
  },
  {
    title: "Very Satisfied With...",
    quote:
      "I needed to renovate the bedrooms and the backyard before listing my house on Airbnb. A Brazilian friend recommended them, and I was surprised by the quality of the service. The finish was perfect, and the customer service was super fast and professional. I've already shared their contact with other friends!",
    name: "Fernanda R.",
    location: "Orlando, FL",
  },
  {
    title: "They Transformed My...",
    quote:
      "My yard was completely abandoned. They took care of everything: pruning, cleaning, stone installation, and even built a small deck. Now the space looks brand new. Quick work, very clean, and with great attention to detail!",
    name: "Vanessa L.",
    location: "Kissimmee, FL",
  },
  {
    title: "Excellent Service and...",
    quote:
      "I needed to repair a drywall wall after a leak. They came the next day, and the job was done perfectly as if nothing had ever happened. Besides that, the service was fast, punctual, and very professional!",
    name: "Carlos E.",
    location: "Framingham, MA",
  },
];

export const quickQuestions: string[] = [
  "Does your home or property need renovation, but you're afraid of hiring someone who cuts corners?",
  "Have you ever hired someone for a simple job... and it turned into a headache?",
  "Tired of broken promises and poor-quality finishes?",
  "Want to renovate but don't know where to start or who to trust?",
  "Need to get the space ready to live in, sell, or rent?",
];

export type FaqItem = { question: string; answer: string };

export const faqItems: FaqItem[] = [
  {
    question: "Do I need to buy the materials, or do you provide everything?",
    answer:
      "I can work both ways. If you prefer a complete experience, I'll bring all the materials and include everything in the estimate.",
  },
  {
    question: "Which areas or cities do you serve?",
    answer:
      "I serve the greater metro area and surrounding suburbs. Send your address on the estimate form and I'll confirm coverage right away.",
  },
  {
    question: "Do you take on small jobs, or only full renovations?",
    answer:
      "Both. From a single wall repair to a full home renovation, every project gets the same care and attention to detail.",
  },
  {
    question: "How long does it take to finish the service?",
    answer:
      "It depends on the scope, but most single-service projects are completed within a few days. You'll get a clear timeline with your estimate.",
  },
];
