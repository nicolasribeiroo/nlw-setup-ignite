import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { Habit } from "../screens/Habit";
import { Home } from "../screens/Home";
import { NewHabitForm } from "../screens/NewHabitForm";

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="new_habit_form" component={NewHabitForm} />
      <Screen name="habit" component={Habit} />
    </Navigator>
  );
}
