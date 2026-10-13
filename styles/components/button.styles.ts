import { StyleSheet } from 'react-native';
import { colors, radii } from '../theme';

export const buttonStyles = StyleSheet.create({
  base: {
    minHeight: 46,
    paddingHorizontal: 17,
    borderRadius: radii.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
  },
  primary: {
    backgroundColor: colors.ink,
  },
  soft: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
  },
  text: {
    fontSize: 13,
    fontWeight: '800',
  },
  primaryText: {
    color: colors.white,
  },
  softText: {
    color: colors.navy,
  },
});

export function getButtonStyle(variant: 'primary' | 'soft') {
  return StyleSheet.flatten([
    buttonStyles.base,
    variant === 'soft' ? buttonStyles.soft : buttonStyles.primary,
  ]);
}

export function getButtonTextStyle(variant: 'primary' | 'soft') {
  return StyleSheet.flatten([
    buttonStyles.text,
    variant === 'soft' ? buttonStyles.softText : buttonStyles.primaryText,
  ]);
}