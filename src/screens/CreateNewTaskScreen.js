import React from 'react';
import {SafeAreaView, TextInput, TouchableOpacity, Text} from 'react-native';
import tw from 'twrnc';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import uuid from 'react-native-uuid';
import NewTaskHeader from '../components/newTask/NewTaskHeader';
import NewTaskDetails from '../components/newTask/NewTaskDetails';
import NewTaskColor from '../components/newTask/NewTaskColor';
import {useDispatch} from 'react-redux';
import {setNewTask} from '../redux/Slice/app';

const colorArr = [
  {id: 1, value: '#ff8787', name: 'Red', subColorForText: '#C20F0F'},
  {id: 2, value: '#edc75f', name: 'Orange', subColorForText: '#9E5F00'},
  {id: 3, value: '#73c2ef', name: 'Blue', subColorForText: '#094D8C'},
  {id: 4, value: '#6ea34c', name: 'Green', subColorForText: '#163200'},
];

const FormValidate = Yup.object().shape({
  title: Yup.string().required(),
  date: Yup.string().required(),
  timeStart: Yup.string().required(),
  timeEnd: Yup.string().required(),
});

const CreateNewTaskScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const initialValues = {
    title: '',
    date: null,
    color: '#ff8787',
    timeStart: null,
    timeEnd: null,
    place: 'Poland',
    address: '',
    info: '',
  };
  return (
    <SafeAreaView style={tw`bg-[#E7F3FF] flex-1`}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={initialValues}
          validationSchema={FormValidate}
          onSubmit={values => {
            let timeColorFilter = colorArr.filter(
              el => el.value === values.color && el.subColorForText,
            );

            const newTask = {
              id: `${uuid.v4()}`,
              color: {
                bg: values.color,
                time: timeColorFilter[0].subColorForText,
              },
              title: values.title,
              timeStart: values.timeStart,
              timeEnd: values.timeEnd,
              date: values.date,
              location: {
                city: values.place,
                address: values.address,
              },
              infoTask: values.info,
            };

            dispatch(
              setNewTask({day: values.date.slice(11, 14), data: newTask}),
            );
            navigation.goBack();
          }}>
          {({handleChange, handleSubmit, values}) => {
            return (
              <>
                <NewTaskHeader />
                <NewTaskDetails />
                <NewTaskColor colorArr={colorArr} />
                <TextInput
                  multiline
                  textAlignVertical="top"
                  numberOfLines={10}
                  style={tw`text-[13px] font-medium text-black bg-white px-4 py-4 mx-6 rounded-4`}
                  value={values.info}
                  onChangeText={handleChange('info')}
                  placeholder="Info..."
                />
                <TouchableOpacity
                  style={tw`bg-white p-4 mx-6 mt-8 mb-4 rounded-3 items-center`}
                  onPress={handleSubmit}>
                  <Text
                    style={[
                      tw`text-[15px] font-medium text-[#39A0FF]`,
                      {fontFamily: 'Inter', letterSpacing: 3},
                    ]}>
                    Create
                  </Text>
                </TouchableOpacity>
              </>
            );
          }}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default CreateNewTaskScreen;
