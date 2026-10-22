import { View } from 'react-native';
import { StartScreen } from './screens/StartScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeScreen } from './screens/HomeScreen';
import { ProductsScreen } from './screens/ProductsScreen';

export default function App() {
  return (
    <View style={{flex: 1}}>
      {/* <StartScreen/> */}
      {/* <HomeScreen/> */}
      <ProductsScreen/>
    </View>
  );
}