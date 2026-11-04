import Hero from "@/components/sections/Hero";
import Gallery from "@/components/sections/Gallery";
import HowItWorks from "@/components/sections/HowItWorks";
import OurServices from "@/components/sections/OurServices";
import FeaturedDestinations from "@/components/sections/FeaturedDestinations";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Partners from "@/components/sections/Partners";
import CTA from "@/components/sections/CTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "Wildlife Safaris & Field Expeditions in East Africa",
    description: "Gorilla trekking, wildlife safaris, and veterinary, medical, and research field programmes across Uganda, Rwanda, Kenya, and Tanzania with WildMed.",
    path: "/",
  }),
  title: { absolute: "WildMed Safaris & Field Projects | East Africa Safaris & Field Expeditions" },
};

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
