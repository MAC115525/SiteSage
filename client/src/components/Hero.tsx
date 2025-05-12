import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-neutral-darkest mb-6">
              Your Smile, <span className="text-primary">Our Passion</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-dark mb-8">
              Experience exceptional dental care with our team of specialists dedicated to your oral health and beautiful smile.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact#appointment">
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white text-center font-medium py-6 px-6 rounded-md transition duration-300 ease-in-out">
                  Book an Appointment
                </Button>
              </Link>
              <Link href="/treatments">
                <Button variant="outline" className="w-full sm:w-auto bg-white hover:bg-neutral-medium text-primary text-center font-medium py-6 px-6 rounded-md transition duration-300 ease-in-out">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern dental clinic" 
              className="rounded-lg shadow-lg w-full h-auto"
              loading="eager" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
