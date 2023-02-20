import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import {ArrowDayIcon, SearchDayIcon} from './icons';

const HeaderDay = ({nameDay}) => {
  const navigation = useNavigation();

  return (
    <View
      style={tw`flex-row items-center justify-between mt-8 bg-white px-5 py-4`}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowDayIcon />
      </TouchableOpacity>
      <View style={tw`flex-1 mx-2`}>
        <TextInput
          style={[
            tw`text-[20px] font-medium text-black text-center`,
            {fontFamily: 'Inter'},
          ]}
          placeholder={nameDay}
          placeholderTextColor="#b3b3b3"
        />
      </View>
      <TouchableOpacity>
        <SearchDayIcon />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderDay;
