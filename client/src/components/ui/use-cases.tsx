export default function UseCases() {
  const useCases = [
    {
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      title: "Infrastructure Inspections",
      description: "Bridge assessments, road surveys, and utility infrastructure documentation with precise geolocation data.",
      alt: "Field engineer working on infrastructure inspection"
    },
    {
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      title: "Construction Audits",
      description: "Quality control, safety compliance, and progress documentation for construction and development projects.",
      alt: "Construction site inspection and safety audit"
    },
    {
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      title: "Environmental Surveys",
      description: "Ecological assessments, environmental impact studies, and conservation project monitoring.",
      alt: "Environmental field survey and documentation"
    },
    {
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      title: "Equipment Maintenance",
      description: "Industrial equipment inspections, maintenance records, and compliance documentation.",
      alt: "Industrial equipment inspection and maintenance"
    }
  ];

  return (
    <section id="use-cases" className="py-20 metaphoto-bg-primary-350">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold metaphoto-text-black-02 mb-4">Real-World Applications</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how professionals across industries use MetaPhotoLog to streamline their documentation workflows.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
              <img 
                src={useCase.image} 
                alt={useCase.alt}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold metaphoto-text-black-02 mb-2">{useCase.title}</h3>
              <p className="text-gray-600 text-sm">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
