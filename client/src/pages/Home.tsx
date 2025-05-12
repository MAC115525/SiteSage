import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TeamMember from '@/components/TeamMember';
import TreatmentTabs from '@/components/TreatmentTabs';
import SpecializationCard from '@/components/SpecializationCard';
import Testimonials from '@/components/Testimonials';
import BlogCard from '@/components/BlogCard';
import AppointmentForm from '@/components/AppointmentForm';

import { useTeamMembers } from '@/hooks/use-team';
import { useTreatmentCategories, useTreatments } from '@/hooks/use-treatments';
import { useSpecializations } from '@/hooks/use-specializations';
import { useBlogPosts } from '@/hooks/use-blog';

const Home = () => {
  const { data: teamMembers, isLoading: isTeamLoading } = useTeamMembers();
  const { data: treatmentCategories, isLoading: isCategoriesLoading } = useTreatmentCategories();
  const { data: treatments, isLoading: isTreatmentsLoading } = useTreatments();
  const { data: specializations, isLoading: isSpecializationsLoading } = useSpecializations();
  const { data: blogPosts, isLoading: isBlogLoading } = useBlogPosts();

  return (
    <>
      <SEO 
        title="Professional Dental Care" 
        description="Experience exceptional dental care with our team of specialists dedicated to your oral health and beautiful smile."
      />
      
      <Hero />
      
      <Features />
      
      {/* About Us Section */}
      <section id="about" className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-darkest mb-4">About Us</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
              Discover our story, our mission, and the dedicated team behind Smiles Dental Clinic.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="font-heading font-semibold text-2xl text-neutral-darkest mb-4">Our Story</h3>
              <p className="text-neutral-dark mb-4">
                Founded in 1998, Smiles Dental Clinic began with a vision to transform dental care in our community. Dr. Sarah Johnson, our founder, believed that dental care should be compassionate, comprehensive, and accessible to everyone.
              </p>
              <p className="text-neutral-dark mb-4">
                Over the years, we've grown from a small practice to a full-service dental clinic with multiple specialties, all while maintaining our commitment to personalized care and patient comfort.
              </p>
              <h3 className="font-heading font-semibold text-2xl text-neutral-darkest mb-4 mt-8">Our Mission</h3>
              <p className="text-neutral-dark">
                To improve the oral health of our community by providing exceptional, patient-centered dental care in a comfortable and welcoming environment, utilizing the latest technology and evidence-based practices.
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
          
          {/* Meet the Team */}
          <div>
            <h3 className="font-heading font-semibold text-2xl text-neutral-darkest text-center mb-10">Meet Our Team</h3>
            
            {isTeamLoading ? (
              <div className="flex justify-center">
                <p>Loading team members...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers?.slice(0, 3).map((member) => (
                  <TeamMember key={member.id} member={member} />
                ))}
              </div>
            )}
            
            <div className="text-center mt-10">
              <Link href="/about-us#team" className="inline-flex items-center text-primary hover:text-primary-dark font-medium">
                View All Team Members
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Treatments Section */}
      <section id="treatments" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-darkest mb-4">Dental Treatments</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
              We offer a comprehensive range of dental services to meet all your oral health needs.
            </p>
          </div>
          
          {isCategoriesLoading || isTreatmentsLoading ? (
            <div className="flex justify-center">
              <p>Loading treatments...</p>
            </div>
          ) : treatmentCategories && treatments ? (
            <TreatmentTabs categories={treatmentCategories} treatments={treatments} />
          ) : (
            <p className="text-center">Failed to load treatments.</p>
          )}
          
          <div className="text-center mt-12">
            <Link href="/treatments">
              <Button className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md transition duration-300 ease-in-out">
                View All Treatments
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Specializations Section */}
      <section id="specializations" className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-darkest mb-4">Our Specializations</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
              We offer specialized dental care across multiple disciplines to address all your oral health needs.
            </p>
          </div>
          
          {isSpecializationsLoading ? (
            <div className="flex justify-center">
              <p>Loading specializations...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializations?.slice(0, 6).map((specialization) => (
                <SpecializationCard key={specialization.id} specialization={specialization} />
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link href="/specializations">
              <Button className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md transition duration-300 ease-in-out">
                Explore All Specializations
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Facilities Section */}
      <section id="facilities" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-darkest mb-4">Our Facilities</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
              Experience comfort and state-of-the-art technology in our modern dental clinic.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-neutral-dark mb-6">
                Our clinic is designed with your comfort in mind. From the moment you step into our reception area to the time you spend in our treatment rooms, we've created an environment that helps reduce anxiety and makes dental visits a pleasant experience.
              </p>
              <p className="text-neutral-dark mb-6">
                We've invested in the latest dental technology to provide efficient, effective care with minimal discomfort. Our digital imaging equipment reduces radiation exposure, our intraoral cameras allow you to see what we see, and our treatment rooms are equipped with comfortable chairs and entertainment options to help you relax.
              </p>
              <ul className="space-y-3 text-neutral-dark">
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                  <span>Modern, comfortable treatment rooms</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                  <span>Digital imaging technology</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                  <span>Intraoral cameras for patient education</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                  <span>Sterilization center exceeding industry standards</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                  <span>Welcoming reception area with amenities</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern dental operatory" 
                className="rounded-lg shadow-lg w-full h-auto mb-6"
                loading="lazy" 
              />
              <img 
                src="https://images.unsplash.com/photo-1629909615188-eb0e64a6bedf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Comfortable waiting room" 
                className="rounded-lg shadow-lg w-full h-auto"
                loading="lazy" 
              />
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/facilities">
              <Button className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md transition duration-300 ease-in-out">
                <i className="fa-solid fa-video mr-2"></i>
                Take a Virtual Tour
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Appointment Section */}
      <section id="appointment" className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Ready to Schedule Your Visit?</h2>
              <p className="text-white text-lg opacity-90 mb-8">
                Whether you need a routine cleaning, have a specific concern, or are interested in cosmetic options, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
                <Link href="/contact#appointment">
                  <Button variant="outline" className="w-full sm:w-auto bg-white hover:bg-neutral-medium text-primary text-center font-medium py-3 px-6 rounded-md transition duration-300 ease-in-out">
                    Request Appointment
                  </Button>
                </Link>
                <a href="tel:+11234567890">
                  <Button className="w-full sm:w-auto bg-primary-dark hover:bg-primary-dark/90 text-white text-center font-medium py-3 px-6 rounded-md transition duration-300 ease-in-out">
                    <i className="fa-solid fa-phone mr-2"></i> Call: (123) 456-7890
                  </Button>
                </a>
              </div>
            </div>
            
            <AppointmentForm />
          </div>
        </div>
      </section>
      
      {/* Blog Preview Section */}
      <section id="blog" className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-darkest mb-4">Dental Health Blog</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
              Stay informed with the latest dental health tips, practice news, and educational content.
            </p>
          </div>
          
          {isBlogLoading ? (
            <div className="flex justify-center">
              <p>Loading blog posts...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts?.slice(0, 3).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
          
          <div className="text-center mt-10">
            <Link href="/blog">
              <Button className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md transition duration-300 ease-in-out">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
