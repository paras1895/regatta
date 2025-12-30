"use client";

import "./globals.css";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import Highlights from "@/components/Highlights";
import Sponsors from "@/components/Sponsors";
import Events from "@/components/Events";
import About from "@/components/About";
import Hero from "@/components/Hero";
import PageWrapper from "./components/PageWrapper";
import Navbar from "./components/Navbar";
import HorizontalContent from "./components/HorizontalContent";
import Spacer from "./components/Spacer";

const RegattaPage: React.FC = () => {
  return (
    <PageWrapper>
      <main className="bg-main">
        <div className="block md:hidden">
          <Spacer />
        </div>
        <Navbar />
        <Hero />
        <About />
        <Spacer height={100} />
        <Events />
        <Spacer height={100} />
        <HorizontalContent />
        <Spacer height={10} />
        <TeamSection />
        <Spacer height={50} />
        <Sponsors />
        <Spacer height={50} />
        <Highlights />
        <Spacer height={10} />
        <Footer />
      </main>
    </PageWrapper>
  );
};

export default RegattaPage;
