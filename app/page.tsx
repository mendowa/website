import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
// import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
// import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Mendowa",
  description: "Mendowa",
  openGraph: {
    type: "website",
    url: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Mendowa",
    description: "Mendowa",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/192787967?s=400&u=51a93a4be11a927e03d53fa8be92977139eb006a&v=4",
        width: 1200,
        height: 630,
        alt: "Mendowa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/Hwayeeon/website.git",
    title: "Mendowa",
    description: "Mendowa",
    images: [
      "https://avatars.githubusercontent.com/u/192787967?s=400&u=51a93a4be11a927e03d53fa8be92977139eb006a&v=4",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <SponsorsSection /> */}
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <CommunitySection />
      <PricingSection />
      {/* <ContactSection /> */}
      <FAQSection />
      <FooterSection />
    </>
  );
}
