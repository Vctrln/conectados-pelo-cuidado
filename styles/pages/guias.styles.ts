import { StyleSheet } from 'react-native';

const INK = '#173A55';
const TEXT = '#425A68';
const MUTED = '#71828C';
const BLUE = '#356B9E';
const BLUE_SOFT = '#EAF3FA';
const GREEN_SOFT = '#EAF3F0';
const YELLOW_SOFT = '#F8F1D9';
const WHITE = '#FFFFFF';
const LINE = '#E2E9EC';
const PAGE = '#F5F9FC';

const MAX_WIDTH = 1160;

export const guiasStyles = StyleSheet.create({
  page: {
    backgroundColor: WHITE,
    paddingBottom: 0,
  },

  container: {
    width: '100%',
    maxWidth: MAX_WIDTH,
    alignSelf: 'center',
    paddingHorizontal: 32,
  },

  containerMobile: {
    width: '100%',
    paddingHorizontal: 18,
  },

  // Introdução

  hero: {
    backgroundColor: '#F0F6FB',
    paddingTop: 36,
    paddingBottom: 70,
  },

  backLink: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 7,
    marginBottom: 42,
  },

  backLinkText: {
    color: BLUE,
    fontSize: 13,
    fontWeight: '600',
  },

  eyebrow: {
    color: BLUE,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.4,
    marginBottom: 15,
  },

  title: {
    color: INK,
    fontSize: 44,
    lineHeight: 52,
    fontWeight: '700',
    letterSpacing: -1.1,
    maxWidth: 760,
  },

  titleMobile: {
    fontSize: 34,
    lineHeight: 41,
    letterSpacing: -0.7,
  },

  description: {
    color: TEXT,
    fontSize: 16,
    lineHeight: 26,
    marginTop: 17,
    maxWidth: 650,
  },

  // Guia em destaque

  featuredSection: {
    backgroundColor: WHITE,
    paddingTop: 52,
    paddingBottom: 58,
  },

  sectionEyebrow: {
    color: BLUE,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.15,
    marginBottom: 12,
  },

  featured: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 18,
    backgroundColor: '#F5F9FC',
    overflow: 'hidden',
    gap: 26,
  },

  featuredMobile: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 0,
  },

  featuredImage: {
    width: 280,
    height: 230,
    flexShrink: 0,
  },

  featuredImageMobile: {
    width: '100%',
    height: 185,
  },

  featuredContent: {
    flex: 1,
    minWidth: 0,
    alignItems: 'flex-start',
    paddingVertical: 26,
    paddingRight: 28,
  },

  featuredContentMobile: {
    paddingHorizontal: 20,
    paddingVertical: 22,
  },

  featuredTag: {
    color: BLUE,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.3,
  },

  featuredTitle: {
    color: INK,
    fontSize: 26,
    lineHeight: 33,
    fontWeight: '700',
    marginTop: 9,
    maxWidth: 680,
  },

  featuredDescription: {
    color: TEXT,
    fontSize: 14,
    lineHeight: 22,
    marginTop: 9,
    maxWidth: 680,
  },

  readLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 19,
  },

  readLinkText: {
    color: BLUE,
    fontSize: 13,
    fontWeight: '700',
  },

  featuredArrow: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },

  featuredArrowMobile: {
    width: 38,
    height: 38,
    borderRadius: 13,
  },

  pressed: {
    opacity: 0.78,
  },

  // Lista de guias

  guidesSection: {
    backgroundColor: PAGE,
    paddingTop: 58,
    paddingBottom: 70,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 20,
  },

  sectionHeading: {
    flex: 1,
    minWidth: 0,
  },

  sectionTitle: {
    color: INK,
    fontSize: 30,
    lineHeight: 37,
    fontWeight: '700',
    letterSpacing: -0.5,
  },

  sectionTitleMobile: {
    fontSize: 25,
    lineHeight: 32,
  },

  count: {
    color: MUTED,
    fontSize: 12,
    paddingBottom: 4,
  },

  guideList: {
    marginTop: 26,
    borderTopWidth: 1,
    borderTopColor: LINE,
  },

  guide: {
    width: '100%',
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 17,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: LINE,
  },

  guideThumbnail: {
    width: 86,
    height: 70,
    borderRadius: 8,
    flexShrink: 0,
    backgroundColor: BLUE_SOFT,
  },

  guideNumber: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },

  guideNumberBlue: {
    backgroundColor: BLUE_SOFT,
  },

  guideNumberGreen: {
    backgroundColor: GREEN_SOFT,
  },

  guideNumberYellow: {
    backgroundColor: YELLOW_SOFT,
  },

  guideNumberText: {
    color: INK,
    fontSize: 12,
    fontWeight: '700',
  },

  guideContent: {
    flex: 1,
    minWidth: 0,
  },

  guideTag: {
    color: MUTED,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.7,
    textTransform: 'uppercase',
  },

  guideTitle: {
    color: INK,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
    marginTop: 5,
  },

  guideDescription: {
    width: '100%',
    color: TEXT,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 5,
    maxWidth: 720,
  },

  guideArrow: {
    flexShrink: 0,
  },

  // Informação complementar

  bottomSection: {
    backgroundColor: WHITE,
    paddingTop: 38,
    paddingBottom: 52,
  },

  bottomInner: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 14,
    paddingTop: 22,
    borderTopWidth: 1,
    borderTopColor: LINE,
  },

  bottomContent: {
    flex: 1,
    minWidth: 0,
  },

  bottomTitle: {
    color: INK,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '700',
  },

  bottomDescription: {
    color: MUTED,
    fontSize: 12,
    lineHeight: 20,
    marginTop: 6,
    maxWidth: 800,
  },
});