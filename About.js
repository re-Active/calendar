import React, { useState, Component } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  View,
  Button,
  FlatList,
  Modal,
  fetch
} from "react-native";
import {
  Container,
  Header,
  Content,
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
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import ToggleSwitch from "toggle-switch-react-native";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import { Actions } from "react-native-router-flux";
// import Switch from ".components/Switch";

const goToReward = () => {
  Actions.reward();
};
const About = () => {
  const [onMode, setIsOn] = useState(true)
  const handleMode = (onMode) => setIsOn(!onMode)

  // <Switch />;
  const goToHome = () => {
    Actions.home();
  };
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
      body: "안전한 완주를 원하신다면 클릭하세요!:)"
    });
    console.log(notificationId); // can be saved in AsyncStorage or send to server
  };

  return (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.headerTextContent}>Plan-IT</Text>

        <Right>
          <Btn style={styles.btn}>
            <Icon name="person" />
          </Btn>
          <Btn style={styles.btn}>
            <Icon name="menu" />
          </Btn>
        </Right>
      </Header>

      <Content>
          <View style={styles.screen}>
            <Card>
              <Text style={styles.txt1}>신영훈님</Text>
              <Text style={styles.txt2}>아직 일정이 없네요!</Text>
            </Card>
            <GoalInput
              onAddGoal={addGoalHandler}
              onCancel={cancelGoalAdditionHandler}
            />

            <View style={styles.toggle}>
              <ToggleSwitch
                isOn={onMode}
                onPress={handleMode}
                onColor="yellowgreen"
                offColor="#595959"
                style={styles.switch}
                label="보험 스위치 ON/OFF"
                labelStyle={styles.switchLabel}
                size="small"
              />
            </View>

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
            <Button
              title="Dismiss All Notifications"
              onPress={() => Notifications.dismissAllNotificationsAsync()}
            />

          </View>
      </Content>

      <Footer>
        <FooterTab style={styles.footer}>
          <Btn vertical onPress={goToReward}>
            <Icon name="ribbon" />
            <Text style={styles.footer_text}>리워드샵 </Text>
          </Btn>
          <Btn active vertical style={styles.btn} onPress={goToHome}>
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
    padding: 20
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
    backgroundColor: "snow",
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
  },
  toggle: {
    marginStart: 145
  },
  switch: {
    color: "blue",
    fontWeight: "bold",
    textAlign: "right",
    marginLeft: 40,
    marginTop: 20,
    marginBottom: 20,
  },
  switchLabel: {
    color: "dodgerblue",
    fontWeight: "bold",
  }
});
export default About;
