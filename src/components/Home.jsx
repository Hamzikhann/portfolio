import React from 'react'
import About from './About'
import Services from './Services'
import Experience from './Experience'
import Tech from './Tech'
import Works from './Works'
import { StarsCanvas } from './canvas'
import Footer from './Footer'
import Navbar from './Navbar'
import Hero from './Hero'
import Feedbacks from './Feedbacks'
import Contact from './Contact'
import { SectionWrapper } from "../hoc";



const Home = () => {
  return (
    <>
{/* //  <div className="relative z-0 bg-primary"> */}
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					{/* <Navbar /> */}
hi
					<Hero />
				</div>
				<About />
				<Services />
				<Experience />
				<Tech />
				<Works />
				<Feedbacks />
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			{/* // </div> */}
            </>
  )
}

export default SectionWrapper(Home)
