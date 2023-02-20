import {createSlice} from '@reduxjs/toolkit';
import {storeData} from '../../hooks/useStorage';

const initialState = {
  week: [
    {day: 'Monday', data: [], short: 'Mon'},
    {day: 'Tuesday', data: [], short: 'Tue'},
    {day: 'Wednesday', data: [], short: 'Wed'},
    {day: 'Thursday', data: [], short: 'Thu'},
    {day: 'Friday', data: [], short: 'Fri'},
    {day: 'Saturday', data: [], short: 'Sat'},
    {day: 'Sunday', data: [], short: 'Sun'},
  ],
};

const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setStorageData(state, action) {
      state.week = [...action.payload.week];
    },
    setNewTask(state, action) {
      state.week.map(el => {
        if (String(el.short) === String(action.payload.day)) {
          el.data = [...el.data, action.payload.data];
        }
      });
      storeData({name: '@week', value: state.week});
    },
    upDateTaskById(state, action) {
      const indexOfDay = state.week.findIndex(
        el => String(el.day) === String(action.payload.day),
      );
      const indexOfData = state.week[indexOfDay].data.findIndex(
        el => String(el.id) === String(action.payload.id),
      );
      state.week[indexOfDay].data[indexOfData] = {
        ...state.week[indexOfDay].data[indexOfData],
        ...action.payload,
      };

      storeData({name: '@week', value: state.week});
    },
    deleteDateTaskById(state, action) {
      const indexOfDay = state.week.findIndex(
        el => String(el.day) === String(action.payload.day),
      );
      const newArr = state.week[indexOfDay].data.filter(
        el => String(el.id) !== String(action.payload.id),
      );

      state.week[indexOfDay].data = newArr;

      storeData({name: '@week', value: state.week});
    },
  },
});

export const {setNewTask, upDateTaskById, setStorageData, deleteDateTaskById} =
  app.actions;

export default app.reducer;
