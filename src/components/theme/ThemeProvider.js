import React, { useState } from 'react';
import { Appearance } from 'react-native';
// import { DARK_COLORS, LIGHT_COLORS } from '../constants/colors';

export const ThemeProvider = ({ children }) => {
    // const colorScheme = Appearance.getColorScheme();
    // // храним флаг isDark
    // const [isDark, setIsDark] = useState(colorScheme === 'dark');
    // const defaultTheme = {
    //   isDark,
    //   colors: isDark ? DARK_COLORS : LIGHT_COLORS,
    //   // будем менять флаг isDark по требованию
    //   setColorScheme: (scheme) => {
    //     setIsDark(scheme === 'dark');
    //   },
    // };
  
    return ( <>
    </>
    //   <ThemeContext.Provider value={defaultTheme}>
    //     {children}
    //   </ThemeContext.Provider>
    );
  };