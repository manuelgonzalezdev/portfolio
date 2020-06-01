import React, { FC } from 'react'
import Navigation from './navigation';
import './header.scss'

const Header: FC = () => (
  <header className="header">
    <Heading />
    <Navigation />
  </header>
)

const Heading: FC = () => (
  <div className="heading">
    <span className="heading__logo">
      <b>m</b>anuel <b>g</b>onzalez
    </span>
  </div>
)

export default Header
