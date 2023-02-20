import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import {MemuIcon, PlusIcon, SearchIcon} from './icons';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`pt-8 pb-[15px] bg-white relative`}>
      <View style={tw`flex-row justify-between pl-6 pr-4`}>
        <TouchableOpacity onPress={() => navigation.navigate('MyModal')}>
          <MemuIcon />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('NewTask')}
          style={tw`py-[10px] pl-[13px] pr-[26px] bg-[#E7F3FF] rounded-2 flex-row items-center justify-between mb-[20px]`}>
          <PlusIcon />
          <Text
            style={[
              tw`ml-[12px] text-[13px] font-medium text-black`,
              {fontFamily: 'Inter'},
            ]}>
            New task
          </Text>
        </TouchableOpacity>
      </View>

      <View style={tw`flex-row items-center justify-between pl-4 pr-4`}>
        <View
          style={tw`flex-1 rounded-10 bg-[#eeeeee] flex-row items-center pl-4 pr-4`}>
          <TouchableOpacity onPress={() => {}}>
            <SearchIcon />
          </TouchableOpacity>
          <TextInput
            style={tw`text-[11px] font-medium bg-[#eeeeee] text-black w-full mx-3 rounded-r-10 pr-5`}
            placeholder="Search"
          />
        </View>
      </View>

      <View style={tw`flex-row items-center justify-between pl-10 mt-5`}>
        <TouchableOpacity
          style={tw`flex-row items-center justify-between border border-[#d5a65f] rounded-4 py-1 pl-2 pr-3`}
          onPress={() => {}}>
          <Image
            style={{resizeMode: 'contain'}}
            source={require('../../assets/PIN.png')}
          />
          <Text
            style={[
              tw`ml-[5px] text-[11px] font-medium text-[#d5a65f]`,
              {fontFamily: 'Inter'},
            ]}>
            Pinned
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
