import { View, StatusBar } from 'react-native';
import AppRotas from './src/rotas/AppRotas';


export default function App() {
  return (
    <View style={{ flex:1 }}>
      <StatusBar />
      <AppRotas />
    </View>
);
}
