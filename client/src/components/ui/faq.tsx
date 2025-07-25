import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "How does offline functionality work?",
      answer: "MetaPhotoLog stores all data locally on your device using an encrypted SQLite database. You can capture photos, create projects, and generate reports without any internet connection. When connectivity returns, the app automatically syncs your data to the cloud."
    },
    {
      question: "What file formats are supported for exports?",
      answer: "MetaPhotoLog exports professional reports in PDF format with embedded high-resolution images. You can also export raw photo data with CSV metadata files, and individual photos in JPEG format with preserved EXIF data."
    },
    {
      question: "How accurate is the GPS tagging?",
      answer: "Our geospatial engine provides sub-meter accuracy using device GPS combined with assisted positioning. Photos are automatically tagged with precise coordinates, elevation data, and capture direction using the device's compass."
    },
    {
      question: "Can I customize report templates?",
      answer: "Yes! MetaPhotoLog includes a template gallery with industry-specific layouts, and you can create custom templates with your branding, logos, and specific metadata fields. Templates support dynamic content and can be shared across your team."
    },
    {
      question: "Is there a limit on photo storage?",
      answer: "Storage limits depend on your subscription plan. The Professional plan includes 100GB of cloud storage with unlimited local storage. Our Enterprise plan offers unlimited cloud storage with advanced team collaboration features."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 metaphoto-bg-primary-350">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold metaphoto-text-black-02 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about MetaPhotoLog's features and capabilities.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <Collapsible open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
                <CollapsibleTrigger className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none hover:bg-gray-50 transition-colors">
                  <span className="text-lg font-semibold metaphoto-text-black-02">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 metaphoto-text-primary transition-transform duration-200 ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-5 text-gray-600">
                  {faq.answer}
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
