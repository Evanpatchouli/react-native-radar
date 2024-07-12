import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import EvpRadar from "../../components/EvpRadar";

const MyRadar = (
  <EvpRadar
    // containerViewProps={{
    //   style: {
    //     borderColor: "rgba(0, 0, 200, 0.5)",
    //     borderWidth: 1,
    //     borderRadius: 10,
    //     overflow: "hidden",
    //     margin: 10,
    //     padding: 10,
    //   },
    // }}
    data={[100, 20, 30, 10, 40]}
    labels={["Aaa", "Bbb", "Ccc", "Ddd", "Eee"]}
    // labels={[
    //   <Text key="Aaa">Aaa</Text>,
    //   <Text key="Bbb">Bbb</Text>,
    //   <Text key="Ccc">Ccc</Text>,
    //   <Text key="Ddd">Ddd</Text>,
    //   <Text key="Eee">Eee</Text>,
    // ]}
    radius={100} // default: 100
    backgroundColor="rgba(0, 0, 200, 0.05)" //default: none
    strokeColor="rgba(0, 0, 200, 0.5)" // none
    strokeWidth={1.5} // default: 1
    strokeType="solid" // dashed
    dashArray={[5, 3]} // default: [10, 5]
    fillColor="rgba(0, 255, 255, 0.4)"
    labelProps={{ fill: "rgba(0, 0, 200, 0.3)" }}
    coefficient={1} // default: 1
    labelSpace={40} // default: 0
    border={{
      type: "polygon", // circle, none, default: none
      color: "rgba(0, 0, 200, 0.5)", // default: black
      width: 10, // default: 1
    }}
    Axis={{
      // default: none of axis
      type: "dashed", // solid, none
      width: 1, // default: 1
      color: "rgba(0, 0, 200,  0.2)", // default: grey
      dashArray: [5, 4], // default: [10, 5]
    }}
    ScaleLine={{
      // default: none of scale lines
      type: "solid", // solid, none
      shape: "polygon", // polygon, circle. If not specified, it will be same as the shape of border. If border is not specified, it will be polygon.
      number: 4,
      width: 1, // default: 1
      color: "rgba(0, 0, 200, 0.2)", // default: grey
      dashArray: [5, 4], // default: [20, 5]
    }}
  />
);

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" children={MyRadar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
