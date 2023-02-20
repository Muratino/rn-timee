import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import {GalleryDayIcon, MenuDayIcon, PenDayIcon, VoicDayIcon} from './icons';

const BottomMenu = () => {
  const navigation = useNavigation();

  const saveAndBack = () => {
    console.log('saving...');
    navigation.goBack();
    console.log('all is save');
  };

  return (
    <View style={tw`bg-white relative px-8 py-6 flex-row`}>
      <View style={tw`flex-row items-center`}>
        <TouchableOpacity
          onPress={() => navigation.navigate('NewTask')}
          style={tw`mr-7`}>
          <MenuDayIcon />
        </TouchableOpacity>
        {/* <TouchableOpacity style={tw`mr-7`}>
          <PenDayIcon />
        </TouchableOpacity>
        <TouchableOpacity style={tw`mr-7`}>
          <VoicDayIcon />
        </TouchableOpacity> */}
        <TouchableOpacity>
          <GalleryDayIcon />
        </TouchableOpacity>
      </View>
      <View
        style={tw`border border-[#e6f3ff] border-b-8 border-l-[6px] border-r-[6px] bg-white p-3 absolute top-[-45px] right-6 rounded-full`}>
        <TouchableOpacity style={tw`rounded-full`} onPress={saveAndBack}>
          <Image
            style={{resizeMode: 'contain'}}
            source={require('../../assets/AgreeDay.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomMenu;
