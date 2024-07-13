
import Navbar from 'src/components/Navbar/Navbar'
import HeroSection from 'src/components/HeroSection/HeroSection'
import { routes ,Link } from '@redwoodjs/router'

const HomePage = () => {
  const Link = routes.home() /* takes to the form section,
  it is currently this way for testing purposes */

  return (
    <>
      <Navbar
        reqLink={Link}
       />

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