import { StyleSheet } from 'react-native';

const INK = '#173A55';
const TEXT = '#425A68';
const MUTED = '#71828C';
const BLUE = '#356B9E';
const BLUE_SOFT = '#EAF3FA';
const WHITE = '#FFFFFF';
const PAGE = '#F5F9FC';
const LINE = '#DDE5E8';

const MAX_WIDTH = 1160;

export const oficinaStyles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: MAX_WIDTH,
    alignSelf: 'center',
    paddingHorizontal: 32,
  },

  containerMobile: {
    paddingHorizontal: 20,
  },

  // Apresentação

  hero: {
    backgroundColor: '#EEF5FB',
    paddingTop: 30,
    paddingBottom: 58,
  },

  heroMobile: {
    paddingTop: 22,
    paddingBottom: 36,
  },

  heroLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 42,
  },

  heroLayoutMobile: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 24,
  },

  heroCopy: {
    flex: 1,
    minWidth: 0,
  },

  heroImage: {
    width: 390,
    height: 285,
    borderRadius: 14,
    flexShrink: 0,
    backgroundColor: BLUE_SOFT,
  },

  heroImageMobile: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },

  backLink: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 7,
    marginBottom: 30,
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
    letterSpacing: 1.2,
    marginBottom: 16,
  },

  heroTitle: {
    color: INK,
    fontSize: 39,
    lineHeight: 46,
    fontWeight: '700',
    letterSpacing: -0.8,
    maxWidth: 650,
  },

  heroTitleMobile: {
    fontSize: 33,
    lineHeight: 40,
    letterSpacing: -0.6,
  },

  heroDescription: {
    width: '100%',
    color: TEXT,
    fontSize: 16,
    lineHeight: 26,
    marginTop: 18,
    maxWidth: 700,
  },

  // Proposta e percurso

  section: {
    backgroundColor: WHITE,
    paddingVertical: 72,
  },

  sectionMobile: {
    paddingVertical: 44,
  },

  split: {
    width: '100%',
    maxWidth: MAX_WIDTH,
    alignSelf: 'center',
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 72,
  },

  splitMobile: {
    paddingHorizontal: 20,
    flexDirection: 'column',
    gap: 30,
  },

  proposal: {
    flex: 1,
    minWidth: 0,
  },

  proposalMobile: {
    flex: 0,
    width: '100%',
    alignSelf: 'stretch',
  },

  sectionEyebrow: {
    color: BLUE,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.15,
    marginBottom: 12,
  },

  sectionTitle: {
    color: INK,
    fontSize: 32,
    lineHeight: 39,
    fontWeight: '700',
    letterSpacing: -0.6,
  },

  sectionTitleMobile: {
    fontSize: 26,
    lineHeight: 33,
  },

  lead: {
    width: '100%',
    color: TEXT,
    fontSize: 15,
    lineHeight: 25,
    marginTop: 17,
    maxWidth: 580,
  },

  steps: {
    flex: 1,
    minWidth: 0,
  },

  stepsMobile: {
    flex: 0,
    width: '100%',
    alignSelf: 'stretch',
  },

  step: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 17,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: LINE,
  },

  stepNumber: {
    color: '#86A8C1',
    fontSize: 12,
    fontWeight: '700',
    paddingTop: 3,
    width: 26,
  },

  stepContent: {
    flex: 1,
    minWidth: 0,
  },

  stepTitle: {
    color: INK,
    fontSize: 17,
    lineHeight: 23,
    fontWeight: '700',
  },

  stepText: {
    color: TEXT,
    fontSize: 14,
    lineHeight: 22,
    marginTop: 5,
    flexShrink: 1,
    width: '100%',
  },

  // Material complementar

  materialSection: {
    backgroundColor: '#EEF5FB',
    paddingVertical: 58,
  },

  materialSectionMobile: {
    paddingVertical: 40,
  },

  materialInner: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 24,
  },

  materialInnerMobile: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 16,
  },

  materialIcon: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },

  materialContent: {
    flex: 1,
    minWidth: 0,
    width: '100%',
    alignItems: 'flex-start',
  },

  materialTitle: {
    width: '100%',
    color: INK,
    fontSize: 25,
    lineHeight: 32,
    fontWeight: '700',
    letterSpacing: -0.4,
    maxWidth: 650,
  },

  materialText: {
    width: '100%',
    color: TEXT,
    fontSize: 14,
    lineHeight: 23,
    marginTop: 9,
    maxWidth: 680,
  },

  materialButton: {
    marginTop: 20,
  },

  // Pesquisa e extensão

  research: {
    backgroundColor: WHITE,
    paddingVertical: 70,
  },

  researchMobile: {
    paddingVertical: 44,
  },

  researchTitle: {
    width: '100%',
    color: INK,
    fontSize: 29,
    lineHeight: 36,
    fontWeight: '700',
    letterSpacing: -0.4,
    maxWidth: 720,
  },

  researchDescription: {
    width: '100%',
    color: TEXT,
    fontSize: 14,
    lineHeight: 23,
    marginTop: 12,
    maxWidth: 760,
  },
});