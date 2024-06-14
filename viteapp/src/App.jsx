import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/><Hero/>
      <div className="container">
      <Title subtitle='Our Program' title='What We Offer'/>
      <Programs/>
      <About/>
      <Title subtitle='Gallary' title='Campus Photos'/>
      <Campus/>
      <Title subtitle='TESTIMONIALS' title='What Students Says'/>
      <Testimonials/>
      <Title subtitle='Contact us' title='Get In Touch'/>
      <Contact/>
      <Footer/>
      </div>
      
    </div>
  )
}

export default App