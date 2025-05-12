import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import SpecializationCard from '@/components/SpecializationCard';
import { useSpecializations } from '@/hooks/use-specializations';

const Specializations = () => {
  const { data: specializations, isLoading } = useSpecializations();

  return (
    <>
      <SEO 
        title="Our Specializations" 
        description="Explore our range of dental specializations including prosthodontics, periodontics, orthodontics, endodontics, oral surgery, and pediatric dentistry." 
      />
      
      {/* Page Header */}
      <div className="bg-secondary py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-neutral-darkest text-center">Our Specializations</h1>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          <p className="text-center text-neutral-dark max-w-3xl mx-auto mt-6">
            We offer specialized dental care across multiple disciplines to address all your oral health needs.
          </p>
        </div>
      </div>
      
      {/* Specializations Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <p>Loading specializations...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializations?.map((specialization) => (
                <SpecializationCard key={specialization.id} specialization={specialization} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-neutral-darkest mb-6">Why Choose Our Specialists?</h2>
            <p className="text-neutral-dark max-w-3xl mx-auto">
              Our team of specialists brings years of experience, advanced training, and a commitment to excellence in every aspect of your care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="bg-primary inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                <i className="fa-solid fa-graduation-cap text-white text-2xl"></i>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Advanced Education</h3>
              <p className="text-neutral-dark">Our specialists have completed years of additional training beyond dental school in their specific areas of expertise.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="bg-primary inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                <i className="fa-solid fa-certificate text-white text-2xl"></i>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Board Certification</h3>
              <p className="text-neutral-dark">Many of our specialists hold board certifications, demonstrating their commitment to the highest standards in their field.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="bg-primary inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                <i className="fa-solid fa-book-medical text-white text-2xl"></i>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Continuing Education</h3>
              <p className="text-neutral-dark">Our team regularly participates in continuing education to stay current with the latest techniques and technologies.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-6">Need Specialized Dental Care?</h2>
          <p className="text-white text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Our specialists are ready to help you with any complex dental needs you may have.
          </p>
          <Link href="/contact#appointment">
            <Button variant="outline" className="bg-white hover:bg-neutral-medium text-primary font-medium py-3 px-6 rounded-md transition duration-300 ease-in-out">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Specializations;
