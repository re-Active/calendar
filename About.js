import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  View,
  Button,
  FlatList,
  Modal
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import ToggleSwitch from "toggle-switch-react-native";
// Push notification 구현을 위해서 필요
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import { Actions } from "react-native-router-flux";
import {
  Container,
  Header,
  Content,
  ListItem,
  CheckBox,
  Footer,
  FooterTab,
  Button as Btn,
  Icon,
  Badge,
  Left,
  Right,
  Card,
  CardItem
} from "native-base";

const About = () => {
  const goToHome = () => {
    Actions.home();
  };
  let modalon = false;
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  // Push 알람 받을건지 묻는 함수
  askPermissions = async () => {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      return false;
    }
    return true;
  };

  // 바로 Push 알람 보내는 함수
  sendNotificationImmediately = async () => {
    let notificationId = await Notifications.presentLocalNotificationAsync({
      title: "마라톤 경주 일정이 곧 찾아옵니다!",
      body: "Your mind will blow after reading this"
    });
    console.log(notificationId); // can be saved in AsyncStorage or send to server
  };

  return (
    <Container>
      <Header style={styles.header}>
        <Left>
          {/* <Btn style={styles.btn}>
            <Icon name="settings" />
          </Btn> */}
        </Left>
        <Text style={styles.headerTextContent}>Plan IT</Text>

        <Right>
          <Btn style={styles.btn}>
            <Icon name="alarm" />
          </Btn>
          <Btn style={styles.btn}>
            <Icon name="menu" />
          </Btn>
        </Right>
      </Header>
      <Content>
      <View>
        <View style={styles.screen}>
          <View>
            <Text style={styles.main}>신영훈님, 아직 일정이 없네요!</Text>
          </View>
          <GoalInput
            onAddGoal={addGoalHandler}
            onCancel={cancelGoalAdditionHandler}
            onChange={modalon => !modalon}
          />
          <View style={styles.card}>
            {this.modalon ? <Text>(무)신한스포츠/레저보장보험</Text> : null}
          </View>
          <ToggleSwitch
            isOn={false}
            onColor="green"
            offColor="red"
            label="보험 스위치 ON/OFF"
            labelStyle={{ color: "black", fontWeight: "900" }}
            size="large"
            onToggle={isOn => !isOn}
          />
          {/* Push 알람 설정 동의 확인 창이 나오는 함수 */}
          {/* 한번만 누르면 됨 */}
          <Button
            title="Please accept Notifications Permissions"
            onPress={() => this.askPermissions()}
          />
          {/* 버튼 누르면 바로 Push 알람 옵니다. */}
          <Button
            title="Send Notification immediately"
            onPress={() => this.sendNotificationImmediately()}
          />
          {/* 일단은 무시 */}
          <Button
            title="Dismiss All Notifications"
            onPress={() => Notifications.dismissAllNotificationsAsync()}
          />
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={courseGoals}
            renderItem={itemData => (
              <GoalItem
                id={itemData.item.id}
                onDelete={removeGoalHandler}
                title={itemData.item.value}
              />
            )}
          />
        </View>
        <TouchableOpacity style={{ margin: 128 }}>
          <Button title="뒤로가기" onPress={goToHome} />
        </TouchableOpacity>
      </View>
      </Content>

      <Footer>
        <FooterTab style={styles.footer}>
          <Btn vertical>
            <Icon name="ribbon" />
            <Text style={styles.footer_text}>리워드샵 </Text>
          </Btn>
          <Btn active vertical style={styles.btn}>
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
  main: {
    // alignContent: "center",
    // fontSize: 20
    color: "lightslategray",
    borderColor: "snow",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 10,
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
    elevation: 8, //andriod에는 shadow안되므로
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10
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
export default About;
