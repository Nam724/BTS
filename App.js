import Main_page from './src/screen/main';
import SignUp_page from './src/screen/signup';
import SignIn_page from './src/screen/signin';
import Restaurant_page from './src/screen/restaurant';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';






Amplify.configure(awsconfig);

const Stack = createStackNavigator();

export default function App(){ 
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="SignIn" component={SignIn_page} 
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen name="SignUp" component={SignUp_page}
        options={{
          headerShown: false,
        }}
        />
      
        <Stack.Screen name="Main" component={Main_page} 
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen name="Restaurant" component={Restaurant_page} 
        options={{
          headerShown: false,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}