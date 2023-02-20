import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useFormikContext} from 'formik';

const NewTaskHeader = () => {
  const {
    errors: {title},
    touched,
    values,
    setFieldValue,
  } = useFormikContext();
  const navigation = useNavigation();

  return (
    <View style={tw`bg-white pb-2 pt-5 px-5`}>
      <View style={tw`flex-row w-full items-center justify-between mb-4`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text
            style={[
              tw`text-[15px] font-medium text-[#ffb84d]`,
              {fontFamily: 'Inter'},
            ]}>
            Close
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        value={values.title}
        onChangeText={text => setFieldValue('title', text)}
        placeholder="Title..."
        style={tw`p-2 text-[22px] ${
          title && touched.title ? 'border-b border-[#ff8787]' : ''
        }`}
        placeholderTextColor="#b3b3b3"
      />
    </View>
  );
};

export default NewTaskHeader;
