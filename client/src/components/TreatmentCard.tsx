import { Link } from 'wouter';
import { Treatment } from '@shared/schema';

interface TreatmentCardProps {
  treatment: Treatment;
}

const TreatmentCard = ({ treatment }: TreatmentCardProps) => {
  return (
    <div className="bg-secondary rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <i className={`${treatment.icon} text-primary text-xl mr-3`}></i>
          <h4 className="font-heading font-semibold text-xl">{treatment.name}</h4>
        </div>
        <p className="text-neutral-dark">
          {treatment.description}
        </p>
        <Link href={`/treatments#${treatment.slug}`} className="inline-flex items-center text-primary hover:text-primary-dark font-medium mt-4">
          Learn More
          <i className="fa-solid fa-arrow-right text-sm ml-2"></i>
        </Link>
      </div>
    </div>
  );
};

export default TreatmentCard;
