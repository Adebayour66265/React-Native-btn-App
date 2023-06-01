import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Feeds from './src/screens/Feeds';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator()

// export default function App() {
//   return (

//     <View style={styles.container}>
//       <Text>Hello word</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }




const MyStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Feeds" component={Feeds} />
    </Stack.Navigator>
  );
}



const RootNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='black' barStyle="light-content" />
      {
        <MyStack />
      }
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <RootNavigation />
  )
}

export default App;