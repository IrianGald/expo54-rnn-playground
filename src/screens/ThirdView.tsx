import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationFunctionComponent } from "react-native-navigation";

type IProps = {
  componentId: string;
};

const ThirdView: NavigationFunctionComponent<IProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Open up ThirdView.tsx</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default ThirdView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

ThirdView.options = (props) => ({
  topBar: {
    title: {
      text: "Third View",
      color: "#ffffff",
    },
    background: {
      color: "#333333",
    },
  },
});
