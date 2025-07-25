import { useState, useEffect } from "react";
import { Button } from "./button";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Infrastructure Inspector",
      company: "Metro Engineering",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      quote: "MetaPhotoLog transformed how we document bridge inspections. The offline capability is crucial when working in remote locations, and the automatic GPS tagging saves us hours of manual work.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Safety Auditor", 
      company: "Construction Solutions Inc",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      quote: "The professional reports this app generates are incredible. Our clients love the detailed photo documentation with embedded maps and metadata. It's made our compliance reporting so much easier.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "Environmental Scientist",
      company: "EcoField Research",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      quote: "Field research requires precision and MetaPhotoLog delivers. The custom templates help standardize our data collection, and being able to work completely offline is essential for our remote sites.",
      rating: 5
    },
    {
      name: "James Mitchell",
      role: "Equipment Manager",
      company: "Industrial Maintenance Corp",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      quote: "We use MetaPhotoLog for all our equipment inspections. The ability to organize photos by project and export professional reports has streamlined our maintenance workflows significantly.",
      rating: 5
    },
    {
      name: "Lisa Park",
      role: "Quality Control Lead",
      company: "BuildTech Solutions",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      quote: "The map integration is fantastic - seeing exactly where each photo was taken helps with project coordination. The app is reliable, fast, and the customer support team is excellent.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'metaphoto-text-yellow' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold metaphoto-text-black-02 mb-4">Trusted by Field Professionals</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what industry experts say about MetaPhotoLog's impact on their documentation workflows.
          </p>
        </div>

        <div className="relative">
          {/* Main testimonial display */}
          <div className="bg-gradient-to-br metaphoto-bg-primary-350 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                <blockquote className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div>
                  <div className="font-semibold metaphoto-text-black-02 text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="metaphoto-text-primary font-medium">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white border-2 metaphoto-text-primary hover:metaphoto-bg-primary hover:text-white shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white border-2 metaphoto-text-primary hover:metaphoto-bg-primary hover:text-white shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'metaphoto-bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Join thousands of professionals who trust MetaPhotoLog</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-gray-500 font-medium">Metro Engineering</div>
            <div className="text-gray-500 font-medium">Construction Solutions Inc</div>
            <div className="text-gray-500 font-medium">EcoField Research</div>
            <div className="text-gray-500 font-medium">BuildTech Solutions</div>
          </div>
        </div>
      </div>
    </section>
  );
}