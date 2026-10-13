import { StyleSheet } from 'react-native';

const INK = '#183247';
const MUTED = '#6B7884';
const BLUE = '#2F6FED';
const LINE = '#D9DDD9';
const PAPER = '#FFFDF9';

export const guideCardStyles = StyleSheet.create({
  card: {
    minHeight: 170,
    paddingVertical: 19,
    paddingHorizontal: 0,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: LINE,
    backgroundColor: PAPER,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tag: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    backgroundColor: 'transparent',
  },
  tagText: {
    color: BLUE,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  title: {
    color: INK,
    fontSize: 20,
    lineHeight: 25,
    fontWeight: '700',
    marginTop: 15,
  },
  description: {
    color: MUTED,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 7,
    maxWidth: 620,
  },
});

export function getGuideCardStyle(accent?: boolean) {
  return [
    guideCardStyles.card,
    accent && { borderTopColor: BLUE },
  ];
}
