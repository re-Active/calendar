import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { Text, View, StyleSheet, Alert, Button } from "react-native";
import { Agenda } from "react-native-calendars";
import {
  // DeckSwiper,
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button as Btn,
  Icon,
  Badge,
  Image,
  Left,
  Right,
  Card,
  CardItem,
  CheckBox
} from "native-base";

const goToAbout = () => {
  Actions.about();
};
const goToReward = () => {
  Actions.reward()
}
const goToHome = () => {
  Actions.home();
};
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        "2020-06-14": [
          {
            height: 50,
            name: "밥먹기"
          }
        ],
        "2020-06-17": [
          {
            height: 50,
            name: "마라톤경기"
          }
        ]
      },
      data: [],
      tempDate: ""
    };
  }

  updateDate(temp) {
    this.setState({ tempDate: temp });
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          {/* <Left>
          </Left> */}
          <Text style={styles.headerText}>Plan IT</Text>
          <Right>
            <Btn style={styles.btn}>
              <Icon name="person" />
            </Btn>
            <Btn style={styles.btn}>
              <Icon name="menu" />
            </Btn>
          </Right>
        </Header>

        <Card style={styles.card}>
          <CardItem header>

          </CardItem>
        <Text style={styles.content_text1}>신영훈님의</Text> 
        <Text style={styles.content_text2}>일상을 응원합니다:)</Text>
        </Card>

        <Agenda
          items={this.state.items}
          onDayPress={this.onDayPress.bind(this)}
          selected={"2020-06-16"}
          renderItem={this.renderItem.bind(this)}
          renderEmptyData={this.renderEmptyData.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
        />
        <Footer>
          <FooterTab style={styles.footer}>
            <Btn vertical onPress={ goToReward }>
              <Icon name="ribbon" />
              <Text style={styles.footer_text}>리워드샵 </Text>
            </Btn>
            <Btn active vertical style={styles.btn} onPress={ goToHome }>
              <Icon name="home" />
              <Text style={styles.footer_text}>홈</Text>
            </Btn>
            <Btn vertical>
              <Icon name="chatbubbles" />
              <Text style={styles.footer_text}>커뮤니티</Text>
            </Btn>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

  onDayPress(day) {
    const temp = day.dateString;
    this.updateDate(temp);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, { height: item.height }]}>
        <Text>{item.name}</Text>
        <Button
          title="일정 수정"
          onPress={goToAbout}
          style={styles.addAndUpdate}
        />
      </View>
    );
  }

  renderEmptyData() {
    return (
      <View style={styles.emptyDate}>
        <Button
          title="일정 추가"
          onPress={goToAbout}
          style={styles.addAndUpdate}
        />
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "aliceblue",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  },
  card: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "whitesmoke"
  },
  addAndUpdate: {
    textAlign: "left"
  },
  header: {
    backgroundColor: "dodgerblue",
    textAlign: "auto"
  },
  headerText: {
    color: "white",
    fontWeight: "900",
    fontSize: 20,
    // marginRight: 250,
    textAlignVertical: "center",
    textAlign: "left"
  },
  content_text1: {
    color: "#CC9933",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 27,
    marginTop: 80
  },
  content_text2: {
    color: "#CC9933",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 27,
    marginBottom: 80
  },
  footer: {
    backgroundColor: "dodgerblue"
  },
  btn: {
    backgroundColor: "dodgerblue"
  },
  footer_text: {
    color: "white",
    textShadowColor: "black"
  }
});
