import Hero from "@/components/sections/Hero";
import Gallery from "@/components/sections/Gallery";
import HowItWorks from "@/components/sections/HowItWorks";
import OurServices from "@/components/sections/OurServices";
import FeaturedDestinations from "@/components/sections/FeaturedDestinations";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Partners from "@/components/sections/Partners";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <HowItWorks />
      <OurServices />
      <FeaturedDestinations />
      <WhyChooseUs />
      <Testimonials />
      <Partners />
      <CTA />
    </>
  );
}
