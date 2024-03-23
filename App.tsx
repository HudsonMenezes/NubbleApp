import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" style={{color: '#000'}}>
        Hello, world!
      </Text>
      <Text preset="headingLarge" style={{color: '#000'}}>
        Hello, world! 2
      </Text>
    </SafeAreaView>
  );
}

export default App;
