// import { registerRootComponent } from 'expo'; // --- rnn
import { Navigation } from "react-native-navigation"; // +++ rnn

import App from "./App";
import SecondView from "./src/screens/SecondView";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// registerRootComponent(App); // --- rnn
Navigation.registerComponent("com.app.AppView", () => App); // +++ rnn
Navigation.registerComponent("com.app.SecondView", () => SecondView); // +++ rnn
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
