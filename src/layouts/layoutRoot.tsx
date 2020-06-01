import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

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
