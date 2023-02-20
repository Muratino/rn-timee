import React from 'react';
import {SafeAreaView} from 'react-native';
import tw from 'twrnc';
// import {StackParamList} from '../navigation/Navigator';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
import HeaderDay from '../components/days/HeaderDay';
import TaskDay from '../components/days/TaskDay';
import BottomMenu from '../components/days/BottomMenu';

// interface Props extends NativeStackScreenProps<StackParamList, 'Day'> {
//   // other props ...
// }

const DayScreen = ({route: {params}}) => {
  return (
    <SafeAreaView style={tw`bg-[#E7F3FF] flex-1`}>
      <HeaderDay nameDay={params?.name} />
      <TaskDay nameDay={params?.name} />
      <BottomMenu />
    </SafeAreaView>
  );
};

export default DayScreen;
