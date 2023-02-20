import {SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../components/home/Header';
import ListDay from '../components/home/ListDay';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <ListDay />
    </SafeAreaView>
  );
};

export default HomeScreen;
