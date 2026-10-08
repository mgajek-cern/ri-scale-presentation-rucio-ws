import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

// Sequence (mirrors the abstract):

// Introduction (Title, Recap) - Sets context, links back to the first workshop
// Architecture (DLM diagram) - Where Rucio + FTS sit
// Testbed (What we built, IdP findings, small changes) - What has been validated
// Deployment (Kubernetes, GitOps, managed cloud) - Dev environment to production-like
// Authorization (OPA) - Policy-based access control
// Future (Roadmap) - Real use cases, on-prem + cloud, partner guidance
// Closing - Q&A

const slides = [
  {
    type: 'title',
    title: 'RI-SCALE',
    subtitle: 'DEP DLM Testbed for Validating RI-SCALE Deployments',
    author: 'Marvin Gajek (CERN), Rohit Shreenivas',
    footer: 'Presented by Rohit Shreenivas | Rucio Workshop 2026'
  },

  {
    type: 'content',
    title: 'RI-SCALE in a Nutshell',
    content: [
      {
        heading: 'Project',
        text: 'Data Exploitation Platforms (DEPs) for European Research Infrastructures | 29 participants, 13 countries | 2025-2028'
      },
      {
        heading: 'Our Role',
        text: 'Rucio and FTS as the data orchestration layer of the Data Lifecycle Management (DLM)'
      },
      {
        heading: 'Last Workshop',
        text: 'Project context, use cases and DLM architecture'
      },
      {
        heading: 'Since Then',
        text: 'An open, CI-validated testbed and a Kubernetes deployment path for use cases'
      }
    ]
  },

  {
    type: 'image',
    title: 'Data Lifecycle Management Architecture',
    description: 'Core data orchestration layer powered by Rucio and FTS, managing data discovery, transfer and preparation across distributed European research facilities',
    image: 'High-Level Diagram RI-SCALE Data Lifecycle Management.png'
  },

  {
    type: 'content',
    title: 'dep-dlm-testbed',
    bullets: [
      'Stack: Rucio, FTS3, XRootD, Teapot WebDAV, Keycloak and OPA',
      'Validated end to end: OIDC token orchestration, third-party-copy transfers and rule lifecycles',
      'Both FTS token modes: managed (token exchange) and unmanaged',
      'Same scenarios on Docker Compose and Kubernetes, every one run in CI',
      'External identity federations: EGI Check-In and LS AAI / Perun'
    ]
  },

  {
    type: 'twocolumn',
    title: 'Identity Providers: Findings & Patches',
    left: {
      heading: 'What We Found',
      items: [
        'Token exchange capabilities differ per IdP (e.g. resource= and refresh_token support)',
        'Features not yet upstream in Rucio, FTS3, gfal2, davix and Teapot',
        'IdP-specific onboarding (e.g. LS AAI test VO membership)'
      ]
    },
    right: {
      heading: 'What We Did',
      items: [
        'Minimal, documented patches with decisions recorded as ADRs',
        'Per-IdP scope profiles instead of a binary wlcg/egi switch',
        'Runbook for adding a new IdP profile'
      ]
    }
  },

  {
    type: 'content',
    title: 'From Testbed to Production-Like Deployment',
    bullets: [
      'Helm: umbrella chart, upstream Rucio charts where available',
      'GitOps: Argo CD and Flux across sandbox, staging and production',
      'Staging on a managed cloud platform (GKE): managed PostgreSQL, external secrets management',
      'Public endpoints via Gateway API, infrastructure provisioned with Terraform',
      'Own XRootD/Teapot validation storage registered as RSE, e2e transfer tests run against it'
    ]
  },

  {
    type: 'content',
    title: 'Policy-Driven Authorization',
    content: [
      {
        heading: 'Approach',
        text: 'Rucio delegates permission checks to OPA through a Rego policy package'
      },
      {
        heading: 'Validation',
        text: 'Rego unit tests in CI and entitlement-tier tests across DEP persona accounts'
      },
      {
        heading: 'Next Step',
        text: 'Policy-driven data access across institutions, with ODRL policies from the WP4 policy repository'
      }
    ]
  },

  {
    type: 'content',
    title: 'Roadmap for Use Cases',
    content: [
      {
        heading: 'Done',
        text: 'Testbed, external IdPs, GitOps and managed-cloud staging, OPA authorization'
      },
      {
        heading: 'Next (late 2026-2027)',
        text: 'Use-case data holdings registered as RSEs (public and sensitive), operator runbooks for partner sites, reusable deployment repository'
      },
      {
        heading: 'Later (2027-2028)',
        text: 'On-premises and multi-cloud variants, multiple DEP deployments'
      },
      {
        heading: 'Impact',
        text: 'Secure, scalable data access for European RIs and contribution back to the Rucio community'
      }
    ]
  },

  {
    type: 'closing',
    title: 'Thank You',
    content: 'Questions & Discussion',
    contact: [
      'Project: RI-SCALE',
      'Contact: rohit.nanjangud.shreenivas@cern.ch, marvin.gajek@cern.ch',
      'Testbed: https://github.com/RI-SCALE/dep-dlm-testbed',
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
