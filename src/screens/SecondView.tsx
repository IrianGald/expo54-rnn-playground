import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  Navigation,
  NavigationFunctionComponent,
} from "react-native-navigation";

type IProps = {
  componentId: string;
};

const SecondView: NavigationFunctionComponent<IProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Open up SecondView.tsx</Text>
      <StatusBar style="auto" />

      <TouchableOpacity
        onPress={() => {
          Navigation.push(props.componentId, {
            component: {
              name: "com.app.ThirdView",
            },
          });
        }}
      >
        <Text>Go to Third View</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          Navigation.setRoot({
            root: {
              stack: {
                children: [
                  {
                    component: {
                      name: "com.app.AppView",
                      options: {
                        topBar: {
                          title: {
                            text: "App Navigation",
                          },
                        },
                      },
                    },
                  },
                ],
              },
            },
          });
        }}
      >
        <Text>Go to Root</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

SecondView.options = (props) => ({
  topBar: {
    title: {
      text: "Second View",
      color: "#ffffff",
    },
    background: {
      color: "#333333",
    },
  },
});
