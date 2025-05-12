import { Link } from 'wouter';
import SEO from '@/components/SEO';
import ContactForm from '@/components/ContactForm';
import AppointmentForm from '@/components/AppointmentForm';

const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact Us | Dental Diagnostic Centre" 
        description="Contact DDC - Dental Diagnostic Centre in Bengaluru to schedule an appointment with Dr. Salauddin Khan, request a consultation, or get directions to our Richmond Road location." 
      />
      
      {/* Page Header */}
      <div className="bg-secondary py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-neutral-darkest text-center">Contact Us</h1>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          <p className="text-center text-neutral-dark max-w-3xl mx-auto mt-6">
            Have questions or need assistance? We're here to help. Reach out to us through any of the following methods.
          </p>
        </div>
      </div>
      
      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h2 className="font-heading font-semibold text-2xl mb-4">Our Location</h2>
                <p className="text-neutral-dark mb-4">
                  Parvathi Plaza, Richmond Rd<br />
                  Langford Gardens, Bengaluru<br />
                  Karnataka 560025<br />
                  India
                </p>
                <div className="rounded-lg overflow-hidden shadow-md h-64 mb-4">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.034080534542!2d77.6069305!3d12.9658903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16836e1ab061%3A0xb390622d12d7f4a6!2sParvathi%20Plaza%2C%20Richmond%20Rd%2C%20Langford%20Gardens%2C%20Bengaluru%2C%20Karnataka%20560025%2C%20India!5e0!3m2!1sen!2sus!4v1685532678929!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dental Diagnostic Centre location map"
                    aria-label="Google Map showing the location of Dental Diagnostic Centre"
                  ></iframe>
                </div>
                <p className="text-sm text-neutral-dark">
                  <i className="fa-solid fa-circle-info mr-1"></i>
                  Free parking available in our dedicated lot.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="font-heading font-semibold text-2xl mb-4">Hours of Operation</h2>
                <ul className="space-y-2 text-neutral-dark">
                  <li className="flex justify-between">
                    <span>Monday - Thursday:</span>
                    <span className="font-medium">8:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Friday:</span>
                    <span className="font-medium">8:00 AM - 3:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">9:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="font-heading font-semibold text-2xl mb-4">Contact Information</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="text-primary mt-1 mr-4">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-neutral-dark">+91 80 2224 5678</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary mt-1 mr-4">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-neutral-dark">info@dentaldiagnosticcentre.com</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-primary mt-1 mr-4">
                      <i className="fa-solid fa-bell-concierge"></i>
                    </div>
                    <div>
                      <p className="font-medium">Emergency Care</p>
                      <p className="text-neutral-dark">+91 80 2224 5680</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="font-heading font-semibold text-2xl mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Appointment Section */}
      <section id="appointment" className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-heading font-bold text-3xl text-neutral-darkest mb-4">Request an Appointment</h2>
              <p className="text-neutral-dark text-lg mb-8">
                Whether you need a routine cleaning, have a specific concern, or are interested in cosmetic options, we're here to help.
              </p>
            </div>
            
            <AppointmentForm />
          </div>
        </div>
      </section>
      
      {/* Insurance Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl text-neutral-darkest mb-4">Insurance & Payment Options</h2>
            <p className="text-neutral-dark max-w-3xl mx-auto">
              We accept most major dental insurance plans and offer flexible payment options to make dental care accessible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary rounded-lg p-6">
              <h3 className="font-heading font-semibold text-xl mb-4">Accepted Insurance Plans</h3>
              <p className="text-neutral-dark mb-4">
                We work with most major dental insurance providers, including:
              </p>
              <ul className="space-y-2 text-neutral-dark">
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                  <span>Star Health</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                  <span>Manipal Cigna</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                  <span>Aditya Birla Health</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                  <span>HDFC ERGO Health</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                  <span>Apollo Munich Health</span>
                </li>
              </ul>
              <p className="text-neutral-dark mt-4">
                Our team will help verify your benefits and explain any out-of-pocket costs before treatment.
              </p>
            </div>
            
            <div className="bg-secondary rounded-lg p-6">
              <h3 className="font-heading font-semibold text-xl mb-4">Payment Options</h3>
              <p className="text-neutral-dark mb-4">
                We offer several payment options to make dental care affordable:
              </p>
              <ul className="space-y-2 text-neutral-dark">
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                  <span>Cash, UPI, and all major credit/debit cards</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                  <span>National health insurance coverage</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                  <span>Corporate health plans</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                  <span>EMI options available with select banks</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-primary mt-1 mr-3"></i>
                  <span>Personalized payment plans for extensive treatments</span>
                </li>
              </ul>
              <p className="text-neutral-dark mt-4">
                Please contact our office to discuss which options might work best for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
