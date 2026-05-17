import Script from "next/script";
import { Navbar } from "./components/navbar";

// import { SiteHeader } from "@/components/site-header";
// import { SiteFooter } from "@/components/site-footer";

import { Hero } from "./components/landing/hero";
import { Services } from "./components/landing/services";
import { Process } from "./components/landing/process";
// import { Testimonials } from "@/components/landing/testimonials";
import { FAQ } from "./components/landing/FAQ";
import { CTA } from "./components/landing/CTA";
import { SiteFooter } from "./components/footer";

export default function HomePage() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Edukonsul",
    description:
      "Konsultan pendidikan universitas yang melayani rekomendasi kampus, sistem RPL, bimbingan skripsi, tesis, dan disertasi.",
    url: "https://edukonsul.id",
    areaServed: "Indonesia",
    sameAs: [],
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Schema SEO */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(orgSchema),
        }}
      />

      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <Services />
        <Process />
        <FAQ />
        <CTA />
      </main>

      {/* Footer */}
      <SiteFooter/>
    </div>
  );
}