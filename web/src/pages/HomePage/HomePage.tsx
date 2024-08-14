
import Navbar from 'src/components/Navbar/Navbar'
import HeroSection from 'src/components/HeroSection/HeroSection'
import { routes ,Link } from '@redwoodjs/router'
import OurWork from 'src/components/OurWork/OurWork'
import OurServices from 'src/components/OurServices/OurServices'

import Form from 'src/components/Form/Form'

const HomePage = () => {

  return (
    <>
      <Navbar
        reqLink={routes.home()}
       />

      <HeroSection
        title="FIND WHAT YOU ARE LOOKING FOR."
        subtitle="DIGITAL CREATIVE & DROPSERVICING AGENCY. "
        backgroundImage="https://example.com/path-to-your-image.jpg"
        ctaText1="Ready to delegate? Request your free Quote "
        ctaText2="Not sure yet? Check our work "
      />
      <OurServices
       subtitle01="Your Dedicated Dropservicing Team"
       describtion01="We are a team of developers, designers, and project managers.
                     Our goal is to excel in every domain and create high-quality digital products, managing every aspect so you don’t have to."
       />


      <OurWork />
      <Form />


    </>
  )
}


export default HomePage
