/**
 * This file contains any static data needed for the application
 * that doesn't need to be stored in the database.
 */

// Testimonials data
export const testimonials = [
  {
    rating: 5,
    quote: "I've been terrified of dentists my entire life, but Dr. Johnson and her team made me feel completely at ease. For the first time, I actually look forward to my dental appointments!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
    name: "Jennifer K.",
    duration: "Patient for 3 years"
  },
  {
    rating: 5,
    quote: "The Invisalign treatment I received from Dr. Chen completely transformed my smile. The process was smooth, and the results exceeded my expectations. I couldn't be happier!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
    name: "David M.",
    duration: "Patient for 2 years"
  },
  {
    rating: 5,
    quote: "My daughter used to be terrified of the dentist until we found Dr. Rodriguez. Her gentle approach and fun environment made all the difference. Now my daughter reminds ME when it's time for her checkup!",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
    name: "Sophia T.",
    duration: "Patient for 4 years"
  }
];

// Features data
export const features = [
  {
    icon: "fa-solid fa-user-doctor",
    title: "Expert Specialists",
    description: "Our team of specialists brings years of experience and expertise to provide you with the best dental care."
  },
  {
    icon: "fa-solid fa-teeth",
    title: "Comprehensive Care",
    description: "From preventive care to complex procedures, we offer a full range of dental services for the whole family."
  },
  {
    icon: "fa-solid fa-wand-magic-sparkles",
    title: "Advanced Technology",
    description: "We utilize the latest dental technology to provide efficient, comfortable, and effective treatments."
  }
];

// Location and Contact data
export const contactInfo = {
  address: {
    street: "123 Dental Way",
    city: "Smile City",
    state: "SC",
    zip: "12345",
    country: "United States"
  },
  phone: "(123) 456-7890",
  emergencyPhone: "(123) 555-9999",
  email: "info@smilesdental.com",
  hours: {
    monday: "8:00 AM - 5:00 PM",
    tuesday: "8:00 AM - 5:00 PM",
    wednesday: "8:00 AM - 5:00 PM",
    thursday: "8:00 AM - 5:00 PM",
    friday: "8:00 AM - 3:00 PM",
    saturday: "9:00 AM - 1:00 PM",
    sunday: "Closed"
  }
};

// Facility Features
export const facilityFeatures = [
  "Modern, comfortable treatment rooms",
  "Digital imaging technology",
  "Intraoral cameras for patient education",
  "Sterilization center exceeding industry standards",
  "Welcoming reception area with amenities"
];

// Insurance Information
export const insuranceInfo = {
  acceptedPlans: [
    "Delta Dental",
    "Cigna",
    "MetLife",
    "Aetna",
    "Guardian",
    "UnitedHealthcare",
    "Humana",
    "BlueCross BlueShield"
  ],
  paymentOptions: [
    "Cash, check, and major credit cards",
    "Flexible spending accounts (FSA)",
    "Health savings accounts (HSA)",
    "CareCredit healthcare financing",
    "In-house payment plans for qualified patients"
  ]
};

// FAQ data
export const commonFAQs = [
  {
    question: "How often should I visit the dentist?",
    answer: "We recommend visiting the dentist every six months for a regular check-up and cleaning. However, some patients may need more frequent visits depending on their oral health needs."
  },
  {
    question: "What should I do in a dental emergency?",
    answer: "Contact our office immediately at (123) 555-9999. For after-hours emergencies, follow the instructions on our voicemail. If you're experiencing severe pain, bleeding, or trauma, go to the nearest emergency room."
  },
  {
    question: "Do you see children?",
    answer: "Yes! We provide dental care for patients of all ages, from children to seniors. Dr. Rodriguez specializes in pediatric dentistry and creates a fun, comfortable environment for our youngest patients."
  },
  {
    question: "Do you offer sedation for anxious patients?",
    answer: "Yes, we offer various sedation options for patients with dental anxiety, ranging from mild nitrous oxide (laughing gas) to oral conscious sedation for more severe anxiety."
  },
  {
    question: "How can I improve my smile?",
    answer: "We offer numerous cosmetic options including teeth whitening, veneers, bonding, and clear aligners. Schedule a consultation to discuss which options might be best for your specific goals."
  }
];
