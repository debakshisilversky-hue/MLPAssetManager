export default function TechStack() {
  const techFeatures = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
      title: "Native Mobile Architecture",
      description: "Built for optimal performance and seamless integration with your device's camera and GPS.",
      details: [
        "Cross-platform compatibility",
        "Native camera integration",
        "Optimized battery usage"
      ],
      bgColor: "metaphoto-bg-primary",
      textColor: "text-white"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
      title: "Offline-First Data Layer",
      description: "Advanced local storage with automatic sync capabilities when you're back online.",
      details: [
        "Local database storage",
        "Automatic conflict resolution",
        "Incremental sync"
      ],
      bgColor: "metaphoto-bg-yellow",
      textColor: "text-white"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Geospatial Engine",
      description: "High-precision GPS tracking with offline mapping capabilities.",
      details: [
        "Sub-meter GPS accuracy",
        "Offline map tiles",
        "Direction compass integration"
      ],
      bgColor: "metaphoto-bg-primary-450",
      textColor: "metaphoto-text-primary"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
        </svg>
      ),
      title: "Image Processing",
      description: "Advanced compression and optimization for high-volume photo workflows.",
      details: [
        "Lossless compression",
        "EXIF data preservation",
        "Batch processing"
      ],
      bgColor: "metaphoto-bg-primary-600",
      textColor: "text-white"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Security & Encryption",
      description: "Enterprise-grade security with end-to-end encryption and secure backup.",
      details: [
        "AES-256 encryption",
        "Secure cloud backup",
        "Access control"
      ],
      bgColor: "metaphoto-bg-primary-550",
      textColor: "text-white"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
      title: "Scalable Backend",
      description: "Cloud infrastructure with automatic scaling and reliable data synchronization.",
      details: [
        "Auto-scaling infrastructure",
        "Global CDN delivery",
        "99.9% uptime guarantee"
      ],
      bgColor: "metaphoto-bg-red",
      textColor: "text-white"
    }
  ];

  return (
    <section id="tech" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold metaphoto-text-black-02 mb-4">What's Under the Hood</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built with cutting-edge technologies for performance, reliability, and seamless offline functionality.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techFeatures.map((feature, index) => (
            <div key={index} className="bg-teal-50 rounded-xl p-8">
              <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                <div className={feature.textColor}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold metaphoto-text-black-02 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="space-y-2 text-sm text-gray-500">
                {feature.details.map((detail, detailIndex) => (
                  <div key={detailIndex}>• {detail}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
