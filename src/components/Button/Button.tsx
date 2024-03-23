/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../theme/theme';
import {Box, TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';

interface ButtonProps extends TouchableOpacityBoxProps {
  title?: string;
  loading?: boolean;
}

export function Button({
  title,
  loading,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  return (
    <TouchableOpacityBox
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      borderRadius="s16"
      height={50}
      alignItems="center"
      justifyContent="center"
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold style={{color: '#fff'}}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
