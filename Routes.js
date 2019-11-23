import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import About from './About.js'
import MyInfo from './MyInfo.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "about" component = {About} title = "About" />
         <Scene key = "myinfo" component = {MyInfo} title = "MyInfo" />
      </Scene>
   </Router>
)
export default Routes