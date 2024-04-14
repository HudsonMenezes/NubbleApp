/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" mb="s8">
            Olá
          </Text>
          <Text preset="paragraphLarge" mb="s40">
            Digite seu e-mail e senha para entrar
          </Text>

          <TextInput label="E-mail" />

          <TextInput label="Senha" />

          <Text color="primary" preset="paragraphSmall" bold mt="s10">
            Esqueci minha senha
          </Text>

          <Button title="Entrar" mt="s48" />
          <Button title="Criar uma conta" mt="s12" preset="outline" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
