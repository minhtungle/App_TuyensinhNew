import React, { Component, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export function Images() {
  return (
    <View style={styles.container}>
      <TextInput
        style={{
          borderWidth: 1,
        }}
        placeholder="Nhập số báo danh"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderBottomColor: "red",
    zIndex: 1,
  },
});

export default Images;
