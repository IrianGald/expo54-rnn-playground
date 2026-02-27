import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Navigation } from "react-native-navigation";

export default function App(props: any) {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app :D</Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        onPress={() => {
          Navigation.push(props.componentId, {
            component: {
              name: "com.app.SecondView",
            },
          });
        }}
      >
        <Text>Go to Second View</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Navigation.setRoot({
            root: {
              stack: {
                children: [
                  {
                    component: {
                      id: "com.app.SecondView",
                      name: "com.app.SecondView",
                    },
                  },
                ],
                options: {
                  layout: {
                    orientation: ["portrait"],
                  },
                },
              },
            },
          });
        }}
      >
        <Text>Go to Second Root</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
