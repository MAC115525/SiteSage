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
        description="Learn about Dental Diagnostic Centre's 50-year legacy, founded by Dr. Salauddin Khan, and meet our team of dental professionals dedicated to exceptional patient care." 
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
                <span className="font-semibold italic">Bangalore's Beacon of Dental Excellence for Over 50 Years</span>
              </p>
              <p className="text-neutral-dark mb-6">
                In the leafy corridors of Richmond Road, beyond the traffic and tech bustle of Bengaluru, stands a sanctuary of smiles — one that has quietly transformed thousands of lives, one patient at a time.
              </p>
              <p className="text-neutral-dark mb-6">
                Founded by the pioneering Dr. Salauddin Khan (BDS, MDS), DDC – Dental Diagnostic Center is not just a clinic. It is a story — of precision, integrity, and a generational bond with the people of Bangalore and beyond.
              </p>
              <p className="text-neutral-dark mb-6">
                A former Professor of Orthodontics at St. John's Medical College and Consultant at St. Martha's Hospital, Dr. Khan has mentored not only students and peers but also families who continue to place their trust in his healing hands.
              </p>
              <p className="text-neutral-dark">
                But what truly defines DDC is its legacy of three generations. Children once treated for misaligned teeth now return as parents and even grandparents — a living testament to the center's enduring promise of care.
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
      
      {/* Philosophy Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-neutral-darkest mb-6">Our Philosophy</h2>
            <div className="mb-10">
              <p className="text-neutral-dark text-xl italic font-medium mb-2">
                "Dentistry is not just about fixing teeth. It's about restoring confidence, 
                preserving dignity, and honoring every patient's story."
              </p>
              <p className="text-neutral-dark text-lg">
                — Dr. Salauddin Khan
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 text-left">
              <div>
                <h3 className="font-heading font-semibold text-2xl mb-4">Our Approach</h3>
                <p className="text-neutral-dark">
                  At DDC, advanced diagnostics meet compassionate care. Whether it's a full-mouth rehabilitation, 
                  pediatric dentistry, smile makeovers, or minimally invasive implants — every treatment is approached 
                  with quiet excellence and deep human connection.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-2xl mb-4">Our Promise</h3>
                <p className="text-neutral-dark">
                  The clinic's warm, boutique-style setting reflects its ethos — where time slows down, conversations 
                  matter, and every patient is treated like family. Whether you're a corporate professional, a global 
                  traveler seeking quality care in India, or a senior wanting to smile without hesitation — DDC welcomes 
                  you with warmth, expertise, and legacy-backed trust.
                </p>
              </div>
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
