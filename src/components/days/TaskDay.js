import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import {ArrowWhiteDayIcon} from './icons';
import {useSelector} from 'react-redux';

const TaskDay = ({nameDay}) => {
  const {week} = useSelector(state => state.app);
  const navigation = useNavigation();

  const searchArrInWeek = nameDay => week.filter(el => el.day === nameDay);

  const dateArr = searchArrInWeek(nameDay);

  return (
    <ScrollView
      style={tw`mt-2 mb-5 px-5 flex-1`}
      showsVerticalScrollIndicator={false}>
      {dateArr[0].data.map(el => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('DetailsModal', {values: el, name: nameDay})
          }
          key={el.id}
          style={tw`bg-[${el.color.bg}] mb-6 py-[14px] px-[22px] flex-row items-center justify-between rounded-3`}>
          <View style={tw`items-start`}>
            <Text
              style={[
                tw`text-[13px] font-medium text-[#7e6b3c] mb-[5px]`,
                {fontFamily: 'Inter'},
              ]}>
              {el.title}
            </Text>
            <Text
              style={[
                tw`text-[10px] font-medium text-[${el.color.time}]`,
                {fontFamily: 'Inter'},
              ]}>
              {`${el.timeStart}  ->  ${el.timeEnd}`}
            </Text>
          </View>
          <ArrowWhiteDayIcon />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default TaskDay;
