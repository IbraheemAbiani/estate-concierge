/* ============================================================
   SITE CONTENT — edit everything here in one place.
   Swap placeholder copy, names, contact info, and links below.
   ============================================================ */

export const site = {
  name: "The Estate Concierge Group",
  shortName: "Estate Concierge",
  tagline: "Your Property, Our Priority",
  // TODO: swap these placeholders for your real details.
  phone: "+1 (310) 555-0198",
  phoneHref: "tel:+13105550198",
  email: "concierge@estateconciergegroup.com",
  address: {
    line1: "10250 Santa Monica Blvd",
    line2: "Los Angeles, CA 90067",
    region: "Los Angeles, California",
  },
  formspree: {
    contact: "https://formspree.io/f/xvkganbp",
    schedule: "https://formspree.io/f/mbgloead",
  },
  socials: [
    { label: "Facebook",  href: "https://www.facebook.com",  icon: "facebook" },
    { label: "Instagram", href: "https://www.instagram.com", icon: "instagram" },
    { label: "YouTube",   href: "https://www.youtube.com",   icon: "youtube" },
    { label: "X",         href: "https://www.x.com",         icon: "x" },
    { label: "LinkedIn",  href: "https://www.linkedin.com",  icon: "linkedin" },
    { label: "TikTok",    href: "https://www.tiktok.com",    icon: "tiktok" },
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "About Us", href: "/about/" },
  { label: "Our Team", href: "/team/" },
  { label: "Contact", href: "/contact/" },
];

export const stats = [
  { value: "24/7", label: "Available Support" },
  { value: "10+",  label: "Years Experience" },
  { value: "50+",  label: "Properties Managed" },
  { value: "100",  label: "Five-Star Client Reviews" },
];

/* Home + Services page — two headline services */
export const servicesSummary = [
  {
    title: "Property Management",
    subtitle: "Full-service management for residential and commercial properties",
    href: "/property-management/",
    cta: "Explore Property Management",
    detailsLabel: "Management Details",
    image: "/images/service-property-management.jpg",
    points: [
      "Complete tenant screening & management",
      "Rent collection & financial reporting",
      "Legal compliance & documentation",
      "Property maintenance coordination",
      "Revenue optimization strategies",
      "24/7 emergency response",
    ],
  },
  {
    title: "Concierge Maintenance",
    subtitle: "White-glove maintenance and repair services for property owners",
    href: "/concierge-maintenance/",
    cta: "Explore Concierge Maintenance",
    detailsLabel: "Concierge Details",
    image: "/images/service-concierge-maintenance.jpg",
    points: [
      "24/7 emergency repair response",
      "Scheduled preventive maintenance",
      "Vendor coordination & oversight",
      "Property inspection & reporting",
      "Quality control on all repairs",
      "Personalized concierge service",
    ],
  },
];

/* Services page — hero + secondary "core services" section + closing CTA */
export const servicesPage = {
  eyebrow: "Services",
  title: "Services",
  splitEyebrow: "The Gold Standard",
  splitTitle: "Two Comprehensive Services,\nOne Trusted Partner",
  splitLead: "Whether you need complete property management or specialized maintenance support, Estate Concierge delivers exceptional service tailored to your needs.",
  coreEyebrow: "Your Property, Our Priority",
  coreTitle: "Our Services",
  ctaEyebrow: "Begin the Experience",
  ctaTitle: "Ready for Peace of Mind?",
  ctaBody: "Every home is different. Book a private walkthrough and we'll build care around yours.",
  ctaLabel: "Request a Consultation",
};

/* Services page — six core service components */
export const coreServices = [
  { title: "24/7 Concierge Line", body: "One dedicated number, answered around the clock. Whatever your home needs, whenever it needs it, you make one call." },
  { title: "Scheduled Property Inspections", body: "Routine walkthroughs that catch minor issues before they become costly problems, with a detailed report after every visit." },
  { title: "Included Home Care", body: "A defined scope of maintenance covered under your membership, with transparent, advance quotes for anything beyond it." },
  { title: "Trusted Vendor Management", body: "A vetted, insured network of gardeners, housekeepers, pool service, detailers, and specialty trades, coordinated on your behalf." },
  { title: "Absentee Home Oversight", body: "Weekly check-ins, vehicle care, and vendor coordination that keep your property secure and cared for while you're away." },
  { title: "Arrival & Departure Services", body: "Pre-arrival home preparation and secure departure procedures, with airport transportation available on request." },
];

export const values = [
  { title: "Excellence",     body: "We maintain the highest standards in property management and client service." },
  { title: "Results-Driven", body: "Your investment success is our priority, backed by data and expertise." },
  { title: "Integrity",      body: "Transparent communication and honest dealings in every interaction." },
  { title: "Trust",          body: "Building long-term relationships through reliability and accountability." },
];

/* Property Management page — 6 cards */
export const propertyManagement = {
  eyebrow: "Property Management",
  title: "Traditional Property Management",
  intro: "Comprehensive property management solutions for residential and commercial properties. Let us handle everything while you enjoy the returns.",
  sectionTitle: "Everything Your Rental Property Needs",
  sectionBody: "Our traditional property management services cover every aspect of rental property ownership. From finding quality tenants to handling maintenance requests and collecting rent, we take care of the day-to-day operations so you can focus on growing your portfolio.",
  stats: [
    { value: "10+ Years", label: "Deep Industry Experience" },
    { value: "24/7 Support", label: "Available For Your Needs" },
  ],
  cards: [
    { title: "Full Property Management", body: "Complete property oversight including maintenance coordination, tenant relations, and financial management for long-term rental properties.", points: ["Regular property inspections", "Maintenance coordination", "Tenant screening & placement", "Lease administration"] },
    { title: "Tenant Relations", body: "Professional tenant management services to maintain positive relationships and ensure lease compliance.", points: ["24/7 tenant support", "Move-in / move-out coordination", "Lease renewals", "Conflict resolution"] },
    { title: "Financial Management", body: "Comprehensive accounting and financial reporting to maximize your investment returns.", points: ["Monthly rent collection", "Owner financial statements", "Budget planning & forecasting", "Tax documentation"] },
    { title: "Legal Compliance", body: "Stay compliant with all local, state, and federal property regulations.", points: ["Lease agreement preparation", "Eviction processing", "Fair housing compliance", "Documentation management"] },
    { title: "Revenue Optimization", body: "Data-driven pricing strategies to maximize your rental income and property value.", points: ["Market analysis", "Competitive pricing", "Occupancy optimization", "Property improvements"] },
    { title: "Risk Management", body: "Protect your investment with proactive risk assessment and mitigation strategies.", points: ["Insurance coordination", "Property security", "Legal protection", "Emergency preparedness"] },
  ],
  ctaTitle: "Ready to Maximize Your Investment?",
  ctaBody: "Schedule a complimentary consultation to discuss your property management needs.",
};

/* Concierge Maintenance page — 6 cards */
export const conciergeMaintenance = {
  eyebrow: "Maintenance",
  title: "Concierge Maintenance Services",
  intro: "Premium white-glove maintenance and repair services tailored to your property's needs.",
  sectionTitle: "Our Concierge Maintenance Services",
  sectionBody: "From urgent repairs to proactive care, our vetted specialists protect the beauty and value of your estate — handled with the discretion and polish your property deserves.",
  cards: [
    { title: "24/7 Emergency Repairs", body: "Round-the-clock emergency maintenance response with immediate dispatch of vetted contractors.", points: ["Immediate emergency response", "Licensed contractor network", "Real-time updates", "Quality guarantee"] },
    { title: "Preventive Maintenance", body: "Scheduled inspections and proactive maintenance programs to prevent costly repairs.", points: ["Regular property inspections", "HVAC servicing", "Plumbing checks", "Electrical maintenance"] },
    { title: "Property Care Services", body: "Comprehensive property upkeep including landscaping, cleaning, and aesthetic maintenance.", points: ["Landscaping coordination", "Pressure washing", "Window cleaning", "Seasonal preparations"] },
    { title: "Vendor Management", body: "Curated network of trusted, licensed professionals for all your maintenance needs.", points: ["Pre-vetted contractors", "Competitive pricing", "Quality oversight", "Warranty coordination"] },
    { title: "Repair Coordination", body: "Complete coordination of repairs from diagnosis to completion with detailed documentation.", points: ["Damage assessment", "Bid comparison", "Project management", "Completion verification"] },
    { title: "Maintenance Planning", body: "Strategic maintenance planning and budgeting to preserve and enhance property value.", points: ["Annual maintenance plans", "Budget forecasting", "Priority scheduling", "Value preservation"] },
  ],
  ctaTitle: "Need Maintenance Services?",
  ctaBody: "Contact us today for a complimentary property assessment and maintenance consultation.",
};

/* About page */
export const about = {
  eyebrow: "About Us",
  mission: "At The Estate Concierge Group, we are dedicated to maximizing your property investment returns through proactive management, innovative solutions, and exceptional service. We combine cutting-edge technology with personalized attention to deliver results that exceed expectations.",
  storyTitle: "Our Story",
  story: [
    "Founded in Southern California, The Estate Concierge Group has grown from a small local operation to a trusted name in property management across the region. Our journey began with a simple vision: to provide property owners with peace of mind through exceptional management services.",
    "Today, we manage hundreds of properties ranging from single-family homes to multi-unit complexes. Our success is built on strong relationships, proven processes, and an unwavering commitment to our clients' success.",
    "We understand that your property represents a significant investment and trust. That's why we treat each property as if it were our own, combining professional expertise with personal care to deliver outstanding results.",
  ],
};

/* Team — 3 people (placeholder headshots + bios) */
export const team = [
  {
    name: "Tyler Boots",
    title: "Principal & Founder",
    photo: "/images/team-1.jpg",
    bio: "Tyler Boots, a UCI graduate with a master's in business from Pepperdine, has been leading property management operations for over seven years. His extensive industry experience, coupled with a vast professional network, allows him to deliver innovative and effective solutions for clients.",
  },
  {
    name: "Adam Abiani",
    title: "Head of Concierge Operations",
    photo: "/images/team-2.jpg",
    bio: "Victoria oversees every facet of white-glove property care, bringing a meticulous eye for detail and a service philosophy built on discretion, responsiveness, and trust.",
  },
  {
    name: "Dominic Molfetta",
    title: "Senior Lifestyle Steward",
    photo: "/images/team-3.jpg",
    bio: "Dominic Molfetta, a University of Oregon graduate, brings years of expertise in the real estate services industry to our team. With a strong background in client relationships and strategic planning, Dominic is dedicated to delivering exceptional service and tailored solutions to each customer.",
  },
];

export const areas = [
  { name: "Los Angeles",  image: "/images/area-los-angeles.jpg" },
  { name: "Malibu",       image: "/images/area-malibu.jpg" },
  { name: "Santa Barbara",image: "/images/area-santa-barbara.jpg" },
];

/* Home video carousel — swap poster + src per slide */
export const showcase = [
  { title: "Beverly Hills Estate",   poster: "/images/showcase-1.jpg", src: "/videos/showcase-1.mp4" },
  { title: "Malibu Beachfront",      poster: "/images/showcase-2.jpg", src: "/videos/showcase-2.mp4" },
  { title: "Bel Air Residence",      poster: "/images/showcase-3.jpg", src: "/videos/showcase-3.mp4" },
  { title: "Montecito Villa",        poster: "/images/showcase-4.jpg", src: "/videos/showcase-4.mp4" },
  { title: "Newport Coast Property", poster: "/images/showcase-5.jpg", src: "/videos/showcase-5.mp4" },
];

/* How it works — schedule page */
export const howItWorks = [
  { step: "1", title: "Share property details", body: "Tell us about your estate and your specific requirements for management or maintenance." },
  { step: "2", title: "Meet your concierge",    body: "Connect with a dedicated expert who will oversee every aspect of your property care." },
  { step: "3", title: "Receive tailored plan",  body: "Get a bespoke property management and concierge strategy designed for your lifestyle." },
];
