import { Link, useParams } from 'wouter';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { useSpecialization } from '@/hooks/use-specializations';

const SpecializationDetail = () => {
  const { slug } = useParams();
  const { data: specialization, isLoading, error } = useSpecialization(slug || '');

  // FAQ data for each specialization
  const faqs = [
    {
      question: "What treatments are included in this specialization?",
      answer: "The specific treatments depend on your individual needs. During your consultation, our specialist will evaluate your condition and recommend the most appropriate treatment options."
    },
    {
      question: "How long does treatment typically take?",
      answer: "Treatment duration varies based on the complexity of your case and the specific procedures needed. Some treatments can be completed in a single visit, while others may require multiple appointments over several months."
    },
    {
      question: "Is treatment painful?",
      answer: "Your comfort is our priority. We use local anesthesia to ensure you don't feel pain during procedures, and we offer sedation options for patients with dental anxiety or those undergoing complex treatments."
    },
    {
      question: "Will my insurance cover these treatments?",
      answer: "Coverage varies by insurance plan and the specific treatment needed. Our administrative team can help verify your benefits and explain any out-of-pocket costs before treatment begins."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer several financing options to help make your treatment affordable. Please speak with our administrative team for details."
    }
  ];

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <p>Loading specialization details...</p>
      </div>
    );
  }

  if (error || !specialization) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="font-heading font-bold text-2xl mb-4">Specialization Not Found</h1>
          <p className="mb-6">Sorry, we couldn't find the specialization you're looking for.</p>
          <Link href="/specializations">
            <Button>View All Specializations</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={specialization.name} 
        description={specialization.shortDescription} 
      />
      
      {/* Page Header */}
      <div className="bg-secondary py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-neutral-darkest text-center">{specialization.name}</h1>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>
      </div>
      
      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl text-neutral-darkest mb-6">Overview</h2>
              <p className="text-neutral-dark mb-6">{specialization.longDescription}</p>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="font-heading font-semibold text-xl mb-4">Why Choose Our {specialization.name} Services?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                    <span>Specialized expertise in complex cases</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                    <span>State-of-the-art technology and techniques</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                    <span>Personalized treatment plans</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                    <span>Focus on patient comfort and education</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                    <span>Comprehensive care coordination</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-primary-light w-64 h-64 rounded-full flex items-center justify-center">
                <i className={`${specialization.icon} text-white text-8xl`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Common Treatments Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-neutral-darkest mb-4">Common Treatments</h2>
            <p className="text-neutral-dark max-w-3xl mx-auto">
              Our {specialization.name} services include a range of treatments tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dynamic treatments based on specialization type */}
            {specialization.slug === "prosthodontics" && (
              <>
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <i className="fa-solid fa-crown text-primary text-xl mr-3"></i>
                    <h3 className="font-heading font-semibold text-xl">Crowns & Bridges</h3>
                  </div>
                  <p className="text-neutral-dark">Custom-made restorations to replace missing teeth or cover damaged ones.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <i className="fa-solid fa-teeth-open text-primary text-xl mr-3"></i>
                    <h3 className="font-heading font-semibold text-xl">Dentures</h3>
                  </div>
                  <p className="text-neutral-dark">Removable appliances that replace missing teeth and restore your smile.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <i className="fa-solid fa-tooth text-primary text-xl mr-3"></i>
                    <h3 className="font-heading font-semibold text-xl">Dental Implants</h3>
                  </div>
                  <p className="text-neutral-dark">Permanent replacement teeth that look and function like natural teeth.</p>
                </div>
              </>
            )}
            
            {specialization.slug === "periodontics" && (
              <>
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <i className="fa-solid fa-broom text-primary text-xl mr-3"></i>
                    <h3 className="font-heading font-semibold text-xl">Scaling & Root Planing</h3>
                  </div>
                  <p className="text-neutral-dark">Deep cleaning to remove plaque and tartar from beneath the gumline.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <i className="fa-solid fa-scalpel text-primary text-xl mr-3"></i>
                    <h3 className="font-heading font-semibold text-xl">Gum Grafting</h3>
                  </div>
                  <p className="text-neutral-dark">Surgical procedure to cover exposed tooth roots and prevent further recession.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <i className="fa-solid fa-tooth text-primary text-xl mr-3"></i>
                    <h3 className="font-heading font-semibold text-xl">Laser Therapy</h3>
                  </div>
                  <p className="text-neutral-dark">Minimally invasive treatment for gum disease using advanced laser technology.</p>
                </div>
              </>
            )}
            
            {specialization.slug === "orthodontics" && (
              <>
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <i className="fa-solid fa-brackets-curly text-primary text-xl mr-3"></i>
                    <h3 className="font-heading font-semibold text-xl">Traditional Braces</h3>
                  </div>
                  <p className="text-neutral-dark">Metal brackets and wires that gradually straighten teeth and correct bite issues.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <i className="fa-solid fa-teeth text-primary text-xl mr-3"></i>
                    <h3 className="font-heading font-semibold text-xl">Clear Aligners</h3>
                  </div>
                  <p className="text-neutral-dark">Removable clear trays that straighten teeth discreetly and comfortably.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <i className="fa-solid fa-gears text-primary text-xl mr-3"></i>
                    <h3 className="font-heading font-semibold text-xl">Orthodontic Appliances</h3>
                  </div>
                  <p className="text-neutral-dark">Specialized devices to address specific alignment and bite issues.</p>
                </div>
              </>
            )}
            
            {specialization.slug === "endodontics" && (
              <>
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <i className="fa-solid fa-toolbox text-primary text-xl mr-3"></i>
                    <h3 className="font-heading font-semibold text-xl">Root Canal Therapy</h3>
                  </div>
                  <p className="text-neutral-dark">Treatment to remove infected pulp tissue and save a damaged tooth.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <i className="fa-solid fa-microscope text-primary text-xl mr-3"></i>
                    <h3 className="font-heading font-semibold text-xl">Apicoectomy</h3>
                  </div>
                  <p className="text-neutral-dark">Surgical procedure to remove infected tissue at the tip of a tooth's root.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <i className="fa-solid fa-wand-magic-sparkles text-primary text-xl mr-3"></i>
                    <h3 className="font-heading font-semibold text-xl">Internal Bleaching</h3>
                  </div>
                  <p className="text-neutral-dark">Specialized whitening treatment for discolored teeth that have undergone root canal therapy.</p>
                </div>
              </>
            )}
            
            {specialization.slug === "oral-surgery" && (
              <>
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <i className="fa-solid fa-tooth text-primary text-xl mr-3"></i>
                    <h3 className="font-heading font-semibold text-xl">Tooth Extractions</h3>
                  </div>
                  <p className="text-neutral-dark">Safe removal of damaged or problematic teeth, including wisdom teeth.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <i className="fa-solid fa-bone text-primary text-xl mr-3"></i>
                    <h3 className="font-heading font-semibold text-xl">Bone Grafting</h3>
                  </div>
                  <p className="text-neutral-dark">Procedure to build up jawbone for dental implant placement or to address bone loss.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <i className="fa-solid fa-user-md text-primary text-xl mr-3"></i>
                    <h3 className="font-heading font-semibold text-xl">Corrective Jaw Surgery</h3>
                  </div>
                  <p className="text-neutral-dark">Surgical treatment for misaligned jaws to improve function and appearance.</p>
                </div>
              </>
            )}
            
            {specialization.slug === "pediatric-dentistry" && (
              <>
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <i className="fa-solid fa-shield-virus text-primary text-xl mr-3"></i>
                    <h3 className="font-heading font-semibold text-xl">Preventive Care</h3>
                  </div>
                  <p className="text-neutral-dark">Age-appropriate cleanings, fluoride treatments, and sealants to prevent decay.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <i className="fa-solid fa-baby-carriage text-primary text-xl mr-3"></i>
                    <h3 className="font-heading font-semibold text-xl">Infant Oral Health</h3>
                  </div>
                  <p className="text-neutral-dark">Early assessment and guidance for parents on caring for their child's developing teeth.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <i className="fa-solid fa-face-smile text-primary text-xl mr-3"></i>
                    <h3 className="font-heading font-semibold text-xl">Behavior Management</h3>
                  </div>
                  <p className="text-neutral-dark">Specialized techniques to help children feel comfortable during dental visits.</p>
                </div>
              </>
            )}
            
            {/* Default treatments if specialization doesn't match any of the above */}
            {!["prosthodontics", "periodontics", "orthodontics", "endodontics", "oral-surgery", "pediatric-dentistry"].includes(specialization.slug) && (
              <>
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <i className="fa-solid fa-clipboard-check text-primary text-xl mr-3"></i>
                    <h3 className="font-heading font-semibold text-xl">Consultations</h3>
                  </div>
                  <p className="text-neutral-dark">Comprehensive evaluation and personalized treatment planning.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <i className="fa-solid fa-stethoscope text-primary text-xl mr-3"></i>
                    <h3 className="font-heading font-semibold text-xl">Specialized Procedures</h3>
                  </div>
                  <p className="text-neutral-dark">Advanced treatments specific to this specialty area.</p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <i className="fa-solid fa-comments text-primary text-xl mr-3"></i>
                    <h3 className="font-heading font-semibold text-xl">Follow-up Care</h3>
                  </div>
                  <p className="text-neutral-dark">Ongoing support and monitoring to ensure optimal treatment outcomes.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-neutral-darkest mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-dark max-w-3xl mx-auto">
              Find answers to common questions about our {specialization.name} services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 border-b border-neutral-medium pb-6 last:border-0">
                <h3 className="font-heading font-semibold text-xl mb-3">{faq.question}</h3>
                <p className="text-neutral-dark">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-6">Ready to Schedule Your {specialization.name} Consultation?</h2>
          <p className="text-white text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Our specialists are ready to help you achieve your best smile and optimal oral health.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact#appointment">
              <Button variant="outline" className="w-full sm:w-auto bg-white hover:bg-neutral-medium text-primary text-center font-medium py-3 px-6 rounded-md transition duration-300 ease-in-out">
                Request an Appointment
              </Button>
            </Link>
            <a href="tel:+11234567890">
              <Button className="w-full sm:w-auto bg-primary-dark hover:bg-primary-dark/90 text-white text-center font-medium py-3 px-6 rounded-md transition duration-300 ease-in-out">
                <i className="fa-solid fa-phone mr-2"></i> Call: (123) 456-7890
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecializationDetail;
