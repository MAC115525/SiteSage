const Features = () => {
  const features = [
    {
      icon: "fa-solid fa-user-doctor",
      title: "Expert Specialists",
      description: "Our team of specialists brings years of experience and expertise to provide you with the best dental care."
    },
    {
      icon: "fa-solid fa-teeth",
      title: "Comprehensive Care",
      description: "From preventive care to complex procedures, we offer a full range of dental services for the whole family."
    },
    {
      icon: "fa-solid fa-wand-magic-sparkles",
      title: "Advanced Technology",
      description: "We utilize the latest dental technology to provide efficient, comfortable, and effective treatments."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-secondary rounded-lg p-6 text-center">
              <div className="bg-primary inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                <i className={`${feature.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-neutral-dark">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
