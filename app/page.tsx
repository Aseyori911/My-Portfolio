// pages/index.tsx
"use client"
import { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import HeroSection from '@/components/heroSection'
import AboutSection from '@/components/aboutSection'
import Navigation from '@/components/navigation'
import SkillsSection from '@/components/skillSection'
import ProjectsSection from '@/components/projectSection'
import ContactSection from '@/components/contactSection'
import LoadingScreen from '@/components/loadingScreen'
import CustomCursor from '@/components/customCursor'

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Head>
        <title>Abdulateef Ogundeko - Mathematics & Frontend Developer</title>
        <meta name="description" content="Mathematics Graduate & Frontend Developer transforming complex problems into elegant solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" /> */}
      </Head>

      {isLoading && <LoadingScreen />}
      <CustomCursor />
      <canvas id="bg-canvas" className="fixed top-0 left-0 w-full h-full -z-10 opacity-60" />
      
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}

export default Home
