// import { registerRootComponent } from 'expo'; // --- rnn
import { Navigation } from "react-native-navigation"; // +++ rnn

import App from "./App";
import SecondView from "./src/screens/SecondView";
import ThirdView from "./src/screens/ThirdView";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// registerRootComponent(App); // --- rnn
Navigation.registerComponent("com.app.AppView", () => App); // +++ rnn
Navigation.registerComponent("com.app.SecondView", () => SecondView); // +++ rnn
Navigation.registerComponent("com.app.ThirdView", () => ThirdView); // +++ rnn
Navigation.events().registerAppLaunchedListener(() => {
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
}); // +++ rnn

export const changeRoot2 = async (passProps: any) =>
  await Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: "com.app.SecondView",
              name: "com.app.SecondView",
              passProps,
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
