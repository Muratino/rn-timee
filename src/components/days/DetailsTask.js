import {View, Text, TouchableOpacity, TextInput, Modal} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import {ArrowDayIcon, ArrowWhiteDayIcon, TabloDayIcon} from './icons';
import {deleteDateTaskById, upDateTaskById} from '../../redux/Slice/app';

const DetailsTask = ({route: {params}}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [timeStartValue, setTimeStartValue] = React.useState(new Date());
  const [openModal, setOpenModal] = React.useState(false);
  const [timeEndValue, setTimeEndValue] = React.useState(new Date());

  const initialValues = {
    title: params?.values.title,
    date: params?.values.date,
    timeStart: params?.values.timeStart,
    timeEnd: params?.values.timeEnd,
    place: params?.values.location.city,
    address: params?.values.location.address,
    info: params?.values.infoTask,
  };

  const FormValidate = Yup.object().shape({
    title: Yup.string().required('The field cannot be empty'),
    timeStart: Yup.string().required('The field cannot be empty'),
    timeEnd: Yup.string().required('The field cannot be empty'),
  });

  return (
    <KeyboardAwareScrollView
      style={tw`bg-[#e6f3ff] flex-1`}
      resetScrollToCoords={{x: 0, y: 0}}
      showsVerticalScrollIndicator={false}>
      <Formik
        initialValues={initialValues}
        validationSchema={FormValidate}
        onSubmit={values => {
          const upDateTask = {
            id: params?.values.id,
            day: params?.name,
            color: {
              bg: params?.values.color.bg,
              time: params?.values.color.time,
            },
            title: values.title,
            timeStart: values.timeStart,
            timeEnd: values.timeEnd,
            location: {
              city: values.place,
              address: values.address,
            },
            date: values.date,
            infoTask: values.info,
          };
          dispatch(upDateTaskById(upDateTask));
          navigation.goBack();
        }}>
        {({handleSubmit, values, setFieldValue, errors}) => {
          return (
            <>
              <View
                style={tw`bg-[${params?.values?.color.bg}] pt-[20px] pb-[15px] px-[26px] relative`}>
                <TouchableOpacity
                  style={tw`mb-2`}
                  onPress={() => navigation.goBack()}>
                  <ArrowDayIcon />
                </TouchableOpacity>
                <TextInput
                  value={values.title}
                  onChangeText={text => setFieldValue('title', text)}
                  placeholder="Title..."
                  style={[
                    tw`text-[22px] font-bold text-white`,
                    {fontFamily: 'Inter'},
                  ]}
                  placeholderTextColor="#FFFF"
                />
                {errors.title ? (
                  <Text
                    style={tw`text-[#ff8787] text-[12px] absolute bottom-[-20px] left-5`}>
                    {errors.timeEnd}
                  </Text>
                ) : null}
              </View>

              <View
                style={tw`bg-white py-[26px] px-5 mx-6 mt-5 mb-7 rounded-4`}>
                <View style={tw`flex-row mb-6 items-center relative`}>
                  <TouchableOpacity
                    onPress={() => setOpenModal(true)}
                    style={tw`bg-[${params?.values?.color.bg}] flex-row items-center justify-between rounded-2 w-3/5 py-2 px-4`}>
                    <Text
                      style={[
                        tw`text-[12px] font-semibold text-white`,
                        {fontFamily: 'Inter'},
                      ]}>
                      {values.timeStart}
                      {'  '}
                      {'->'}
                      {'  '}
                      {values.timeEnd}
                    </Text>
                    <ArrowWhiteDayIcon />
                  </TouchableOpacity>
                  <View style={tw`ml-10`}>
                    <TabloDayIcon fill={params?.values?.color.bg} />
                  </View>
                  {errors.timeStart || errors.timeEnd ? (
                    <Text
                      style={tw`text-[#ff8787] text-[12px] absolute bottom-[-20px] left-1`}>
                      {errors.timeEnd}
                    </Text>
                  ) : null}
                </View>

                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={openModal}>
                  <View style={tw`flex-1 justify-center items-center`}>
                    <View
                      style={[
                        tw`bg-white py-4 px-6 w-2/3`,
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
                        Choose Time
                      </Text>
                      <View style={tw`mt-5`}>
                        <Text
                          style={[
                            tw`text-[14px] font-medium text-black`,
                            {fontFamily: 'Inter'},
                          ]}>
                          Start:
                        </Text>
                        <DatePicker
                          style={tw`h-10`}
                          mode="time"
                          date={timeStartValue}
                          onDateChange={item => {
                            setTimeStartValue(item);
                          }}
                        />
                        <Text
                          style={[
                            tw`text-[14px] font-medium text-black mt-3`,
                            {fontFamily: 'Inter'},
                          ]}>
                          End:
                        </Text>
                        <DatePicker
                          style={tw`h-10`}
                          mode="time"
                          date={timeEndValue}
                          onDateChange={item => {
                            setTimeEndValue(item);
                          }}
                        />
                      </View>
                      <View style={tw`items-center mt-6`}>
                        <TouchableOpacity
                          style={tw`bg-[${params?.values?.color.bg}] py-2 px-6 rounded-2`}
                          onPress={() => {
                            setFieldValue(
                              'timeStart',
                              timeStartValue.toTimeString().slice(0, 5),
                            );
                            setFieldValue(
                              'timeEnd',
                              timeEndValue.toTimeString().slice(0, 5),
                            );
                            setOpenModal(false);
                          }}>
                          <Text
                            style={[
                              tw`text-[13px] font-medium text-white`,
                              {fontFamily: 'Inter'},
                            ]}>
                            Save changes
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>

                <TextInput
                  value={values.place}
                  onChangeText={text => setFieldValue('place', text)}
                  placeholder="Country"
                  style={[
                    tw`h-10 bg-[${params?.values?.color.bg}] rounded-2 mb-6 py-2 px-3 max-w-[145px] text-[12px] font-semibold text-white`,
                    {fontFamily: 'Inter'},
                  ]}
                />
                {/* </TouchableOpacity> */}
                {/* <TouchableOpacity
                    style={tw`bg-[${params?.values?.color
                      .bg!}] flex-row items-center justify-between rounded-2 py-3 px-4 w-full max-w-[110px]`}>
                    <Text
                      style={[
                        tw`text-[12px] font-semibold text-white`,
                        {fontFamily: 'Inter'},
                      ]}>
                      {params?.values?.location.city}
                    </Text>
                    <ArrowWhiteDayIcon />
                  </TouchableOpacity> */}

                <TextInput
                  value={values.address}
                  onChangeText={text => setFieldValue('address', text)}
                  placeholder="Address..."
                  style={[
                    tw`text-[13px] font-semibold text-white bg-[${params?.values?.color.bg}] rounded-2 py-2 px-3`,
                    {fontFamily: 'Inter'},
                  ]}
                  placeholderTextColor="#FFFF"
                />
              </View>

              <TextInput
                multiline
                textAlignVertical="top"
                numberOfLines={10}
                style={tw`text-[13px] font-medium text-black bg-white px-4 py-4 mx-6 rounded-4`}
                value={values.info}
                onChangeText={text => setFieldValue('info', text)}
                placeholder="Info..."
              />

              <View
                style={tw`flex-row items-center mx-6 mt-8 mb-4 justify-between`}>
                <TouchableOpacity
                  style={tw`bg-white py-4 px-10 rounded-3 items-center`}
                  onPress={() => {
                    dispatch(
                      deleteDateTaskById({
                        day: params?.name,
                        id: params?.values.id,
                      }),
                    );
                    navigation.goBack();
                  }}>
                  <Text
                    style={[
                      tw`text-[14px] text-[#ff8787]`,
                      {
                        fontFamily: 'Inter',
                        letterSpacing: 2,
                        fontWeight: '600',
                      },
                    ]}>
                    Delete
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={tw`bg-white py-4 px-10 rounded-3 items-center`}
                  onPress={handleSubmit}>
                  <Text
                    style={[
                      tw`text-[14px] text-[#39A0FF]`,
                      {
                        fontFamily: 'Inter',
                        letterSpacing: 2,
                        fontWeight: '600',
                      },
                    ]}>
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          );
        }}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default DetailsTask;
