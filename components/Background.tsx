import { PropsWithChildren } from 'react';
import { View } from 'react-native';

export function Background({ children }: PropsWithChildren) {
  return <View style={{ flex: 1, backgroundColor: '#F5F9FC' }}>{children}</View>;
}
