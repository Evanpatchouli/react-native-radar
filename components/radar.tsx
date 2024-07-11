import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { RadarChart } from "@salmonco/react-native-radar-chart";
import "react-native-svg";

const Radar = () => {
  const data = [
    { label: "data1", value: 30 },
    { label: "data2", value: 55 },
    { label: "data3", value: 70 },
    { label: "data4", value: 35 },
    { label: "data5", value: 10 },
    { label: "data6", value: 60 },
    { label: "data7", value: 38 },
    { label: "data8", value: 65 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <RadarChart
        data={data}
        gradientColor={{
          startColor: "#87CEFA",
          endColor: "#E0FFFF",
          count: 5,
        }}
        stroke={["#B0E0E6", "#B0C4DE", "#87CEFA", "#B0C4DE", "#0000FF"]}
        strokeWidth={[0.5, 0.5, 0.5, 0.5, 1]}
        strokeOpacity={[1, 1, 1, 1, 0.13]}
        labelColor="#433D3A"
        dataFillColor="#0000FF"
        dataFillOpacity={0.8}
        dataStroke="salmon"
        dataStrokeWidth={2}
        isCircle
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Radar;
