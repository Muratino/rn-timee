import {Text, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React from 'react';
import tw from 'twrnc';
import {ArrowWhiteDayIcon} from '../days/icons';
import {useFormikContext} from 'formik';

const NewTaskColor = ({colorArr}) => {
  const pickerRef = React.useRef();
  const {
    values: {color},
    setFieldValue,
  } = useFormikContext();

  function openPicker() {
    pickerRef.current.focus();
  }

  return (
    <TouchableOpacity
      onPress={() => openPicker()}
      style={tw`flex-row mb-5 mx-6 rounded-3 py-3 px-4 items-center justify-between bg-[${color}]`}>
      <Text
        style={[tw`text-[15px] font-normal text-white`, {fontFamily: 'Inter'}]}>
        Color
      </Text>
      <ArrowWhiteDayIcon />
      <Picker
        style={[tw`hidden w-0 h-0`, {backfaceVisibility: 'hidden', opacity: 0}]}
        ref={pickerRef}
        selectedValue={color}
        onValueChange={(itemValue, itemIndex) =>
          setFieldValue('color', itemValue)
        }>
        {colorArr.map(el => (
          <Picker.Item
            color={el.value}
            key={el.id}
            label={el.name}
            value={el.value}
          />
        ))}
      </Picker>
    </TouchableOpacity>
  );
};

export default NewTaskColor;
