import React from 'react'
import TopFooter from './TopFooter'
import style from './Footer.module.css'
import BottomFooter from './BottomFooter'

const Footer = ({ footerLinks }) => {
  return (
    <footer>
      <TopFooter footerLinks={footerLinks} />
      <BottomFooter />
    </footer>
  )
}

export default Footer
