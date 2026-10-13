import { StyleSheet } from 'react-native';
import { colors, maxWidth } from '../theme';

const INK = '#173A55';
const TEXT = '#425A68';
const MUTED = '#71828C';
const BLUE = '#356B9E';
const BLUE_SOFT = '#EAF3FA';
const PAGE = '#F5F9FC';
const LINE = '#E2E9EC';
const WHITE = '#FFFFFF';

export const guiaSlugStyles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    backgroundColor: WHITE,
  },

  container: {
    width: '100%',
    maxWidth,
    alignSelf: 'center',
    paddingHorizontal: 32,
  },

  containerMobile: {
    width: '100%',
    paddingHorizontal: 18,
  },

  // Cabeçalho

  articleHeader: {
    backgroundColor: '#F0F6FB',
    paddingTop: 30,
    paddingBottom: 46,
  },

  headerLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 38,
  },

  headerLayoutMobile: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 24,
  },

  headerCopy: {
    flex: 1,
    minWidth: 0,
  },

  articleImage: {
    width: 330,
    height: 245,
    borderRadius: 14,
    flexShrink: 0,
    backgroundColor: BLUE_SOFT,
  },

  articleImageMobile: {
    width: '100%',
    height: 190,
    borderRadius: 12,
  },

  back: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 8,
    paddingVertical: 7,
    marginBottom: 30,
  },

  backText: {
    color: BLUE,
    fontSize: 13,
    fontWeight: '600',
  },

  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  tag: {
    alignSelf: 'flex-start',
    backgroundColor: '#DCEBF6',
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 8,
  },

  tagText: {
    color: BLUE,
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.7,
  },

  title: {
    color: INK,
    fontSize: 39,
    lineHeight: 46,
    fontWeight: '700',
    letterSpacing: -0.8,
    maxWidth: 650,
  },

  titleMobile: {
    fontSize: 32,
    lineHeight: 39,
    letterSpacing: -0.6,
  },

  intro: {
    color: TEXT,
    fontSize: 16,
    lineHeight: 26,
    maxWidth: 760,
    marginTop: 17,
  },

  // Área principal

  contentArea: {
    backgroundColor: WHITE,
    paddingTop: 48,
    paddingBottom: 70,
  },

  layout: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 32,
  },

  layoutMobile: {
    flexDirection: 'column',
    gap: 38,
  },

  body: {
    width: '100%',
    maxWidth: 790,
    minWidth: 0,
  },

  // Seções do artigo

  section: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 18,
    paddingVertical: 10,
    marginBottom: 22,
  },

  sectionSeparated: {
    borderTopWidth: 1,
    borderTopColor: LINE,
    paddingTop: 27,
  },

  sectionNumber: {
    color: '#8BA8BC',
    fontSize: 12,
    fontWeight: '700',
    paddingTop: 7,
    width: 25,
  },

  sectionContent: {
    flex: 1,
    minWidth: 0,
    maxWidth: '100%',
  },

  sectionTitle: {
    color: INK,
    fontSize: 21,
    lineHeight: 28,
    fontWeight: '700',
    letterSpacing: -0.2,
    marginBottom: 11,
  },

  bodyText: {
    maxWidth: '100%',
    flexShrink: 1,
    color: TEXT,
    fontSize: 15,
    lineHeight: 26,
  },

  bullets: {
    gap: 14,
  },

  bulletRow: {
    width: '100%',
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 11,
  },

  bullet: {
    marginTop: 3,
    flexShrink: 0,
  },

  // Encaminhamento para ajuda

  tip: {
    marginTop: 18,
    padding: 24,
    borderRadius: 19,
    backgroundColor: PAGE,
  },

  tipHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  tipTitle: {
    flex: 1,
    color: INK,
    fontSize: 16,
    lineHeight: 23,
    fontWeight: '700',
  },

  tipText: {
    color: TEXT,
    fontSize: 13,
    lineHeight: 21,
    marginTop: 11,
  },

  tipAction: {
    alignSelf: 'flex-start',
    marginTop: 18,
  },

  // Nota complementar

  side: {
    width: 235,
    paddingTop: 5,
  },

  sideMobile: {
    width: '100%',
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: LINE,
  },

  sideHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  sideLabel: {
    color: INK,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.8,
  },

  sideText: {
    color: MUTED,
    fontSize: 12,
    lineHeight: 20,
    marginTop: 12,
  },

  sideLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    alignSelf: 'flex-start',
    marginTop: 17,
  },

  sideLinkText: {
    color: BLUE,
    fontSize: 12,
    fontWeight: '700',
  },

  // Estado para guia inexistente

  notFound: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 28,
    paddingVertical: 90,
    gap: 13,
  },

  notFoundTitle: {
    color: INK,
    fontSize: 25,
    lineHeight: 32,
    fontWeight: '700',
  },

  notFoundText: {
    color: TEXT,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 8,
  },
});