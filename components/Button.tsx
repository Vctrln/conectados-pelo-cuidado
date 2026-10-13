import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text } from 'react-native';
import { colors } from '@/styles/theme';
import {
  getButtonStyle,
  getButtonTextStyle,
} from '@/styles/components/button.styles';

type Props = { href: string; label: string; variant?: 'primary' | 'soft' };

export function Button({ href, label, variant = 'primary' }: Props) {
  return (
    <Link href={href as any} asChild>
      <Pressable style={getButtonStyle(variant)}>
        <Text style={getButtonTextStyle(variant)}>{label}</Text>
        <Ionicons
          name="arrow-forward"
          size={16}
          color={variant === 'soft' ? colors.navy : colors.white}
        />
      </Pressable>
    </Link>
  );
}