import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);


// Sequence:

// Introduction (Title, Project Overview, Use Cases) - Sets context
// Problem & Solution (Challenge/Why Rucio+FTS) - Establishes rationale
// Architecture (Diagram + Components) - Shows the solution
// Implementation (Current Status + Challenges/Solutions) - What you're building
// Future (Roadmap & Impact) - Where this leads
// Closing - Q&A

const slides = [

  {
    type: 'title',
    title: 'RI-SCALE: Building a Data Exploitation Platform for European Research Infrastructures',
    subtitle: 'Rucio Workshop 2025',
    author: 'Marvin Gajek',
    footer: 'RI-SCALE Project'
  },
  

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
        text: '29 participants from 13 countries | €10.5M budget | 36 months (2025-2028)'
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

  {
    type: 'image',
    title: 'Participants',
    image: 'Participants.png'
  },

  // Explain each group: research & development, commercial partner, etc. and how they coorperate


  {
    type: 'content',
    title: 'Key Use Cases',
    bullets: [
      'Climate Science: High-resolution downscaling and anomaly detection in weather data',
      'Space Research: Intelligent radar scheduling and space debris detection',
      'Medical Imaging: Colorectal cancer prediction and synthetic pathology data generation',
      'Biological Discovery: Foundation models for heterogeneous imaging and AI-powered analysis',
      'Data Intelligence: Generative AI assistants for automated discovery and analysis'
    ]
  },

  // {
  //   type: 'content',
  //   title: 'Key User Roles',
  //   bullets: [
  //     'Data Scientists: End users performing model development and analysis operations',
  //     'Domain Experts: Specialists providing domain knowledge and result validation',
  //     'DEP Administrators: Managing internal operations and system infrastructure'
  //   ]
  // },

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

  {
    type: 'image',
    title: 'RI-SCALE Architecture Overview',
    description: 'Complete Data Exploitation Platform ecosystem showing user roles, data flow and integration with external research infrastructure and compute resources',
    image: 'High-Level Diagram RI-SCALE Data Exploitation Platform.png'
  },

  {
    type: 'image', 
    title: 'Data Lifecycle Management Architecture',
    description: 'Core data orchestration layer powered by Rucio and FTS, managing data discovery, transfer and preparation across distributed European research facilities',
    image: 'High-Level Diagram RI-SCALE Data Lifecycle Management.png'
  },

  {
    type: 'content',
    title: 'RI-SCALE Architecture Components',
    bullets: [
      'Data Orchestration: Rucio + FTS for distributed data management and transfer',
      'Authentication & Credits: Multi-IdP OIDC with policy-based resource allocation',
      'Data Services: Discovery, popularity tracking and preparation for RI datasets',
      'AI Model Hub: Scalable repository with EuroHPC integration',
      'External Integration: Data holdings, data spaces and e-infrastructure connections'
    ]
  },

  {
    type: 'content',
    title: 'Current Implementation Status',
    bullets: [
      'Deployment: GitOps-based Rucio deployment with Helm charts for RI-SCALE consortium',
      'Testing: Creating integration and third-party copy workflow testing',
      'Documentation: RUCIO deployment guides and views'
    ]
  },

  {
    type: 'content',
    title: 'Key Challenges & Solutions',
    bullets: [
      'Multi-IdP integration challenges → Comprehensive OIDC testing framework',
      'Multi-site Rucio deployment → GitOps workflows with Helm-based configuration management',
      'Partner facility integration (IdPs, data holdings, data spaces) → Unified data orchestration layer with consistent token handling'
    ]
  },


  {
    type: 'content',
    title: 'RUCIO Roadmap & Expected Impact',
    content: [
      {
        heading: 'Short Term (2025-early 2026)',
        text: 'Rucio prototype deployment and authentication blueprint design'
      },
      {
        heading: 'Medium Term (2026)',
        text: 'Integration of multiple Identity providers, data holdings surveys and first repository integrations'
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

          {(slide.type === 'image' || slide.type === 'image2') && (
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