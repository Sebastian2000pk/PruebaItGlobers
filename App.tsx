import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import Navigation from "./src/navigation/Navigation";
import store from "./src/store";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaView>
  );
}
