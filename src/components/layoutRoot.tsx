import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import Header from './header/header'
import Footer from './footer'

const LayoutRoot: FC = ({ children }) => (
  <>
    <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
    </Helmet>
    <Header />
    {children}
    <Footer />
  </>
)

export default LayoutRoot
