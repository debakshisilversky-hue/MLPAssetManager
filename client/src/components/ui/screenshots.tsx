import projectsImage from "@assets/Projects_1753438394653.png";
import projectDetailImage from "@assets/Project detail_1753438394653.png";
import templateImage from "@assets/Template Preview_1753438394651.png";

export default function Screenshots() {
  const screenshots = [
    {
      image: projectsImage,
      title: "Project Organization",
      description: "Manage multiple projects with advanced search and filtering capabilities.",
      alt: "MetaPhotoLog Projects interface showing project listing and search functionality"
    },
    {
      image: projectDetailImage,
      title: "Interactive Mapping",
      description: "Visual map interface with geotagged photo pins and capture directions.",
      alt: "MetaPhotoLog Project Detail view with interactive map showing photo locations"
    },
    {
      image: templateImage,
      title: "Report Templates",
      description: "Professional photolog templates with embedded images and metadata.",
      alt: "MetaPhotoLog Template Preview showing Urban Skyline Development Photolog"
    }
  ];

  return (
    <section id="screenshots" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold metaphoto-text-black-02 mb-4">See MetaPhotoLog in Action</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the intuitive interface designed for efficiency and precision in the field.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="text-center">
              <div className="relative mx-auto w-64 h-[480px] bg-black rounded-[2rem] p-1 shadow-2xl mb-6">
                <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                  <img 
                    src={screenshot.image} 
                    alt={screenshot.alt}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold metaphoto-text-black-02 mb-2">{screenshot.title}</h3>
              <p className="text-gray-600">{screenshot.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
