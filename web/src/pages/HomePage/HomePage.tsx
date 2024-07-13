
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
        ctaText1="Ready to delegate? Request your free Quote "
        ctaText2="Not sure yet? Check our work "
      />

    </>
  )
}


export default HomePage