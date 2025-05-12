import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import TeamMember from '@/components/TeamMember';
import { useTeamMembers } from '@/hooks/use-team';

const AboutUs = () => {
  const { data: teamMembers, isLoading } = useTeamMembers();

  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn about Smiles Dental Clinic's history, mission, and meet our team of dental professionals dedicated to exceptional patient care." 
      />
      
      {/* Page Header */}
      <div className="bg-secondary py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-neutral-darkest text-center">About Us</h1>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>
      </div>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl text-neutral-darkest mb-6">Our Story</h2>
              <p className="text-neutral-dark mb-6">
                Founded in 1998, Smiles Dental Clinic began with a vision to transform dental care in our community. Dr. Sarah Johnson, our founder, believed that dental care should be compassionate, comprehensive, and accessible to everyone.
              </p>
              <p className="text-neutral-dark mb-6">
                Over the years, we've grown from a small practice to a full-service dental clinic with multiple specialties, all while maintaining our commitment to personalized care and patient comfort.
              </p>
              <p className="text-neutral-dark">
                Our team has expanded to include specialists in various fields of dentistry, allowing us to provide comprehensive care under one roof. We've also continually invested in advanced technology and training to ensure we offer the most effective and comfortable treatments available.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Dental team in modern office" 
                className="rounded-lg shadow-lg w-full h-auto"
                loading="lazy" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Vision Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-neutral-darkest mb-6">Our Mission & Vision</h2>
            <div className="mb-10">
              <h3 className="font-heading font-semibold text-2xl mb-4">Mission</h3>
              <p className="text-neutral-dark text-lg">
                To improve the oral health of our community by providing exceptional, patient-centered dental care in a comfortable and welcoming environment, utilizing the latest technology and evidence-based practices.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-2xl mb-4">Vision</h3>
              <p className="text-neutral-dark text-lg">
                To be the trusted dental home for our community where patients of all ages feel valued, informed, and empowered to achieve optimal oral health, and where our team is inspired to deliver excellence in every aspect of care.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet the Team Section */}
      <section id="team" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl text-neutral-darkest mb-4">Meet Our Team</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
              Our dedicated team of dental professionals is committed to providing you with the highest quality care in a comfortable environment.
            </p>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center">
              <p>Loading team members...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers?.map((member) => (
                <TeamMember key={member.id} member={member} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-6">Ready to Experience Our Care?</h2>
          <p className="text-white text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule your visit today and discover why our patients trust us with their smiles.
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

export default AboutUs;
