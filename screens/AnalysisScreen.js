import React, { useState, useEffect, useCallback } from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import CommonLayout from "./CommonLayout";
import AnalysisContainer from "../components/analysisContainer";
import { caloricProgressTexts } from "../data";
import { bloodGlucoseTexts } from "../data";
import TextButton from "../components/touchable/textButton";
import Spinner from "../components/spinner";

const AnalysisScreen = ({ navigation, route }) => {
  const assets = {
    caloricRangeIndex: 2,
    bloodGlucoseRangeIndex: 2,
  };

  const calorieRangeIndex = assets?.caloricRangeIndex;
  const bloodGlucoseRangeIndex = assets?.bloodGlucoseRangeIndex;

  return (
    <CommonLayout navigation={navigation}>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.mainHeaderContainer}>
          <Text style={styles.mainHeaderText}>Analysis</Text>
        </View>

        <AnalysisContainer
          header="Caloric Progress"
          text={caloricProgressTexts[calorieRangeIndex]}
        />
        <AnalysisContainer
          header="Blood Glucose"
          text={bloodGlucoseTexts[bloodGlucoseRangeIndex]}
        />

        <TextButton text="Send email" maybeButtonWidth="50%" />

        <View></View>
      </SafeAreaView>
    </CommonLayout>
  );
};

export default AnalysisScreen;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    flexGrow: 1,
  },
  mainHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  mainHeaderText: {
    color: "#3B83D1",
    fontSize: 24,
    fontWeight: "900",
  },
});
