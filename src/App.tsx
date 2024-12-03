import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Comparison } from './components/Comparison';
import { Tokenomics } from './components/Tokenomics';
import { MemeSection } from './components/MemeSection';
import { Community } from './components/Community';
import { RoadZoom } from './components/RoadZoom';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Comparison />
        <RoadZoom />
        <Features />
        <Tokenomics />
        <MemeSection />
        <Community />
      </main>
    </div>
  );
}

export default App;