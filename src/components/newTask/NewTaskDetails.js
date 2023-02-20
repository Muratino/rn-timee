import {View, Text, TouchableOpacity, TextInput, Modal} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React from 'react';
import tw from 'twrnc';
import DatePicker from 'react-native-date-picker';
import {useFormikContext} from 'formik';

const NewTaskDetails = () => {
  const [openData, setOpenData] = React.useState(false);
  const [openDataTimeStart, setOpenDataTimeStart] = React.useState(false);
  const [openDataTimeEnd, setOpenDataTimeEnd] = React.useState(false);

  const [timeStartValueDate, setTimeStartValueDate] = React.useState(
    new Date(),
  );
  const [timeEndValueDate, setTimeEndValueDate] = React.useState(new Date());
  const [dateValue, setDateValue] = React.useState(new Date());

  const pickerRef = React.useRef();

  const {errors, touched, setFieldValue, values} = useFormikContext();

  function openPicker() {
    pickerRef.current.focus();
  }

  return (
    <View style={tw`bg-white mx-6 mt-5 mb-5 rounded-3 py-3 px-5`}>
      <View
        style={tw`flex-row mb-3 items-center justify-between ${
          errors.date && (touched.date || touched.date)
            ? 'border-b border-[#ff8787] pb-1'
            : ''
        }`}>
        <Text
          style={[
            tw`text-[15px] font-normal text-[#4d4d4d]`,
            {fontFamily: 'Inter'},
          ]}>
          Date:
        </Text>
        <TouchableOpacity
          style={tw`bg-[#ffe3b9] rounded-2 py-1.5 px-3`}
          onPress={() => setOpenData(true)}>
          <Text
            style={[
              tw`text-[14px] font-semibold text-[#ffa825] mr-2`,
              {fontFamily: 'Inter'},
            ]}>
            {values.date === null ? 'Select' : `${values.date}`}
          </Text>
        </TouchableOpacity>

        <Modal animationType="fade" transparent={true} visible={openData}>
          <View style={tw`flex-1 justify-center items-center`}>
            <View
              style={[
                tw`bg-white py-4 w-[92%]`,
                {
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 10,
                  elevation: 10,
                },
              ]}>
              <Text
                style={[
                  tw`text-[15px] font-medium text-black text-center`,
                  {fontFamily: 'Inter'},
                ]}>
                Choose Date
              </Text>
              <View style={tw`mt-5 flex-row items-center justify-center`}>
                <DatePicker
                  mode="date"
                  date={dateValue}
                  onDateChange={setDateValue}
                />
              </View>

              <View style={tw`items-center mt-6`}>
                <TouchableOpacity
                  style={tw`bg-[#E7F3FF] py-2 px-6 rounded-2`}
                  onPress={() => {
                    setFieldValue(
                      'date',
                      `${dateValue.toLocaleDateString()} | ${dateValue
                        .toDateString()
                        .slice(0, 3)}`,
                    );
                    setOpenData(false);
                  }}>
                  <Text
                    style={[
                      tw`text-[13px] font-medium text-black`,
                      {fontFamily: 'Inter'},
                    ]}>
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <View
        style={tw`flex-row mb-3 items-center justify-between ${
          (errors.timeStart || errors.timeEnd) &&
          (touched.timeStart || touched.timeEnd)
            ? 'border-b border-[#ff8787] pb-1'
            : ''
        }`}>
        <Text
          style={[
            tw`text-[15px] font-normal text-[#4d4d4d]`,
            {fontFamily: 'Inter'},
          ]}>
          Time:
        </Text>
        <View style={tw`flex-row items-center`}>
          <TouchableOpacity
            onPress={() => setOpenDataTimeStart(true)}
            style={tw`bg-[#ffe3b9] rounded-2 py-1.5 px-2`}>
            <Text
              style={[
                tw`text-[12px] font-semibold text-[#ffa825]`,
                {fontFamily: 'Inter'},
              ]}>
              {values.timeStart === null ? 'Select' : values.timeStart}
            </Text>
          </TouchableOpacity>
          <Text style={tw`mx-2`}> -&gt; </Text>
          <TouchableOpacity
            onPress={() => setOpenDataTimeEnd(true)}
            style={tw`bg-[#ffe3b9] rounded-2 py-1.5 px-2`}>
            <Text
              style={[
                tw`text-[12px] font-semibold text-[#ffa825]`,
                {fontFamily: 'Inter'},
              ]}>
              {values.timeEnd === null ? 'Select' : values.timeEnd}
            </Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={openDataTimeStart}>
          <View style={tw`flex-1 justify-center items-center`}>
            <View
              style={[
                tw`bg-white py-4 w-[92%]`,
                {
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 10,
                  elevation: 10,
                },
              ]}>
              <Text
                style={[
                  tw`text-[15px] font-medium text-black text-center`,
                  {fontFamily: 'Inter'},
                ]}>
                Choose Start time
              </Text>
              <View style={tw`mt-5 flex-row items-center justify-center`}>
                <DatePicker
                  mode="time"
                  date={timeStartValueDate}
                  onDateChange={setTimeStartValueDate}
                />
              </View>

              <View style={tw`items-center mt-6`}>
                <TouchableOpacity
                  style={tw`bg-[#E7F3FF] py-2 px-6 rounded-2`}
                  onPress={() => {
                    setFieldValue(
                      'timeStart',
                      timeStartValueDate.toTimeString().slice(0, 5),
                    );
                    setOpenDataTimeStart(false);
                  }}>
                  <Text
                    style={[
                      tw`text-[13px] font-medium text-black`,
                      {fontFamily: 'Inter'},
                    ]}>
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={openDataTimeEnd}>
          <View style={tw`flex-1 justify-center items-center`}>
            <View
              style={[
                tw`bg-white py-4 w-[92%]`,
                {
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 10,
                  elevation: 10,
                },
              ]}>
              <Text
                style={[
                  tw`text-[15px] font-medium text-black text-center`,
                  {fontFamily: 'Inter'},
                ]}>
                Choose End time
              </Text>
              <View style={tw`mt-5 flex-row items-center justify-center`}>
                <DatePicker
                  mode="time"
                  date={timeEndValueDate}
                  onDateChange={setTimeEndValueDate}
                />
              </View>

              <View style={tw`items-center mt-6`}>
                <TouchableOpacity
                  style={tw`bg-[#E7F3FF] py-2 px-6 rounded-2`}
                  onPress={() => {
                    setFieldValue(
                      'timeEnd',
                      timeEndValueDate.toTimeString().slice(0, 5),
                    );
                    setOpenDataTimeEnd(false);
                  }}>
                  <Text
                    style={[
                      tw`text-[13px] font-medium text-black`,
                      {fontFamily: 'Inter'},
                    ]}>
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <View style={tw`flex-row mb-3 items-center justify-between`}>
        <Text
          style={[
            tw`text-[15px] font-normal text-[#4d4d4d]`,
            {fontFamily: 'Inter'},
          ]}>
          Place:
        </Text>
        <TouchableOpacity
          style={tw`bg-[#ffe3b9] rounded-2 py-1.5 px-5`}
          onPress={() => openPicker()}>
          <Text
            style={[
              tw`text-[14px] font-semibold text-[#ffa825]`,
              {fontFamily: 'Inter'},
            ]}>
            {values.place}
          </Text>
        </TouchableOpacity>
        <Picker
          style={[
            tw`hidden w-0 h-0`,
            {backfaceVisibility: 'hidden', opacity: 0},
          ]}
          ref={pickerRef}
          selectedValue={values.place}
          onValueChange={(itemValue, itemIndex) =>
            setFieldValue('place', itemValue)
          }>
          <Picker.Item label="Polish" value="Polish" />
          <Picker.Item label="USA" value="USA" />
        </Picker>
      </View>

      <View style={tw`flex-row mb-3 items-center justify-between`}>
        <Text
          style={[
            tw`text-[15px] font-normal text-[#4d4d4d]`,
            {fontFamily: 'Inter'},
          ]}>
          Address:
        </Text>

        <TextInput
          value={values.address}
          onChangeText={text => setFieldValue('address', text)}
          placeholder="Some address..."
          placeholderTextColor={'#ffa825'}
          style={[
            tw`text-[13px] font-semibold text-[#ffa825] bg-[#ffe3b9] rounded-2 py-1.5 px-3 w-2/3`,
            {fontFamily: 'Inter'},
          ]}
        />
      </View>
    </View>
  );
};

export default NewTaskDetails;
