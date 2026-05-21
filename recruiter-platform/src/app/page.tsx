import Hero from "@/components/Hero";
import SearchSection from "@/components/SearchSection";
import AiAgent from "@/components/AiAgent";
import RoleMatcher from "@/components/RoleMatcher";
import ReferenceLetterGenerator from "@/components/ReferenceLetter";
import CvDownload from "@/components/CvDownload";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <SearchSection />
      <AiAgent />
      <RoleMatcher />
      <ReferenceLetterGenerator />
      <CvDownload />
      <Footer />
    </>
  );
}
