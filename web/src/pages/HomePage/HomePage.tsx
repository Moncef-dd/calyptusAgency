
import Navbar from 'src/components/Navbar/Navbar'
import HeroSection from 'src/components/HeroSection/HeroSection'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        title="FIND WHAT YOU ARE LOOKING FOR."
        subtitle="DIGITAL CREATIVE & DROPSERVICING AGENCY. "
        backgroundImage="https://example.com/path-to-your-image.jpg"
        ctaText="Get Started"
        ctaLink="/get-started"
      />

    </>
  )
}


export default HomePage