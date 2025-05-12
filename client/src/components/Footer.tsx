import { Link } from 'wouter';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-6">
              <i className="fa-solid fa-tooth text-white text-2xl mr-2"></i>
              <span className="text-white font-heading font-bold text-xl">Dental Diagnostic Centre</span>
            </div>
            <p className="text-white/80 mb-6">
              Providing exceptional dental care for the whole family with a focus on comfort, quality, and education.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f text-lg"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors" aria-label="Instagram">
                <i className="fa-brands fa-instagram text-lg"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors" aria-label="Twitter">
                <i className="fa-brands fa-twitter text-lg"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in text-lg"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/treatments" className="text-white/80 hover:text-white transition-colors">Treatments</Link></li>
              <li><Link href="/specializations" className="text-white/80 hover:text-white transition-colors">Specializations</Link></li>
              <li><Link href="/blog" className="text-white/80 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Dental Services</h4>
            <ul className="space-y-3">
              <li><Link href="/treatments" className="text-white/80 hover:text-white transition-colors">General Dentistry</Link></li>
              <li><Link href="/treatments" className="text-white/80 hover:text-white transition-colors">Cosmetic Dentistry</Link></li>
              <li><Link href="/specializations/orthodontics" className="text-white/80 hover:text-white transition-colors">Orthodontics</Link></li>
              <li><Link href="/specializations/pediatric-dentistry" className="text-white/80 hover:text-white transition-colors">Pediatric Dentistry</Link></li>
              <li><Link href="/treatments" className="text-white/80 hover:text-white transition-colors">Dental Implants</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white transition-colors">Emergency Care</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact & Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fa-solid fa-location-dot mt-1 mr-3"></i>
                <span className="text-white/80">Parvathi Plaza, Richmond Rd<br />Langford Gardens, Bengaluru<br />Karnataka 560025</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-phone mt-1 mr-3"></i>
                <span className="text-white/80">(123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-envelope mt-1 mr-3"></i>
                <span className="text-white/80">info@smilesdental.com</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-clock mt-1 mr-3"></i>
                <span className="text-white/80">Mon-Thu: 8am-5pm<br />Fri: 8am-3pm<br />Sat: 9am-1pm</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-white/80 text-sm">
            &copy; {new Date().getFullYear()} Dental Diagnostic Centre. All rights reserved. | 
            <Link href="/privacy-policy" className="hover:text-white ml-1">Privacy Policy</Link> | 
            <Link href="/terms-of-service" className="hover:text-white ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
