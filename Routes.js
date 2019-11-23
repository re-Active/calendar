import React from "react";
import { StyleSheet } from "react-native";
import { Router, Scene } from "react-native-router-flux";
import Home from "./Home.js";
import About from "./About.js";
import Reward from "./Reward.js";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="home"
        component={Home}
        initial={true}
        style={styles.cheerful}
      />
      <Scene key="about" component={About} style={styles.cheerful} />
      <Scene key="reward" component={Reward} style={styles.cheerful} />
    </Scene>
  </Router>
);

const styles = StyleSheet.create({
   cheerful: {
      backgroundColor: 'black'
   }
});
export default Routes;
