import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { useTreatmentCategories, useTreatments } from '@/hooks/use-treatments';

const Treatments = () => {
  const { data: categories, isLoading: isCategoriesLoading } = useTreatmentCategories();
  const { data: treatments, isLoading: isTreatmentsLoading } = useTreatments();
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  // Set the first category as active once data is loaded
  if (!activeCategory && categories && categories.length > 0 && !isCategoriesLoading) {
    setActiveCategory(categories[0].id);
  }

  const isLoading = isCategoriesLoading || isTreatmentsLoading;

  // Filter treatments based on selected category
  const filteredTreatments = activeCategory && treatments 
    ? treatments.filter(treatment => treatment.categoryId === activeCategory)
    : treatments;

  return (
    <>
      <SEO 
        title="Dental Treatments" 
        description="Explore our comprehensive range of dental treatments including preventive care, restorative procedures, cosmetic services, orthodontics, and oral surgery." 
      />
      
      {/* Page Header */}
      <div className="bg-secondary py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-neutral-darkest text-center">Dental Treatments</h1>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          <p className="text-center text-neutral-dark max-w-3xl mx-auto mt-6">
            We offer a comprehensive range of dental services to meet all your oral health needs.
          </p>
        </div>
      </div>
      
      {/* Treatment Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <p>Loading treatments...</p>
            </div>
          ) : (
            <>
              {/* Category Tabs */}
              <div className="flex flex-wrap justify-center border-b border-neutral-medium mb-12">
                {categories?.map((category) => (
                  <button 
                    key={category.id}
                    className={`px-4 py-3 font-medium border-b-2 mx-2 mb-2 transition-colors ${
                      activeCategory === category.id 
                        ? 'text-primary border-primary' 
                        : 'text-neutral-darkest hover:text-primary border-transparent hover:border-primary'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              {/* Active Category Description */}
              {activeCategory && categories && (
                <div className="mb-12">
                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-neutral-darkest text-center mb-4">
                    {categories.find(c => c.id === activeCategory)?.name}
                  </h2>
                  <p className="text-center text-neutral-dark max-w-3xl mx-auto">
                    {categories.find(c => c.id === activeCategory)?.description}
                  </p>
                </div>
              )}
              
              {/* Treatments List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredTreatments?.map((treatment) => (
                  <div key={treatment.id} id={treatment.slug} className="bg-secondary rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <i className={`${treatment.icon} text-white text-xl`}></i>
                      </div>
                      <h3 className="font-heading font-semibold text-xl">{treatment.name}</h3>
                    </div>
                    <p className="text-neutral-dark mb-4">{treatment.description}</p>
                  </div>
                ))}
              </div>
              
              {filteredTreatments?.length === 0 && (
                <div className="text-center py-8">
                  <p>No treatments found for this category.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-6">Ready to Schedule Your Visit?</h2>
          <p className="text-white text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Our team is ready to help you achieve and maintain optimal oral health.
          </p>
          <Link href="/contact#appointment">
            <Button variant="outline" className="bg-white hover:bg-neutral-medium text-primary font-medium py-3 px-6 rounded-md transition duration-300 ease-in-out">
              Request an Appointment
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Treatments;
