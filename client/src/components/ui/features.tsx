export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Geospatial Photo Mapping",
      description: "Automatic GPS tagging with visual map pins showing photo locations and capture directions.",
      details: [
        "Real-time location tracking",
        "Direction compass integration", 
        "Map-based photo browsing"
      ],
      bgColor: "bg-teal-50",
      iconColor: "metaphoto-text-primary"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Smart Photo Capture",
      description: "Intelligent ID generation, metadata tagging, and automatic image compression for offline usage.",
      details: [
        "Auto-generated unique IDs",
        "Customizable metadata fields",
        "Local image optimization"
      ],
      bgColor: "bg-yellow-50",
      iconColor: "metaphoto-text-yellow"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Professional PDF Export",
      description: "Generate comprehensive reports with embedded images, maps, and metadata—completely offline.",
      details: [
        "Customizable report templates",
        "High-resolution image embedding",
        "Instant export capability"
      ],
      bgColor: "bg-cyan-50",
      iconColor: "metaphoto-text-primary-450"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
      title: "Project Management",
      description: "Advanced CRUD operations with filtering, search, and project-based organization.",
      details: [
        "Multi-project support",
        "Advanced filtering & search",
        "Progress tracking"
      ],
      bgColor: "bg-emerald-50",
      iconColor: "metaphoto-text-primary-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4z" clipRule="evenodd" />
          <path d="M14 6a1 1 0 012 0v3a1 1 0 11-2 0V6z" />
        </svg>
      ),
      title: "Template Gallery",
      description: "Pre-built photolog templates with custom theming and real-time loading capabilities.",
      details: [
        "Industry-specific templates",
        "Custom branding options",
        "Template sharing"
      ],
      bgColor: "bg-blue-50",
      iconColor: "metaphoto-text-primary-550"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Secure & Reliable",
      description: "Enterprise-grade security with encrypted storage and robust subscription management.",
      details: [
        "End-to-end encryption",
        "Local data backup",
        "Subscription controls"
      ],
      bgColor: "bg-red-50",
      iconColor: "metaphoto-text-red"
    }
  ];

  return (
    <section id="features" className="py-20 metaphoto-bg-primary-350">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold metaphoto-text-black-02 mb-4">Powerful Features for Field Teams</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for professional photo documentation, built for real-world fieldwork conditions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                <div className={feature.iconColor}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold metaphoto-text-black-02 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="text-sm text-gray-500 space-y-1">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>• {detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
