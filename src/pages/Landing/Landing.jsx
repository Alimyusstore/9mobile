import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Landing = ({children}) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

export default Landing
