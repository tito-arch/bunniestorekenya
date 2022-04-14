  import React from 'react'
  /////////////===components imported===///////////////////
  import Head from './Components/head/Head'
  import Nav from './Components/nav/Nav'
  import About from './Components/about/About'
  import Experience from './Components/experience/Experience'
  import Services from './Components/services/Services'
  import Portifolio from './Components/portifolio/Portifolio'
  import Testimonials from './Components/testimonials/Testimonials'
  import Contacts from './Components/contacts/Contacts'
  import Footer from './Components/footer/Footer'
////////////////// ==END===//////////////////////////////////////////////

const App = () => {
  return (
    <div>
      <Head />
      <Nav />
      <About />
      <Experience/>
      <Services />
      <Portifolio />
      <Testimonials />
      <Contacts />
      <Footer />

    </div>
  )
}

export default App
