import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <i className="fa-solid fa-tooth text-primary text-3xl mr-2"></i>
              <span className="text-primary-dark font-heading font-bold text-xl sm:text-2xl">Smiles Dental Clinic</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className={`${isActive('/') ? 'text-primary' : 'text-neutral-darkest hover:text-primary'} font-medium`}>
              Home
            </Link>
            <Link href="/about-us" className={`${isActive('/about-us') ? 'text-primary' : 'text-neutral-darkest hover:text-primary'} font-medium`}>
              About Us
            </Link>
            <Link href="/treatments" className={`${isActive('/treatments') ? 'text-primary' : 'text-neutral-darkest hover:text-primary'} font-medium`}>
              Treatments
            </Link>
            <Link href="/specializations" className={`${isActive('/specializations') ? 'text-primary' : 'text-neutral-darkest hover:text-primary'} font-medium`}>
              Specializations
            </Link>
            <Link href="/facilities" className={`${isActive('/facilities') ? 'text-primary' : 'text-neutral-darkest hover:text-primary'} font-medium`}>
              Facilities
            </Link>
            <Link href="/contact" className={`${isActive('/contact') ? 'text-primary' : 'text-neutral-darkest hover:text-primary'} font-medium`}>
              Contact
            </Link>
            <Link href="/blog" className={`${isActive('/blog') ? 'text-primary' : 'text-neutral-darkest hover:text-primary'} font-medium`}>
              Blog
            </Link>
          </nav>
          
          <div className="flex items-center">
            <Link href="/contact#appointment">
              <Button className="hidden md:inline-flex bg-primary hover:bg-primary-dark text-white font-medium transition duration-300 ease-in-out">
                Request Appointment
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-neutral-darkest p-2"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              <i className="fa-solid fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className={`${isActive('/') ? 'text-primary' : 'text-neutral-darkest hover:text-primary'} font-medium py-2`} onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about-us" className={`${isActive('/about-us') ? 'text-primary' : 'text-neutral-darkest hover:text-primary'} font-medium py-2`} onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link href="/treatments" className={`${isActive('/treatments') ? 'text-primary' : 'text-neutral-darkest hover:text-primary'} font-medium py-2`} onClick={() => setMobileMenuOpen(false)}>
                Treatments
              </Link>
              <Link href="/specializations" className={`${isActive('/specializations') ? 'text-primary' : 'text-neutral-darkest hover:text-primary'} font-medium py-2`} onClick={() => setMobileMenuOpen(false)}>
                Specializations
              </Link>
              <Link href="/facilities" className={`${isActive('/facilities') ? 'text-primary' : 'text-neutral-darkest hover:text-primary'} font-medium py-2`} onClick={() => setMobileMenuOpen(false)}>
                Facilities
              </Link>
              <Link href="/contact" className={`${isActive('/contact') ? 'text-primary' : 'text-neutral-darkest hover:text-primary'} font-medium py-2`} onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <Link href="/blog" className={`${isActive('/blog') ? 'text-primary' : 'text-neutral-darkest hover:text-primary'} font-medium py-2`} onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/contact#appointment" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary-dark text-white font-medium transition duration-300 ease-in-out">
                  Request Appointment
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
