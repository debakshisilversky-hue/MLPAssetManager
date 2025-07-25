import Navigation from "@/components/ui/navigation";
import Hero from "@/components/ui/hero";
import Features from "@/components/ui/features";
import Screenshots from "@/components/ui/screenshots";
import Testimonials from "@/components/ui/testimonials";
import UseCases from "@/components/ui/use-cases";
import FAQ from "@/components/ui/faq";
import CTA from "@/components/ui/cta";
import Footer from "@/components/ui/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold metaphoto-text-black-02 mb-8">
                Field Documentation <span className="metaphoto-text-red">Challenges</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 metaphoto-text-red" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold metaphoto-text-black-02 mb-2">Disconnected Workflows</h3>
                    <p className="text-gray-600">Photos scattered across devices, missing metadata, no standardized reporting format.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 metaphoto-text-red" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold metaphoto-text-black-02 mb-2">Connectivity Dependencies</h3>
                    <p className="text-gray-600">Remote locations with poor internet make cloud-based solutions unreliable.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 metaphoto-text-red" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold metaphoto-text-black-02 mb-2">Manual Report Creation</h3>
                    <p className="text-gray-600">Hours spent organizing photos and creating professional documentation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold metaphoto-text-black-02 mb-8">
                Our <span className="metaphoto-text-primary">Solution</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 metaphoto-text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold metaphoto-text-black-02 mb-2">Structured Capture & Organization</h3>
                    <p className="text-gray-600">Smart templates, automatic metadata tagging, and project-based organization.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 metaphoto-text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold metaphoto-text-black-02 mb-2">Offline-First Architecture</h3>
                    <p className="text-gray-600">Works completely offline with automatic sync when connectivity returns.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 metaphoto-text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold metaphoto-text-black-02 mb-2">Instant Professional Reports</h3>
                    <p className="text-gray-600">Generate PDF reports with embedded photos, maps, and metadata in seconds.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Screenshots />
      <Testimonials />
      <UseCases />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
