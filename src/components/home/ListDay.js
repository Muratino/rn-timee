import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import tw from 'twrnc';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const ListDay = () => {
  const {week} = useSelector(state => state.app);
  const navigation = useNavigation();

  return (
    <View style={tw`bg-[#e6f3ff] px-8 pt-[35px] mb-100`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {week.map(item => (
          <TouchableOpacity
            key={item.short}
            style={tw`py-4 bg-white mb-7 rounded-6 max-h-[150px]`}
            onPress={() => navigation.navigate('Day', {name: item.day})}>
            <Text
              style={[
                tw`ml-4 text-[21px] font-semibold text-[#999999] leading-[24px] tracking-[3px]`,
                {fontFamily: 'Inter'},
              ]}>
              {item.day}
            </Text>
            <View style={tw`ml-6 mt-2 min-h-[85px]`}>
              {item?.data.map((el, idx) => {
                if (idx === 3) {
                  return (
                    <Text key={idx} style={tw`mb-1`}>
                      ....
                    </Text>
                  );
                } else {
                  return (
                    <Text key={idx} style={tw`mb-1`}>
                      {el.title}
                    </Text>
                  );
                }
              })}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ListDay;
