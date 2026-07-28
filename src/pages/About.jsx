import React from 'react'
import HeroSection from '../components/About/HeroSection'
import StatsSection from '../components/About/StatsSection'
import StorySection from '../components/About/StorySection'
import ValuesSection from '../components/About/ValuesSection'
import TeamSection from '../components/About/TeamSection'
import CTASection from '../components/About/CTASection'

const About = () => {
  return (
    <main className="bg-[#0d0d0d] min-h-screen text-white">
      <HeroSection />
      <StatsSection />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <CTASection />
    </main>
    
  )
}

export default About