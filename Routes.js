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
        title="홈"
      />
      <Scene key="about" component={About} style={styles.cheerful} title="일정 추가/삭제"/>
      <Scene key="reward" component={Reward} style={styles.cheerful} title="리워드샵"/>
    </Scene>
  </Router>
);

const styles = StyleSheet.create({

});
export default Routes;
