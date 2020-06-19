import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Weather from './components/Weather';

const App: FC = () => {
  return (
    <View style={styles.container}>
      {/*<Text>Open up App.tsx to start working on your app!</Text>*/}
      <Weather />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
