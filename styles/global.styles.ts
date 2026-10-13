import { StyleSheet } from 'react-native';
import { colors, maxWidth } from './theme';

export const globalStyles = StyleSheet.create({
  // Containers principais
  container: {
    flex: 1,
    backgroundColor: colors.bgTop,
  },
  contentWrapper: {
    width: '100%',
    maxWidth,
    alignSelf: 'center',
    paddingHorizontal: 22,
  },

  // Utilitários de layout e alinhamento
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Utilitários de texto genéricos
  heading1: {
    color: colors.ink,
    fontSize: 38,
    lineHeight: 44,
    fontWeight: '900',
    letterSpacing: -1.2,
  },
  heading2: {
    color: colors.ink,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '900',
    letterSpacing: -0.8,
  },
  bodyText: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 24,
  },
});