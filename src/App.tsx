/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { PortfolioSection } from './components/PortfolioSection';
import { PerformanceMetrics } from './components/PerformanceMetrics';
import { CostCalculator } from './components/CostCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { PROJECTS, Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [inquiryDetails, setInquiryDetails] = useState<{
    projectType?: string;
    modules?: string[];
    urgency?: string;
    estimatedCost?: string;
    tier?: string;
  } | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('get-started');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenProjectById = (projectId: string) => {
    const found = PROJECTS.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  const handleSelectService = (serviceName: string) => {
    setInquiryDetails({
      projectType: serviceName,
    });
    scrollToContact();
  };

  const handleSelectTier = (tierName: string, price: string) => {
    setInquiryDetails({
      tier: `${tierName} Plan (${price})`,
      estimatedCost: price,
    });
    scrollToContact();
  };

  const handleApplyEstimate = (details: {
    projectType: string;
    modules: string[];
    urgency: string;
    estimatedCost: string;
    estimatedWeeks: string;
  }) => {
    setInquiryDetails(details);
    scrollToContact();
  };

  const handleInquireFromModal = (projectTitle: string) => {
    setInquiryDetails({
      projectType: `Similar to ${projectTitle}`,
    });
    setSelectedProject(null);
    scrollToContact();
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#e5e2e1] overflow-hidden">
      {/* Background Liquid Glass Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[30%] -left-[15%] w-[65vw] h-[65vw] rounded-full bg-gradient-to-br from-sky-500/10 via-white/5 to-transparent blur-[140px]" />
        <div className="absolute top-[35%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-bl from-indigo-500/10 via-sky-600/5 to-transparent blur-[150px]" />
        <div className="absolute bottom-[5%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-cyan-500/5 via-transparent to-transparent blur-[160px]" />
      </div>

      {/* Sticky 3-Zone Header */}
      <Header onOpenConsultation={scrollToContact} />

      {/* Main Content Stream */}
      <main className="relative z-10 w-full">
        {/* 1. Hero with Typing Effect & Key Metrics */}
        <Hero onStartProject={scrollToContact} />

        {/* 2. Social Proof Band with Real Institutions */}
        <SocialProof onSelectProject={handleOpenProjectById} />

        {/* 3. High Performance Services Grid */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 4. 4-Step Engineering Lifecycle */}
        <ProcessSection />

        {/* 5. Featured Portfolio Showcase */}
        <PortfolioSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 6. Core Web Vitals & Performance Audit Simulator */}
        <PerformanceMetrics />

        {/* 7. Interactive Project Cost & Timeline Calculator */}
        <CostCalculator onApplyEstimate={handleApplyEstimate} />

        {/* 8. Client Testimonials */}
        <TestimonialsSection
          onOpenProject={handleOpenProjectById}
          onBookCall={scrollToContact}
        />

        {/* 9. Value-Driven Pricing Tiers */}
        <PricingSection onSelectTier={handleSelectTier} />

        {/* 10. Frequently Asked Questions Accordion */}
        <FAQSection />

        {/* 11. Final Action Section & Direct Consultation Form */}
        <ContactSection initialDetails={inquiryDetails} />
      </main>

      {/* Quiet Structured Footer */}
      <Footer />

      {/* Detailed Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={handleInquireFromModal}
      />
    </div>
  );
}
