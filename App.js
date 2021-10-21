import React from "react";
import { Text, View, StyleSheet, Animated, Pressable } from "react-native";

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
      <Animated.View
        style={{
          ...styles.circle,
          transform: [
            {
              scale: scaleValue.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 2],
              }),
            },
          ],
          opacity: opacityValue,
        }}
      ></Animated.View>
      <View style={styles.buttons}>
        <Pressable
          style={styles.button}
          onPress={scaleDown}
          android_ripple={{ color: "grey", radiud: 20, foreground: true }}
        >
          <Text style={styles.text}>scale down</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={scaleUp}
          android_ripple={{ color: "grey", radiud: 20, foreground: true }}
        >
          <Text style={styles.text}>scale up</Text>
        </Pressable>
      </View>

      <View style={styles.buttons}>
        <Pressable
          style={{ ...styles.button, ...styles.fade }}
          onPress={fadeOut}
          android_ripple={{ color: "grey", radiud: 20, foreground: true }}
        >
          <Text style={styles.text}>fade out</Text>
        </Pressable>

        <Pressable
          style={{ ...styles.button, ...styles.fade }}
          onPress={fadeIn}
          android_ripple={{ color: "grey", radiud: 20, foreground: true }}
        >
          <Text style={styles.text}>fade in</Text>
        </Pressable>
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
  circle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "green",
    marginBottom: 45,
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    borderColor: "black",
    borderWidth: 2,
    padding: 5,
    margin: 10,
    width: 125,
  },
  fade: {
    borderColor: "firebrick",
  },
  text: {
    textAlign: "center",
    textTransform: "uppercase",
  },
});
