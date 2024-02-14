import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import CommonLayout from "./CommonLayout";
import TextButton from "../components/touchable/textButton";
import Spinner from "../components/spinner";

const ProfileScreen = ({ navigation, route }) => {
  const assets = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    diabetesType: "Type 1",
    weightKg: 65,
    heightCm: 170,
    caloricGoalKcal: 2000,
    hypoMgDl: 100,
    targetLowerMgDl: 110,
    targetUpperMgDl: 130,
    hyperMgDl: 150,
  };

  const firstName = assets?.firstName;
  const lastName = assets?.lastName;
  const age = assets?.age;
  const diabetesType = assets?.diabetesType;
  const height = assets?.heightCm;
  const weight = assets?.weightKg;
  const calorieGoal = assets?.caloricGoalKcal;
  const hypo = assets?.hypoMgDl;
  const acceptableLower = assets?.targetLowerMgDl;
  const acceptableUpper = assets?.targetUpperMgDl;
  const hyper = assets?.hyperMgDl;

  return (
    <CommonLayout navigation={navigation}>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.topTextContainer}>
          <Text style={styles.nameText}>
            {firstName} {lastName}, {age}
          </Text>
          <Text style={styles.diabetesText}>{diabetesType} Diabetes</Text>
        </View>

        <View style={styles.componentsContainer}>
          <View style={styles.userInfoContainer}>
            <Text style={styles.userInfoHeaderText}>Basic Measurements</Text>

            <View style={styles.userInfoComponentsContainer}>
              <View style={styles.userInfoComponent}>
                <Text style={styles.userInfoComponentHeader}>{height}</Text>
                <Text style={styles.userInfoComponentText}>Height</Text>
              </View>

              <View style={styles.userInfoComponent}>
                <Text style={styles.userInfoComponentHeader}>{weight}</Text>
                <Text style={styles.userInfoComponentText}>Weight</Text>
              </View>
              <View style={styles.userInfoComponent}>
                <Text style={styles.userInfoComponentHeader}>
                  {calorieGoal}
                </Text>
                <Text style={styles.userInfoComponentText}>Calorie Goal</Text>
              </View>
            </View>

            <View style={styles.divider}></View>

            <Text style={styles.userInfoHeaderText}>Blood Glucose Levels</Text>
            <View style={styles.userInfoComponentsContainer}>
              <View style={styles.userInfoComponent}>
                <Text style={styles.userInfoComponentHeader}>{hypo}</Text>
                <Text style={styles.userInfoComponentText}>Hypo</Text>
              </View>

              <View style={styles.userInfoComponent}>
                <Text style={styles.userInfoComponentHeader}>
                  {acceptableLower} - {acceptableUpper}
                </Text>
                <Text style={styles.userInfoComponentText}>Acceptable</Text>
              </View>

              <View style={styles.userInfoComponent}>
                <Text style={styles.userInfoComponentHeader}>{hyper}</Text>
                <Text style={styles.userInfoComponentText}>Hyper</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </CommonLayout>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexGrow: 1,
  },
  componentsContainer: {
    width: "100%",
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  topTextContainer: {
    marginVertical: 24,
    justifyContent: "center",
    alignContent: "center",
  },
  nameText: {
    color: "#3B83D1",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "center",
  },
  diabetesText: {
    color: "#3B83D1",
    fontSize: 28,
    fontWeight: "400",
    textAlign: "center",
    opacity: 0.8,
  },
  userInfoContainer: {
    height: "70%",
    width: "100%",
    backgroundColor: "#3B83D1",
    borderRadius: 16,
    justifyContent: "space-evenly",
    alignContent: "center",
    paddingHorizontal: 10,
    shadowColor: "black",
    shadowOffset: {
      height: 3,
      width: 0,
    },
    shadowOpacity: 0.3,
  },
  userInfoComponentsContainer: {
    height: "auto",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
  },
  userInfoHeaderText: {
    fontSize: 24,
    marginTop: 8,
    marginLeft: 5,
    color: "#ffffff",
    fontWeight: "700",
    opacity: 0.8,
  },
  userInfoComponent: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 120,
  },
  userInfoComponentHeader: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "800",
    textAlign: "center",
  },
  userInfoComponentText: {
    marginTop: 4,
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    opacity: 0.6,
  },
  divider: {
    height: 3,
    width: "100%",
    backgroundColor: "#ffffff",
    opacity: 0.5,
    borderRadius: 16,
  },
});
