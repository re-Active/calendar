import React, { Component } from "react";
import { TouchableOpacity, Text, View, StyleSheet} from "react-native";
import { Actions } from "react-native-router-flux";
import {
  Button
} from 'react-native-elements'
import {
  Container,
  Content,
  Footer,
  FooterTab,
  DeckSwiper,
  Icon,
  Header,
  Body,
  Left,
  Right,
  Card,
  CardItem
} from "native-base";

const Reward = () => {
  const goToHome = () => {
    Actions.home();
  };
  return (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.headerTextContent}>Plan-IT</Text>

        <Right>
          <Button style={styles.button}>
            <Icon name="person" />
          </Button>
          <Button style={styles.button}>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
      <Content>
        <Card>
          <Text style={styles.txt1}>신영훈님의 리워드는</Text>
          <Text style={styles.txt2}>30000 point입니다</Text>
        </Card>
        <Button
  style={styles.bttn}
  raised
  icon={{name: 'loyalty'}}
  title='더 강력해진 포인트 [더하러 가기!]' />
          <Button
  style={styles.bttn}
  raised
  icon={{name: 'loyalty'}}
  title='더 편리해진 포인트 [쓰러 가기!]' />
          <Button
  style={styles.bttn}
  raised
  icon={{name: 'loyalty'}}
  title='더 따뜻해진 포인트 [나누러 가기!]' />
      </Content>

      <Footer>
        <FooterTab style={styles.footer}>
          <Button vertical>
            <Icon name="ribbon" />
            <Text style={styles.footer_text}>리워드샵 </Text>
          </Button>
          <Button active vertical style={styles.button} onPress={goToHome}>
            <Icon name="home" />
            <Text style={styles.footer_text} onPress={goToHome}>
              홈
            </Text>
          </Button>
          <Button vertical>
            <Icon name="chatbubbles" />
            <Text style={styles.footer_text}>커뮤니티</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: "dodgerblue",
    textAlign: "auto"
  },
  headerTextContent: {
    color: "white",
    fontWeight: "900",
    fontSize: 20,
    textAlignVertical: "center"
  },
  screen: {
    padding: 50
  },
  txt1: {
    color: "darkslategray",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 27,
    marginTop: 80
  },
  txt2: {
    color: "darkslategray",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 27,
    marginBottom: 80
  },
  insuranceItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  },
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10
  },
  footer: {
    backgroundColor: "dodgerblue"
  },
  button: {
    backgroundColor: "dodgerblue"
  },
  footer_text: {
    color: "white",
    textShadowColor: "black"
  },
  toggle: {
    marginStart: 100
  },
  switch: {
    color: "blue",
    fontWeight: "bold",
    textAlign: "right",
    marginLeft: 40
  },
  switchLabel: {
    color: "dodgerblue",
    fontWeight: "bold"
  },
  bttn : {
    marginBottom : 10,
    
  }
});
export default Reward;
