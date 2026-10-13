import { StyleSheet } from 'react-native';

export const glassCardStyles = StyleSheet.create({
  blur: {
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9DDD9',
  },
  inner: {
    borderRadius: 10,
    padding: 22,
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
  },
});
