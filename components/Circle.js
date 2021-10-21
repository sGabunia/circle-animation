import React from "react";
import { Animated, View, StyleSheet } from "react-native";

export const Circle = ({ scaleValue, opacityValue }) => {
  return (
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
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "green",
    marginBottom: 45,
  },
});
