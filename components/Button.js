import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export const Button = ({ children, onPress, fade }) => {
  return (
    <Pressable
      style={{ ...styles.button, borderColor: fade ? "firebrick" : "black" }}
      onPress={onPress}
      android_ripple={{ color: "grey", radiud: 20, foreground: true }}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: "black",
    borderWidth: 2,
    padding: 5,
    margin: 10,
    width: 125,
  },
  text: {
    textAlign: "center",
    textTransform: "uppercase",
  },
});
