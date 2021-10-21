import React from "react";
import { Text, View, StyleSheet, Animated, Pressable } from "react-native";
import { Button } from "./components/Button";
import { Circle } from "./components/Circle";

export default function App() {
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  const opacityValue = React.useRef(new Animated.Value(1)).current;

  const scaleUp = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const scaleDown = () => {
    Animated.spring(scaleValue, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    console.log("out");
    Animated.timing(opacityValue, {
      duration: 2000,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const fadeIn = () => {
    Animated.timing(opacityValue, {
      duration: 2000,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.screen}>
      <Circle scaleValue={scaleValue} opacityValue={opacityValue} />
      <View style={styles.buttons}>
        <Button onPress={scaleDown}>scale down</Button>
        <Button onPress={scaleUp}>scale up</Button>
      </View>

      <View style={styles.buttons}>
        <Button onPress={fadeOut} fade>
          fade out
        </Button>
        <Button onPress={fadeIn} fade>
          fade in
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  buttons: {
    flexDirection: "row",
  },
});
