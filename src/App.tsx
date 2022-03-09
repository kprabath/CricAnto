/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
// import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';
import AppRoutes from './navigation/appRoutes';
import Colors from './res/colors';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider style={styles.container}>
          <StatusBar hidden />
          <AppRoutes />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default App;
