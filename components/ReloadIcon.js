import React from "react";
import { colors } from "../utils";
import { Ionicons } from "@expo/vector-icons";
import { View, Platform, StyleSheet } from "react-native";

export default function ReloadIcon({ load }) {
  const reloadIconName = Platform.OS === "ios" ? "ios-refresh" : "md-refresh";
  return (
    <View style={styles.reloadIcon}>
      <Ionicons
        onPress={load}
        name={reloadIconName}
        size={24}
        color={colors.PRIMARY_COLOR}
      ></Ionicons>
    </View>
  );
}
const styles = StyleSheet.create({
  reloadIcon: {
    position: "absolute",
    top: 30,
    right: -100,
  },
});
