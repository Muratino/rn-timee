import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useDispatch} from 'react-redux';
import DetailsTask from '../components/days/DetailsTask';
import Setting from '../components/setting/Setting';
import CreateNewTaskScreen from '../screens/CreateNewTaskScreen';
import DayScreen from '../screens/DayScreen';
import HomeScreen from '../screens/HomeScreen';
import {setStorageData} from '../redux/Slice/app';
import {getData} from '../hooks/useStorage';

export const Navigator = () => {
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const getStorageData = async () => {
      const res = await getData('@week');
      if (!!res) dispatch(setStorageData({week: res}));
      // remuveData(KeyForStorage.week);
    };
    getStorageData().catch(e => console.log('error useEffect', e));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Day"
            component={DayScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="NewTask"
            component={CreateNewTaskScreen}
            options={{headerShown: false}}
          />
        </Stack.Group>

        <Stack.Group
          screenOptions={{
            presentation: 'modal',
            statusBarAnimation: 'slide',
            headerShown: false,
          }}>
          <Stack.Screen name="MyModal" component={Setting} />
          <Stack.Screen name="DetailsModal" component={DetailsTask} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
