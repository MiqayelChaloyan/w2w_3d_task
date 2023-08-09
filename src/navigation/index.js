import { memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import VidoeRecordScreen from '../screens/VidoeRecord';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}
      initialRouteName="VidoeRecord"
    >
      <Stack.Screen name="VidoeRecord" component={VidoeRecordScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default memo(StackNavigation);