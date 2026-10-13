import { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { glassCardStyles as styles } from '@/styles/components/glassCard.styles';

export function GlassCard({ children, style }: PropsWithChildren<{ style?: any }>) {
  return <View style={[styles.inner, style]}>{children}</View>;
}
