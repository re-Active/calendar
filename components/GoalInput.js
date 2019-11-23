import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import { Card } from "native-base";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal); // bind할 필요 없음
    setEnteredGoal(""); // 글자 없어지게
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="일정을 등록해 주세요 :)"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="작성취소"
            color="#595959"
            borderRadius="40"
            onPress={props.onCancel}
          />
        </View>
        <View style={styles.button}>
          <Button title="일정추가" borderRadius="40" onPress={addGoalHandler} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "dodgerblue",
    borderRadius: 10,
    borderWidth: 1.5,
    alignContent: "center",
    marginLeft: 10,
    marginTop: 10,
    width: 350,
    padding: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%"
  },
  button: {
    marginTop: 5,
    borderRadius: 40,
    marginLeft: 5,
    marginRight: 5,
    width: "45%"
  },
  inputContainer: {
    justifyContent: "center"
  }
});

export default GoalInput;
