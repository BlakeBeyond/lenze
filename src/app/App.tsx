import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatWeDo } from './components/WhatWeDo';
import { WhyLenzeculture } from './components/WhyLenzeculture';
import { Founders } from './components/Founders';
import { HowItWorks } from './components/HowItWorks';
import { UseCases } from './components/UseCases';
import { Performance } from './components/Performance';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden antialiased">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <WhyLenzeculture />
        <Founders />
        <HowItWorks />
        <UseCases />
        <Performance />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}