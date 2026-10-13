import { StyleSheet } from 'react-native';
import { maxWidth } from '../theme';

const INK = '#173A55';
const TEXT = '#425A68';
const MUTED = '#71828C';
const BLUE = '#356B9E';
const PAGE = '#F5F9FC';
const LINE = '#DDE5E8';

export const segurancaStyles = StyleSheet.create({
  // Apresentação

  hero: {
    width: '100%',
    backgroundColor: '#EEF5FB',
    paddingVertical: 54,
  },

  heroInner: {
    width: '100%',
    maxWidth,
    alignSelf: 'center',
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40,
  },

  heroInnerMobile: {
    width: '100%',
    minWidth: 0,
    flexDirection: 'column',
    alignItems: 'stretch',
    paddingHorizontal: 20,
    gap: 22,
  },

  heroCopy: {
    flex: 1,
    minWidth: 0,
  },

  heroImage: {
    width: 340,
    height: 230,
    borderRadius: 14,
    flexShrink: 0,
    backgroundColor: PAGE,
  },

  heroImageMobile: {
    width: '100%',
    height: 185,
    borderRadius: 12,
  },

  // Lista de recursos

  content: {
    width: '100%',
    maxWidth,
    alignSelf: 'center',
    paddingHorizontal: 32,
    paddingBottom: 58,
    backgroundColor: '#FFFFFF',
  },

  contentMobile: {
    width: '100%',
    paddingHorizontal: 18,
  },

  group: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 60,
    paddingVertical: 39,
    borderBottomWidth: 1,
    borderBottomColor: LINE,
  },

  groupMobile: {
    flexDirection: 'column',
    gap: 16,
    paddingVertical: 27,
  },

  groupIntro: {
    flex: 0.8,
    minWidth: 0,
  },

  groupIntroMobile: {
    width: '100%',
    minWidth: 0,
    flex: 0,
  },

  number: {
    color: BLUE,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },

  title: {
    color: INK,
    fontSize: 27,
    lineHeight: 34,
    fontWeight: '700',
    letterSpacing: -0.4,
    marginTop: 8,
  },

  description: {
    color: MUTED,
    fontSize: 13,
    lineHeight: 21,
    marginTop: 10,
  },

  resourceList: {
    flex: 1.2,
    minWidth: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },

  resourceListMobile: {
    width: '100%',
    minWidth: 0,
    flex: 0,
  },
});