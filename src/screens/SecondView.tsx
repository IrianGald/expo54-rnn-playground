import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationFunctionComponent } from "react-native-navigation";

type IProps = {
  componentId: string;
};

const SecondView: NavigationFunctionComponent<IProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Open up SecondView.tsx</Text>
      <StatusBar style="auto" />
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
