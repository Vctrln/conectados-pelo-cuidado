import { StyleSheet } from 'react-native';
import { colors } from '../theme';

export const sectionHeaderStyles = StyleSheet.create({
  wrap: {
    width: '100%',
    minWidth: 0,
    gap: 8,
    maxWidth: 760,
  },
  eyebrow: { 
    color: colors.blue, 
    fontSize: 11, 
    fontWeight: '700', 
    letterSpacing: 1.5 
  },
  title: {
    maxWidth: '100%',
    color: colors.ink,
    fontSize: 35,
    lineHeight: 42,
    fontWeight: '700',
    letterSpacing: -0.8,
  },
  titleMobile: {
    fontSize: 29,
    lineHeight: 35,
    letterSpacing: -0.5,
  },
  description: {
    maxWidth: '100%',
    color: colors.muted,
    fontSize: 16,
    lineHeight: 25,
    marginTop: 3,
  },
  descriptionMobile: {
    fontSize: 14,
    lineHeight: 22,
  },
  lightText: { 
    color: '#BFD2E6' 
  },
  lightTitle: { 
    color: colors.white 
  },
});

export function getSectionHeaderEyebrowStyle(light: boolean) {
  return StyleSheet.flatten([
    sectionHeaderStyles.eyebrow,
    light && sectionHeaderStyles.lightText,
  ]);
}

export function getSectionHeaderTitleStyle(light: boolean) {
  return StyleSheet.flatten([
    sectionHeaderStyles.title,
    light && sectionHeaderStyles.lightTitle,
  ]);
}

export function getSectionHeaderDescriptionStyle(light: boolean) {
  return StyleSheet.flatten([
    sectionHeaderStyles.description,
    light && sectionHeaderStyles.lightText,
  ]);
}