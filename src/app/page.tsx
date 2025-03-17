import Hero from "@/components/Hero";
import FeaturedMusic from "@/components/FeaturedMusic";
import TourDates from "@/components/TourDates";
import GalleryPreview from "@/components/GalleryPreview";
import FeaturedProducts from "@/components/store/FeaturedProducts";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedMusic />
      <TourDates />
      <GalleryPreview />
      <FeaturedProducts />
    </>
  );
}
