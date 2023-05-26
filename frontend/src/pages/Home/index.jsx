import React from 'react'
import Navbar from '../../components/Header/Navbar'
import Hero from '../../components/Main/Hero'
import Gym from '../../components/Main/Gym'
import Students from '../../components/Main/Students'
import Member from '../../components/Main/Member'
import Footer from '../../components/Footer'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
        <Gym />
        <Students />
        <Member />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Home
