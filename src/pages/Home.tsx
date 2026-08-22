import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { AboutSection } from '@/components/sections/AboutSection';
import { ThemeGrid } from '@/components/sections/ThemeGrid';
import { CtaSection } from '@/components/sections/CtaSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Award, GraduationCap, Building2, ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Conference Background & About DYUTI */}
      <AboutSection />

      {/* 3. Conference Major Sub-Themes */}
      <ThemeGrid />

      {/* 4. Rajagiri College Highlights */}
      <section className="py-16 sm:py-20 bg-[#f8fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Host Institution"
            title="Rajagiri College of Social Sciences"
            subtitle="Autonomous institution accredited with NAAC A++ (CGPA 3.83/4), ranked #12 in India (NIRF 2025) and #1 in Kerala (KIRF 2025)."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card className="flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#f0faf8] text-[#0f4c47] flex items-center justify-center mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                  NIRF #12 & NAAC A++
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Consistently recognized among the top colleges in the nation with the highest NAAC CGPA in South India.
                </p>
              </div>
            </Card>

            <Card className="flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#fffbeb] text-[#b45309] flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                  Social Work Excellence
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Pioneering social work education, field action projects, and community engagement in India for over 6 decades.
                </p>
              </div>
            </Card>

            <Card className="flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#f1f5f9] text-[#1e293b] flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                  Global Partnerships
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Active academic cooperation with over 60 international universities across Australia, Europe, UK, and USA.
                </p>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="outline" asLink href="/rajagiri" icon={<ArrowRight className="w-4 h-4" />}>
              Read More About Rajagiri
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Dual Call-to-Action */}
      <CtaSection />
    </div>
  );
};
