import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const Facilities = () => {
  // Facility images
  const facilityImages = [
    {
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Modern dental operatory",
      caption: "State-of-the-art treatment room with the latest technology"
    },
    {
      src: "https://images.unsplash.com/photo-1629909615188-eb0e64a6bedf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Comfortable waiting room",
      caption: "Welcoming reception area designed for comfort"
    },
    {
      src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Child-friendly treatment area",
      caption: "Special area designed for our youngest patients"
    },
    {
      src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Consultation room",
      caption: "Private space for discussing treatment options"
    }
  ];

  // Technology features
  const technologyFeatures = [
    {
      icon: "fa-solid fa-x-ray",
      title: "Digital X-rays",
      description: "Lower radiation exposure and instant image viewing for more efficient diagnosis"
    },
    {
      icon: "fa-solid fa-cube",
      title: "3D Imaging",
      description: "Advanced imaging for precise diagnosis and treatment planning"
    },
    {
      icon: "fa-solid fa-camera",
      title: "Intraoral Cameras",
      description: "See what we see with high-resolution images of your mouth"
    },
    {
      icon: "fa-solid fa-wand-magic-sparkles",
      title: "Laser Dentistry",
      description: "Minimally invasive procedures with less discomfort and faster healing"
    },
    {
      icon: "fa-solid fa-tv",
      title: "Chairside Monitors",
      description: "Educational tools to help you understand your oral health and treatment options"
    },
    {
      icon: "fa-solid fa-shield-virus",
      title: "Sterilization Center",
      description: "State-of-the-art sterilization exceeding industry standards for your safety"
    }
  ];

  return (
    <>
      <SEO 
        title="Our Facilities" 
        description="Explore our modern dental clinic featuring state-of-the-art technology, comfortable treatment rooms, and amenities designed for your comfort and exceptional care." 
      />
      
      {/* Page Header */}
      <div className="bg-secondary py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-neutral-darkest text-center">Our Facilities</h1>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          <p className="text-center text-neutral-dark max-w-3xl mx-auto mt-6">
            Experience comfort and state-of-the-art technology in our modern dental clinic.
          </p>
        </div>
      </div>
      
      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-heading font-bold text-3xl text-neutral-darkest mb-6">Designed for Your Comfort</h2>
              <p className="text-neutral-dark mb-6">
                Our clinic is designed with your comfort in mind. From the moment you step into our reception area to the time you spend in our treatment rooms, we've created an environment that helps reduce anxiety and makes dental visits a pleasant experience.
              </p>
              <p className="text-neutral-dark mb-6">
                Each treatment room is equipped with comfortable chairs, entertainment options, and calming décor to help you relax during your visit. Our reception area offers comfortable seating, complimentary refreshments, and amenities for both adults and children.
              </p>
              <p className="text-neutral-dark">
                We've also incorporated design elements that ensure accessibility for all patients, including those with mobility challenges.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1629909615188-eb0e64a6bedf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Comfortable waiting room" 
                className="rounded-lg shadow-lg w-full h-auto"
                loading="lazy" 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern dental operatory" 
                className="rounded-lg shadow-lg w-full h-auto"
                loading="lazy" 
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-heading font-bold text-3xl text-neutral-darkest mb-6">Cutting-Edge Technology</h2>
              <p className="text-neutral-dark mb-6">
                We've invested in the latest dental technology to provide efficient, effective care with minimal discomfort. Our digital imaging equipment reduces radiation exposure, our intraoral cameras allow you to see what we see, and our treatment rooms are equipped with the latest dental instruments.
              </p>
              <p className="text-neutral-dark mb-6">
                Our sterilization center exceeds industry standards to ensure your safety, and we continually update our equipment and techniques as advancements are made in dental technology.
              </p>
              <p className="text-neutral-dark">
                This investment in technology translates to more accurate diagnoses, more efficient treatments, and better outcomes for our patients.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Photo Gallery */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-neutral-darkest mb-4">Tour Our Clinic</h2>
            <p className="text-neutral-dark max-w-3xl mx-auto">
              Take a visual tour of our modern, comfortable dental clinic.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilityImages.map((image, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                  loading="lazy" 
                />
                <p className="text-center text-neutral-dark">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technology Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-neutral-darkest mb-4">Our Technology</h2>
            <p className="text-neutral-dark max-w-3xl mx-auto">
              We utilize advanced dental technology to provide efficient, comfortable, and effective treatments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyFeatures.map((feature, index) => (
              <div key={index} className="bg-secondary rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <i className={`${feature.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="font-heading font-semibold text-xl">{feature.title}</h3>
                </div>
                <p className="text-neutral-dark">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Virtual Tour CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-6">Experience Our Clinic in Person</h2>
          <p className="text-white text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Photos can only show so much. Schedule a visit to experience our comfortable environment and meet our friendly team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact#appointment">
              <Button variant="outline" className="bg-white hover:bg-neutral-medium text-primary font-medium py-3 px-6 rounded-md transition duration-300 ease-in-out">
                Schedule a Visit
              </Button>
            </Link>
            <a href="tel:+11234567890">
              <Button className="bg-primary-dark hover:bg-primary-dark/90 text-white font-medium py-3 px-6 rounded-md transition duration-300 ease-in-out">
                <i className="fa-solid fa-phone mr-2"></i> Call Us Today
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facilities;
