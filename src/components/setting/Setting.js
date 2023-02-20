import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Setting = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`bg-[#fff1dc] pt-6 px-8 h-full`}>
      <View style={tw`flex-row justify-end mb-5`}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text
            style={[
              tw`text-[15px] font-semibold text-[#2085E2]`,
              {fontFamily: 'Inter'},
            ]}>
            Ready
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={[
          tw`text-[24px] font-semibold text-black mb-5`,
          {fontFamily: 'Inter'},
        ]}>
        Setting
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`justify-center mb-7`}>
          <View style={tw`bg-white py-[12px] px-[15px] rounded-4`}>
            <Text
              style={[
                tw`text-[13px] font-normal text-[#4d4d4d] ml-2`,
                {fontFamily: 'Inter'},
              ]}>
              Some Setting
            </Text>
            <View style={[tw`bg-[#cccccc] my-3 h-[1px]`]} />
            <Text
              style={[
                tw`text-[13px] font-normal text-[#4d4d4d] ml-2`,
                {fontFamily: 'Inter'},
              ]}>
              Some Setting
            </Text>
            <View style={[tw`bg-[#cccccc] my-3 h-[1px]`]} />
            <Text
              style={[
                tw`text-[13px] font-normal text-[#4d4d4d] ml-2`,
                {fontFamily: 'Inter'},
              ]}>
              Some Setting
            </Text>
            <View style={[tw`bg-[#cccccc] my-3 h-[1px]`]} />
          </View>
        </View>

        <View style={tw`justify-center mb-7`}>
          <View style={tw`bg-white py-[12px] px-[15px] rounded-4`}>
            <Text
              style={[
                tw`text-[13px] font-normal text-[#4d4d4d] ml-2`,
                {fontFamily: 'Inter'},
              ]}>
              Some Setting
            </Text>
            <View style={[tw`bg-[#cccccc] my-3 h-[1px]`]} />
            <Text
              style={[
                tw`text-[13px] font-normal text-[#4d4d4d] ml-2`,
                {fontFamily: 'Inter'},
              ]}>
              Some Setting
            </Text>
            <View style={[tw`bg-[#cccccc] my-3 h-[1px]`]} />
            <Text
              style={[
                tw`text-[13px] font-normal text-[#4d4d4d] ml-2`,
                {fontFamily: 'Inter'},
              ]}>
              Some Setting
            </Text>
            <View style={[tw`bg-[#cccccc] my-3 h-[1px]`]} />
          </View>
        </View>

        <View style={tw`justify-center mb-7`}>
          <View style={tw`bg-white py-[12px] px-[15px] rounded-4`}>
            <View style={tw`w-4/5`}>
              <Text
                style={[
                  tw`text-[14px] font-semibold text-[#4d4d4d] ml-2 mb-2`,
                  {fontFamily: 'Inter'},
                ]}>
                Update to PRO
              </Text>
              <Text
                style={[
                  tw`text-[13px] font-normal text-[#4d4d4d] mb-4`,
                  {fontFamily: 'Inter'},
                ]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                obcaecati temporibus laboriosam qui
              </Text>
              <View style={tw`bg-[#ffe9c8] p-4 rounded-4 mb-3`} />
              <View style={tw`bg-[#efcc73] p-3 rounded-4 w-[70%]`} />
            </View>
          </View>
        </View>

        <View style={tw`justify-center mb-7`}>
          <View style={tw`bg-white py-[12px] px-[15px] rounded-4`}>
            <Text
              style={[
                tw`text-[13px] font-normal ml-2 text-[#2085E2]`,
                {fontFamily: 'Inter'},
              ]}>
              Some Setting
            </Text>
            <View style={[tw`bg-[#cccccc] my-3 h-[1px]`]} />
            <Text
              style={[
                tw`text-[13px] font-normal ml-2 text-[#2085E2]`,
                {fontFamily: 'Inter'},
              ]}>
              Some Setting
            </Text>
            <View style={[tw`bg-[#cccccc] my-3 h-[1px]`]} />
            <Text
              style={[
                tw`text-[13px] font-normal ml-2 text-[#2085E2]`,
                {fontFamily: 'Inter'},
              ]}>
              Some Setting
            </Text>
            <View style={[tw`bg-[#cccccc] my-3 h-[1px]`]} />
          </View>
        </View>

        <TouchableOpacity
          style={tw`bg-white py-[12px] px-[15px] rounded-4 flex-row justify-center mb-5`}>
          <Text
            style={[
              tw`text-[14px] font-normal text-[#FF4E4E]`,
              {fontFamily: 'Inter'},
            ]}>
            Some Setting
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Setting;
