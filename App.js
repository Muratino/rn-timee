import React from 'react';
import {Provider} from 'react-redux';
import {Image, View, Appearance} from 'react-native';
import tw, {useDeviceContext} from 'twrnc';
import {Navigator} from './src/navigation/Navigator';
import {store} from './src/redux/store';

function App() {
  useDeviceContext(tw);
  const themeDef = Appearance.getColorScheme();
  const [loading, setLoading] = React.useState(true);
  const [theme, setTheme] = React.useState(themeDef);

  React.useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 1300);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  // const windowWidth = Dimensions.get('window').width;
  // const windowHeight = Dimensions.get('window').height;

  return (
    <Provider store={store}>
      {loading && theme !== 'dark' ? (
        <View style={tw`relative bg-[#fbfbfb]`}>
          {/* {theme === 'dark' ? (
            // <Image
            //   style={{
            //     backgroundColor: '#fff',
            //     width: windowWidth,
            //     height: windowHeight,
            //     position: 'absolute',
            //     zIndex: -1,
            //     resizeMode: 'cover',
            //   }}
            //   source={require('./src/assets/bg-white.jpg')}
            // />
            <Navigator />
          ) : null} */}
          <Image
            style={{width: '100%', height: '100%', resizeMode: 'contain'}}
            source={require('./src/assets/openGif.gif')}
          />
        </View>
      ) : (
        <Navigator />
      )}
    </Provider>
  );
}

export default App;
