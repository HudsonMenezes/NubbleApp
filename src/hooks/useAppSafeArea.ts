import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppTheme} from './useAppTheme';

export function useAppSafeArea() {
  const {top, bottom} = useSafeAreaInsets(); //usado para pegar o padding do topo do dispositivo, muito usado para iOS
  const {spacing} = useAppTheme();

  return {
    top: Math.max(top, spacing.s20),
    bottom: Math.max(top, spacing.s20),
  };
}
