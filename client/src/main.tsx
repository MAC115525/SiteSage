import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

document.title = "Smiles Dental Clinic | Professional Dental Care";

// Add the font links
const fontLinks = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
`;

// Add a meta description
const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'Smiles Dental Clinic offers comprehensive dental care with a focus on patient comfort and cutting-edge technology. Our team of specialists provides preventive, restorative, cosmetic, orthodontic, and surgical dental services.';
document.head.appendChild(metaDescription);

// Add Open Graph tags
const ogTags = [
  { property: 'og:title', content: 'Smiles Dental Clinic | Professional Dental Care' },
  { property: 'og:description', content: 'Experience exceptional dental care with our team of specialists dedicated to your oral health and beautiful smile.' },
  { property: 'og:type', content: 'website' },
  { property: 'og:url', content: 'https://smilesdental.com' },
  { property: 'og:image', content: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630' }
];

ogTags.forEach(tag => {
  const metaTag = document.createElement('meta');
  metaTag.setAttribute('property', tag.property);
  metaTag.content = tag.content;
  document.head.appendChild(metaTag);
});

// Add font links to head
document.head.insertAdjacentHTML('beforeend', fontLinks);

createRoot(document.getElementById("root")!).render(<App />);
