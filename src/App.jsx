

import {Navbar, Brand, CTA } from './components/index'
import {Blog, Footer, Header, Feature, WhatGPT3,Possibility} from './containers/index'
import './App.css'

function App() {

  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Feature/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
