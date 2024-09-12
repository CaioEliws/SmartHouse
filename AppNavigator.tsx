import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '@screens/Home';
import { Lamp } from '@screens/Lamp';
import { Lock } from '@screens/Lock';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Lamp"
          component={Lamp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Lock"
          component={Lock}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
