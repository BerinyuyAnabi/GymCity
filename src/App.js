import './App.css'
import React from 'react'
import Header from './components/common/heading/Header'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/home/Home'
import About from './components/about/About'
import Team from './components/team/Team'
import Gym from "./components/gyms/Gym"
import Contact from './components/contact/Contact'

import Footer from './components/common/footer/Footer'



const App = () => {
  return (
    <div>
      <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component = {Home}/>
        <Route path="/about" exact component = {About}/>
        <Route path="/team" exact component = {Team}/>
        <Route path="/gyms" exact component = {Gym}/>
        <Route path="/contact" exact component = {Contact}/>

        </Switch>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
