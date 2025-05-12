const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      quote: "I've been terrified of dentists my entire life, but Dr. Johnson and her team made me feel completely at ease. For the first time, I actually look forward to my dental appointments!",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
      name: "Jennifer K.",
      duration: "Patient for 3 years"
    },
    {
      rating: 5,
      quote: "The Invisalign treatment I received from Dr. Chen completely transformed my smile. The process was smooth, and the results exceeded my expectations. I couldn't be happier!",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
      name: "David M.",
      duration: "Patient for 2 years"
    },
    {
      rating: 5,
      quote: "My daughter used to be terrified of the dentist until we found Dr. Rodriguez. Her gentle approach and fun environment made all the difference. Now my daughter reminds ME when it's time for her checkup!",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
      name: "Sophia T.",
      duration: "Patient for 4 years"
    }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-darkest mb-4">Patient Testimonials</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
            See what our patients are saying about their experience at Smiles Dental Clinic.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex text-warning mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </div>
              <p className="text-neutral-dark italic mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  loading="lazy" 
                />
                <div>
                  <h4 className="font-heading font-semibold">{testimonial.name}</h4>
                  <p className="text-neutral-dark text-sm">{testimonial.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
