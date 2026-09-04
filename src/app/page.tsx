import { HeroSlider } from '@/components/home/HeroSlider';
import { FeaturedListings } from '@/components/home/FeaturedListings';
import { LocationTabs } from '@/components/home/LocationTabs';
import { Testimonials } from '@/components/home/Testimonials';
import { BrandLogos } from '@/components/home/BrandLogos';
import { LatestBlog } from '@/components/home/LatestBlog';

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <HeroSlider />

      {/* Featured Caravans & Lodges Grid */}
      <FeaturedListings />

      {/* Showground Locations Showcase */}
      <LocationTabs />

      {/* Testimonials Quote Slider */}
      <Testimonials />

      {/* Brand Logos & Intro Information */}
      <BrandLogos />

      {/* Latest Blog Posts Section */}
      <LatestBlog />
    </div>
  );
}
