import { Link } from 'wouter';
import { Specialization } from '@shared/schema';

interface SpecializationCardProps {
  specialization: Specialization;
}

const SpecializationCard = ({ specialization }: SpecializationCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-primary-light flex items-center justify-center p-6">
        <i className={`${specialization.icon} text-white text-5xl`}></i>
      </div>
      <div className="p-6">
        <h3 className="font-heading font-semibold text-xl mb-3">{specialization.name}</h3>
        <p className="text-neutral-dark mb-4">
          {specialization.shortDescription}
        </p>
        <Link href={`/specializations/${specialization.slug}`} className="inline-flex items-center text-primary hover:text-primary-dark font-medium">
          Learn More
          <i className="fa-solid fa-arrow-right text-sm ml-2"></i>
        </Link>
      </div>
    </div>
  );
};

export default SpecializationCard;
