import React from 'react'
import GlobalStyle from './components/GlobalStyle'
//global style

//import pages
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
import Nav from './components/Nav'
import MovieDetial from './pages/MovieDetail'

//router
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/work/:id">
          <MovieDetial/>
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>

      </Switch>
    </div>
  )
}

export default App
