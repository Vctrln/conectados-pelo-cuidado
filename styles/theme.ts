import { Platform, ViewStyle } from 'react-native';

export const colors = {
  ink: '#173A55',
  navy: '#173A55',
  blue: '#356B9E',
  blueDark: '#28567D',
  sky: '#EEF4FF',
  teal: '#477D70',
  mint: '#EAF3F0',
  coral: '#D97955',
  coralSoft: '#FBEFE9',
  yellow: '#C9A43B',
  yellowSoft: '#FBF5DE',
  lilac: '#7768B5',
  lilacSoft: '#F1EFF9',
  green: '#477D70',
  greenSoft: '#EAF3F0',
  white: '#FFFFFF',
  paper: '#F7F5F0',
  muted: '#6B7884',
  line: '#DDE5E8',
  darkLine: 'rgba(24,50,71,0.12)',
  bgTop: '#F5F9FC',
  bgBottom: '#FFFFFF',
} as const;

export const radii = {
  xs: 2,
  sm: 6,
  md: 10,
  lg: 14,
  xl: 18,
  pill: 999,
} as const;

export const maxWidth = 1160;

export const shadows = Platform.select({
  web: {
    shadowColor: '#183247',
    shadowOpacity: 0.04,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 5 },
  },
  default: {
    shadowColor: '#183247',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2,
  },
}) as ViewStyle;
