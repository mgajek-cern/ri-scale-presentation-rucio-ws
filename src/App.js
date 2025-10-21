import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

const slides = [
  // Slide 1: Title
  {
    type: 'title',
    title: 'RI-SCALE: Building a Data Exploitation Platform for European Research Infrastructures',
    subtitle: 'Rucio Workshop 2025',
    author: 'Marvin Gajek',
    footer: 'RI-SCALE Project'
  },
  
  // Slide 2: Project Overview
  {
    type: 'content',
    title: 'What is RI-SCALE?',
    content: [
      {
        heading: 'Mission',
        text: 'Develop secure, large-scale data management and AI-driven analysis platforms for European Research Infrastructures'
      },
      {
        heading: 'Scale',
        text: '29 partners from 13 countries | €10.5M budget | 36 months (2025-2028)'
      },
      {
        heading: 'Challenge',
        text: 'Unlocking scientific value in 2+ PB of underutilized datasets across distributed facilities'
      },
      {
        heading: 'Solution',
        text: 'Data Exploitation Platforms with integrated AI/ML capabilities'
      }
    ]
  },

  // Slide 3: Use Cases
  {
    type: 'content',
    title: 'Real-World Applications',
    bullets: [
      'Climate Modeling: High-resolution downscaling of scenarios and smart anomaly detection',
      'Cancer Treatment: Colorectal cancer prediction with explainable AI and synthetic pathology data',
      'Space Research: Intelligent radar scheduling and space debris detection',
      'Biological Imaging: Foundational models for heterogeneous image data and AI-powered discovery',
      'EuroHPC Integration: Running models on Europe\'s largest supercomputers for Digital Twin Earth'
    ]
  },

  // Slide 4: The Problem & Solution (merged challenge + why Rucio)
  {
    type: 'twocolumn',
    title: 'Challenge & Why Rucio+FTS?',
    left: {
      heading: 'The Challenge',
      items: [
        'Massive datasets distributed across European facilities',
        'Limited accessibility and discoverability',
        'Complex authentication requirements',
        'Need for secure, scalable data orchestration'
      ]
    },
    right: {
      heading: 'Why Rucio+FTS?',
      items: [
        'Proven at scale - battle-tested in CERN',
        'Distributed data management capabilities',
        'Flexible authentication framework',
        'Perfect fit for multi-site Research Infrastructure'
      ]
    }
  },

// Slide 5: Architecture Diagram
  {
    type: 'image',
    title: 'RI-SCALE Architecture',
    image: 'High-Level Diagram RI-SCALE Data Lifecycle Management.png'
  },

  // Slide 5: Description of Architecture Components
   {
    type: 'content',
    title: 'RI-SCALE Architecture',
    content: [
      {
        heading: 'Data Orchestration Core',
        text: 'Rucio + FTS for distributed data management and transfer'
      },
      {
        heading: 'Authentication Framework',
        text: 'Multi-IdP OIDC integration with authorization framework and credit management system'
      },
      {
        heading: 'Data Services',
        text: 'Discovery, popularity tracking and preparation services'
      },
      {
        heading: 'External Integration',
        text: 'Data holdings and data spaces'
      }
    ]
  },

  // Slide 6: Current Implementation (merged focus + technical approach)
  {
    type: 'content',
    title: 'Current Implementation Status',
    bullets: [
      'Deployment: GitOps-based Rucio deployment with Helm charts for RI-SCALE consortium',
      'Testing: Multi-IdP OIDC integration and third-party copy workflow testing',
      'Documentation: Comprehensive RUCIO deployment guides and views'
    ]
  },

  // Slide 7: Challenges & Solutions
  {
    type: 'content',
    title: 'Key Challenges & Solutions',
    bullets: [
      'Multi-IdP OIDC complexity → Standardized testing framework with automated validation',
      'Distributed deployment management → GitOps-based automation with Helm charts',
      'Partner facility integration → Standardized APIs and authentication protocols'
    ]
  },

  // Slide 8: Roadmap & Impact (merged next steps + benefits + collaboration)
  {
    type: 'content',
    title: 'Roadmap & Expected Impact',
    content: [
      {
        heading: 'Short Term (2025-early 2026)',
        text: 'Rucio prototype deployment and authentication blueprint design'
      },
      {
        heading: 'Medium Term (2026)',
        text: 'Multi-IdP integration, data holdings surveys and first repository integrations'
      },
      {
        heading: 'Long Term (2027-2028)',
        text: 'Full data holdings integration, multiple DEP deployments and optimization'
      },
      {
        heading: 'Impact',
        text: 'Secure, scalable data access for European RIs and contribution back to Rucio community'
      }
    ]
  },

  // Slide 9: Closing
  {
    type: 'closing',
    title: 'Thank You',
    content: 'Questions & Discussion',
    contact: [
      'Project: RI-SCALE',
      'Contact: marvin.gajek@cern.ch',
      'More info: https://www.riscale.eu'
    ]
  }
];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slide = slides[currentSlide];

  return (
    <div className="w-full h-screen bg-white flex flex-col relative">
      {/* Header with logos */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-start p-6 z-10">
        <img 
          src="/assets/ri-scale-logo-top-left.png" 
          alt="RI-SCALE Logo" 
          className="h-16 w-auto"
        />
        <img 
          src="/assets/logo-top-right.png" 
          alt="Decorative graphics" 
          className="h-20 w-auto"
        />
      </div>

      {/* Footer with EU funding logo */}
      <div className="absolute bottom-14 left-0 p-6 z-10">
        <img 
          src="/assets/funded-bottom-left.png" 
          alt="Funded by the European Union" 
          className="h-8 w-auto"
        />
      </div>

      {/* Slide Content */}
      <div className="flex-1 flex items-center justify-center p-8 pt-24 pb-20 overflow-y-auto">
        <div className="w-full max-w-5xl slide-content">
          {slide.type === 'title' && (
            <div className="text-center space-y-8">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">{slide.title}</h1>
              <p className="text-2xl text-orange-400">{slide.subtitle}</p>
              <p className="text-xl text-gray-700 mt-8">{slide.author}</p>
              <p className="text-lg text-gray-600">{slide.footer}</p>
            </div>
          )}

          {slide.type === 'content' && (
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{slide.title}</h2>
              {slide.bullets && (
                <ul className="space-y-4">
                  {slide.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-xl text-gray-800 flex items-start">
                      <span className="text-orange-500 mr-3">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              {slide.content && (
                <div className="space-y-6">
                  {slide.content.map((item, idx) => (
                    <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h3 className="text-2xl font-semibold text-orange-400 mb-3">{item.heading}</h3>
                      <p className="text-lg text-gray-700">{item.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {slide.type === 'twocolumn' && (
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{slide.title}</h2>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-2xl font-semibold text-red-700 mb-4">{slide.left.heading}</h3>
                  <ul className="space-y-3">
                    {slide.left.items.map((item, idx) => (
                      <li key={idx} className="text-lg text-gray-700 flex items-start">
                        <span className="text-red-500 mr-3">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-2xl font-semibold text-green-700 mb-4">{slide.right.heading}</h3>
                  <ul className="space-y-3">
                    {slide.right.items.map((item, idx) => (
                      <li key={idx} className="text-lg text-gray-700 flex items-start">
                        <span className="text-green-500 mr-3">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {slide.type === 'image' && (
            <div className="space-y-6 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">{slide.title}</h2>
              <div className="flex justify-center">
                <img
                  src={`/assets/${slide.image}`}
                  alt={slide.title}
                  className="max-h-[600px] w-auto border border-gray-300 rounded-lg shadow-lg bg-white p-4"
                />
              </div>
            </div>
          )}

          {slide.type === 'closing' && (
            <div className="text-center space-y-8">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">{slide.title}</h1>
              <p className="text-3xl text-orange-400 mb-8">{slide.content}</p>
              <div className="space-y-2 text-gray-700">
                {slide.contact.map((line, idx) => (
                  <p key={idx} className="text-xl">{line}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-gray-100 border-t border-gray-300 p-4 flex items-center justify-between relative z-20">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center gap-2 px-4 py-2 bg-orange-400 text-white rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-orange-700 transition"
        >
          <ChevronLeft size={20} />
          Previous
        </button>
        
        <div className="text-gray-600">
          Slide {currentSlide + 1} of {slides.length}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center gap-2 px-4 py-2 bg-orange-400 text-white rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-orange-700 transition"
        >
          Next
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default App;