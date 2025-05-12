import SEO from "@/components/SEO";
import TelehealthConsultation from "@/components/TelehealthConsultation";

const Telehealth = () => {
  return (
    <>
      <SEO 
        title="Virtual Dental Consultations | Telehealth Services | Dental Diagnostic Centre"
        description="Connect with our dental specialists remotely through secure video consultations. Get expert dental advice, follow-ups, and treatment planning from the comfort of your home."
        canonicalUrl="/telehealth"
        ogImage="/telehealth-og-image.jpg"
        ogType="website"
      />
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">Telehealth Dental Consultations</h1>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Consult with our specialists without leaving your home. Our secure telehealth platform connects you directly with Dr. Salauddin Khan and our dental team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-center mb-4">
                <span className="inline-block text-3xl text-primary">
                  <i className="fa-solid fa-laptop-medical"></i>
                </span>
                <h3 className="text-xl font-heading font-semibold mt-2">Why Choose Telehealth?</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                  <span>Consult with our specialists without travel time</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                  <span>Ideal for follow-up appointments and quick consultations</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                  <span>Review test results and treatment options remotely</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                  <span>Secure and compliant with healthcare privacy standards</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                  <span>Reduced waiting times compared to in-person visits</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-center mb-4">
                <span className="inline-block text-3xl text-primary">
                  <i className="fa-solid fa-clipboard-list"></i>
                </span>
                <h3 className="text-xl font-heading font-semibold mt-2">Ideal For</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                  <span>Pre-screening before in-person treatments</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                  <span>Post-treatment follow-ups and monitoring</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                  <span>Initial consultations for cosmetic procedures</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                  <span>Discussing treatment options and care plans</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                  <span>Urgent dental concerns requiring quick assessment</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mb-12">
            <div className="bg-neutral-lightest rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-heading font-semibold mb-6 text-center">How Our Telehealth Service Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">1</span>
                  </div>
                  <h3 className="font-heading font-medium text-lg mb-2">Schedule</h3>
                  <p className="text-neutral-dark">Book your telehealth appointment through our online form or by phone.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">2</span>
                  </div>
                  <h3 className="font-heading font-medium text-lg mb-2">Prepare</h3>
                  <p className="text-neutral-dark">You'll receive confirmation with instructions and your unique consultation ID.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">3</span>
                  </div>
                  <h3 className="font-heading font-medium text-lg mb-2">Connect</h3>
                  <p className="text-neutral-dark">Join the secure video call at your appointment time to meet with your dental specialist.</p>
                </div>
              </div>
            </div>
          </div>
          
          <TelehealthConsultation />
        </div>
      </div>
    </>
  );
};

export default Telehealth;