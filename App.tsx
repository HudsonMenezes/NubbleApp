/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" style={{color: '#000'}}>
            Hello, world!
          </Text>
          <Button title="Primary" mb="s24" />
          <Button title="Primary" disabled mb="s24" />
          <Button title="Outline" preset="outline" mb="s24" />
          <Button title="Outline" disabled preset="outline" mb="s24" />
          <Button loading />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
