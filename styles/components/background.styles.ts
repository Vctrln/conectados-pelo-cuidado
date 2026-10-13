import { StyleSheet } from 'react-native';
import { colors } from '@/styles/theme';

export const backgroundStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.paper || colors.bgTop,
  },
  blob: {
    position: 'absolute',
    borderRadius: 999,
    opacity: 0.55,
  },
  blobBlue: {
    width: 260,
    height: 260,
    backgroundColor: colors.sky,
    top: -110,
    right: -80,
  },
  blobCoral: {
    width: 180,
    height: 180,
    backgroundColor: colors.coralSoft,
    top: 300,
    left: -100,
  },
});