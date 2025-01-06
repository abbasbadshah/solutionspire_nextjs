import Cta4 from "@/components/sections/Cta4";
import Cta5 from "@/components/sections/Cta5";
import Cta6 from "@/components/sections/Cta6";
import Features8 from "@/components/sections/Features8";
import Hero4 from "@/components/sections/Hero4";
import Newsletter3 from "@/components/sections/Newsletter3";
import Static3 from "@/components/sections/Static3";
import dynamic from "next/dynamic";
const Services5 = dynamic(() => import("@/components/sections/Services5"), {
  ssr: false,
});

import Layout from "@/components/layout/Layout";
import Services1 from "@/components/sections/Services1";
import LogoCloud1 from "@/components/sections/LogoCloud1";
export default function Home4() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={3}>
        <Hero4 />
        <LogoCloud1 />
        <Services1 />
        <Cta4 />
        {/* What we do */}
        <Static3 /> {/* Statics */}
        <Services5 /> {/* Projects */}
        <Features8 /> {/* Core Value */}
        <Cta5 /> {/* FAQ */}
        <Cta6 /> {/* CTA */}
        <Newsletter3 />
      </Layout>
    </>
  );
}
