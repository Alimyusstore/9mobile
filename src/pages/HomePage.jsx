import React from 'react'
import Landing from './Landing/Landing'
import Slides from './Landing/Slides'
import BestOffer from './Landing/BestOffer'
import Packages from './Landing/Packages'
import Switch from './Landing/Switch'
import Ig9iteApp from './Landing/Ig9iteApp'
import BlogPost from './Landing/BlogPost'
import Event from './Landing/Event'
import CustomerReview from './Landing/CustomerReview'
import NinEnrollment from './Landing/NinEnrollment'
import Faq from './Landing/Faq'

const HomePage = () => {
  return (
    <Landing>
        <Slides/>
        <BestOffer/>
        <Packages/>
        <Switch/>
        <Ig9iteApp/>
        <BlogPost/>
        <Event/>
        <CustomerReview/>
        <NinEnrollment/>
        <Faq/>
    </Landing>
  )
}

export default HomePage
