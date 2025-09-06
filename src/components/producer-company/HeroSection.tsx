import BannerSection from './BannerSection';
import RequirementsSection from './RequirementsSection';
import OffersSection from './OffersSection';

const HeroSection = () => {
  return (
    <div className="space-y-6">
      <BannerSection />
      <RequirementsSection />
      <OffersSection />
    </div>
  );
};

export default HeroSection;
