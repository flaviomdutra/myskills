import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import CodePush from "react-native-code-push";
import SplashScreen from "react-native-splash-screen";

import { Home } from "./src/pages/Home";

function App() {
  useEffect(() => {
    CodePush.sync({
      installMode: CodePush.InstallMode.IMMEDIATE,
    });

    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
