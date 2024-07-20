import React from 'react'
import Landing from './Landing/Landing'
import Slides from './Landing/Slides'
import BestOffer from './Landing/BestOffer'
import Packages from './Landing/Packages'
import Switch from './Landing/Switch'
import Ig9iteApp from './Landing/Ig9iteApp'
import BlogPost from './Landing/BlogPost'

const HomePage = () => {
  return (
    <Landing>
        <Slides/>
        <BestOffer/>
        <Packages/>
        <Switch/>
        <Ig9iteApp/>
        <BlogPost/>
    </Landing>
  )
}

export default HomePage
