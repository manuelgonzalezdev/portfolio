import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import LayoutRoot from '../layouts/layoutRoot'
import Intro from '../components/intro/intro'
import '../sass/main.scss'

const IndexPage: FC = () => (
  <>
    <Helmet>
      <title>manuelgonzalez.io</title>
    </Helmet>
    <LayoutRoot>
      <Intro/>
    </LayoutRoot>
  </>
)

export default IndexPage
