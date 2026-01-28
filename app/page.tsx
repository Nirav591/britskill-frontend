import DifferentiatorsSection from "./component/homepage/DifferentiatorsSection";
import GetStartedCTASection from "./component/homepage/GetStartedCTASection";
import HeroSection from "./component/homepage/HeroSection";
import HowOnlineTuitionWorks from "./component/homepage/HowOnlineTuitionWorks";
import ParentProgressSection from "./component/homepage/ParentProgressSection";
import ParentsTrustSection from "./component/homepage/ParentsTrustSection";
import PricingPlansSection from "./component/homepage/PricingPlansSection";
import SubjectsQualificationsSection from "./component/homepage/SubjectsQualificationsSection";

import Layout from "./container/Layout";

export default function Home() {
  return (
    <div>
      <section>
        <HeroSection />
      </section>
      <section>
        <DifferentiatorsSection />
      </section>
      <section>
        <HowOnlineTuitionWorks />
      </section>
      <section>
        <SubjectsQualificationsSection />
      </section>
      <section>
        <PricingPlansSection />
      </section>
      <section>
        <ParentsTrustSection />
      </section>
      <section>
        <ParentProgressSection />
      </section>
      <section>
        <GetStartedCTASection />
      </section>
    </div>
  );
}
