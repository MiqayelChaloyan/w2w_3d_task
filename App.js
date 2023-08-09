import { NavigationContainer } from '@react-navigation/native';
import GlobalData from './src/context';
import StackNavigation from './src/navigation';

function App() {
  return (
    <GlobalData>
      <NavigationContainer>
          <StackNavigation />
      </NavigationContainer>
    </GlobalData>
  );
}

export default App;