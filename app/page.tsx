"use client";

import "./globals.css";
import PageWrapper from "./components/PageWrapper";
import Navbar from "./components/Navbar";
import Hero from "@/components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Team from "./components/Team";
import Sponsors from "./components/Sponsor";
import Footer from "./components/Footer";

const RegattaPage: React.FC = () => {
  return (
    <PageWrapper>
      <main className="bg-main">
        <Navbar />
        <Hero />
        <About />
        <Events />
        <Team />
        <Sponsors />
        <Footer />
      </main>
    </PageWrapper>
  );
};

export default RegattaPage;
