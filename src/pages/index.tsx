import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import LayoutRoot from '../components/layoutRoot'
import '../sass/main.scss'

const IndexPage: FC = () => (
  <>
    <Helmet>
      <title>manuelgonzalez.io</title>
    </Helmet>
    <LayoutRoot>Coming soon</LayoutRoot>
  </>
)

export default IndexPage
