import { useState } from 'react';
import { TreatmentCategory, Treatment } from '@shared/schema';
import TreatmentCard from './TreatmentCard';

interface TreatmentTabsProps {
  categories: TreatmentCategory[];
  treatments: Treatment[];
}

const TreatmentTabs = ({ categories, treatments }: TreatmentTabsProps) => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]?.slug || 'preventive');

  const getTreatmentsByCategory = (categorySlug: string) => {
    const category = categories.find(c => c.slug === categorySlug);
    if (!category) return [];
    
    return treatments.filter(t => t.categoryId === category.id);
  };

  return (
    <div>
      <div className="mb-12">
        <div className="flex flex-wrap justify-center border-b border-neutral-medium">
          {categories.map((category) => (
            <button 
              key={category.id}
              className={`px-4 py-3 font-medium border-b-2 mx-2 mb-2 transition-colors ${
                activeCategory === category.slug 
                  ? 'text-primary border-primary' 
                  : 'text-neutral-darkest hover:text-primary border-transparent hover:border-primary'
              }`}
              onClick={() => setActiveCategory(category.slug)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="treatment-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getTreatmentsByCategory(activeCategory).map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>
        
        {getTreatmentsByCategory(activeCategory).length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-dark">No treatments found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TreatmentTabs;
