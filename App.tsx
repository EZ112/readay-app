import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useKeepAwake } from "expo-keep-awake";

import { ROUTES } from "./src/screen/routes";

const Stack = createNativeStackNavigator();

const App = () => {
  useKeepAwake();
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName="StyleNav">
        {ROUTES.map((screen) => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.Component}
            options={screen.option}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
