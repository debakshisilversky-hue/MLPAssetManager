import { Button } from "./button";
import projectsImage from "@assets/Projects_1753438394653.png";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-cyan-100 rounded-full text-sm font-medium metaphoto-text-primary mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.196l6.928 4v11.608l-6.928 4-6.928-4V6.196l6.928-4z" />
              </svg>
              Offline-First Architecture
            </div>
            <h1 className="text-4xl md:text-6xl font-bold metaphoto-text-black-02 mb-6 leading-tight">
              Professional Field Documentation 
              <span className="metaphoto-text-primary"> Made Simple</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Capture, organize, and export structured photo reports with geolocation data—completely offline. 
              Built for engineers, inspectors, and field teams who demand precision and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-black text-white px-6 py-4 text-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 rounded-xl">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </Button>
              <Button className="bg-green-600 text-white px-6 py-4 text-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 rounded-xl">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.85C20.5,11.05 20.75,11.35 20.75,11.73C20.75,12.11 20.53,12.32 20.16,12.47L17.5,13.65L15.09,11.24L17.5,8.83L20.16,10.85M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Play Store
              </Button>
            </div>
            <div className="mt-6">
              <Button variant="outline" className="border-2 metaphoto-text-primary border-current px-8 py-3 text-base font-semibold hover:metaphoto-bg-primary hover:text-white transition-colors">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </Button>
            </div>

          </div>
          <div className="relative">
            {/* Mobile phone frame displaying app screenshots */}
            <div className="relative mx-auto w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full metaphoto-bg-primary rounded-[2.5rem] overflow-hidden relative">
                {/* Status bar */}
                <div className="absolute top-0 left-0 right-0 h-8 metaphoto-bg-primary flex items-center justify-between px-6 text-white text-sm">
                  <span>9:41</span>
                  <div className="flex space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.24 0 1 1 0 01-1.415-1.415 5 5 0 017.07 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                </div>
                {/* App content */}
                <div className="pt-8 h-full bg-white rounded-t-[2.5rem] mt-8 overflow-hidden">
                  <img 
                    src={projectsImage} 
                    alt="MetaPhotoLog Projects Interface" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            {/* Floating feature callouts */}
            <div className="absolute -left-8 top-20 bg-white rounded-lg shadow-lg p-4 max-w-48 hidden lg:block">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 metaphoto-bg-yellow rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-sm">GPS Tracking</div>
                  <div className="text-xs text-gray-600">Automatic geotagging</div>
                </div>
              </div>
            </div>
            <div className="absolute -right-8 top-32 bg-white rounded-lg shadow-lg p-4 max-w-48 hidden lg:block">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 metaphoto-bg-primary-450 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 metaphoto-text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-sm">PDF Export</div>
                  <div className="text-xs text-gray-600">Professional reports</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
