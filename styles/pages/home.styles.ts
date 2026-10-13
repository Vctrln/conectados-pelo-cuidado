import { StyleSheet } from 'react-native';

const colors = {
  ink: '#173A55',
  inkSoft: '#38586B',
  text: '#425A68',
  muted: '#71828C',

  blue: '#356B9E',
  blueSoft: '#EAF3FA',
  bluePale: '#F5F9FC',

  green: '#477D70',
  greenSoft: '#EAF3F0',

  coral: '#B86D50',
  coralSoft: '#F7ECE6',

  cream: '#FBF8F2',
  creamDark: '#F2ECE2',

  white: '#FFFFFF',
  line: '#DDE5E8',
  lineSoft: '#EAEFF1',
};

const MAX = 1160;

export const homeStyles = StyleSheet.create({
  scrollContent: {
    backgroundColor: colors.white,
  },

  container: {
    width: '100%',
    maxWidth: MAX,
    alignSelf: 'center',
    paddingHorizontal: 28,
  },

  containerMobile: {
    paddingHorizontal: 20,
  },

  buttonPressed: {
    opacity: 0.78,
  },

  cardPressed: {
    transform: [{ scale: 0.985 }],
  },

  /*
   * HERO
   */

  heroSection: {
    backgroundColor: colors.blueSoft,
    paddingTop: 56,
    paddingBottom: 72,
  },

  heroSectionMobile: {
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: colors.ink,
  },

  hero: {
    minHeight: 560,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 54,
  },

  heroMobile: {
    height: 530,
    minHeight: 530,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    gap: 0,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 24,
    position: 'relative',
    overflow: 'hidden',
  },

  heroContent: {
    flex: 0.95,
    maxWidth: 530,
    justifyContent: 'center',
  },

  heroContentMobile: {
    maxWidth: undefined,
    flex: 0,
    zIndex: 2,
    paddingBottom: 28,
  },

  heroTitleOnImage: {
    color: colors.white,
    fontSize: 34,
    lineHeight: 40,
    maxWidth: 420,
  },

  heroDescriptionOnImage: {
    color: 'rgba(255,255,255,0.92)',
    fontSize: 15,
    lineHeight: 23,
    marginTop: 14,
  },

  heroScrollCue: {
    alignSelf: 'center',
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.18)',
    marginTop: 20,
  },

  heroTitle: {
    color: colors.ink,
    fontSize: 48,
    lineHeight: 55,
    fontWeight: '700',
    letterSpacing: -1.6,
    maxWidth: 520,
  },

  heroTitleMobile: {
    fontSize: 36,
    lineHeight: 42,
    letterSpacing: -0.8,
  },

  heroDescription: {
    color: colors.inkSoft,
    fontSize: 17,
    lineHeight: 27,
    marginTop: 20,
    maxWidth: 485,
  },

  heroActions: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 32,
  },

  primaryButton: {
    minHeight: 48,
    paddingHorizontal: 19,
    borderRadius: 15,
    backgroundColor: colors.ink,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  primaryButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
  },

  secondaryButton: {
    minHeight: 48,
    paddingHorizontal: 16,
    borderRadius: 15,
    justifyContent: 'center',
  },

  secondaryButtonText: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: '600',
  },

  heroVisual: {
    flex: 1.05,
    minHeight: 440,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heroVisualMobile: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    minHeight: 0,
    zIndex: 0,
  },

  heroImageShape: {
    width: '100%',
    maxWidth: 510,
    height: 410,
    borderRadius: 24,
    overflow: 'hidden',
    position: 'relative',
  },

  heroImageShapeMobile: {
    height: '100%',
    width: '100%',
    maxWidth: undefined,
    borderRadius: 0,
  },

  heroImageShade: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(13, 37, 57, 0.48)',
  },

  heroImageOverlay: {
    ...StyleSheet.absoluteFill,
  },

  heroImage: {
    width: '100%',
    height: '100%',
  },

  heroDots: {
    position: 'absolute',
    bottom: 18,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },

  heroDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor:
      'rgba(255,255,255,0.65)',
  },

  heroDotActive: {
    width: 20,
    backgroundColor: colors.white,
  },

  /*
   * GENERAL SECTION
   */

  sectionHeading: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 32,
    marginBottom: 34,
  },

  sectionHeadingText: {
    flex: 1,
  },

  eyebrow: {
    color: colors.blue,
    fontSize: 11,
    lineHeight: 15,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 11,
  },

  sectionTitle: {
    color: colors.ink,
    fontSize: 32,
    lineHeight: 39,
    fontWeight: '700',
    letterSpacing: -0.8,
  },

  sectionTitleMobile: {
    fontSize: 27,
    lineHeight: 33,
    letterSpacing: -0.5,
  },

  /*
   * GUIAS
   */

  guidesSection: {
    backgroundColor: colors.white,
    paddingTop: 76,
    paddingBottom: 82,
  },

  guideRail: {
    gap: 17,
  },

  guideCard: {
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: colors.white,
  },

  guideImageWrap: {
    height: 180,
    position: 'relative',
    overflow: 'hidden',
  },

  guideImage: {
    width: '100%',
    height: '100%',
  },

  guideIcon: {
    position: 'absolute',
    left: 17,
    bottom: 16,
    width: 42,
    height: 42,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  guideBody: {
    minHeight: 158,
    paddingHorizontal: 18,
    paddingTop: 17,
    paddingBottom: 18,
    position: 'relative',
  },

  guideTitle: {
    color: colors.ink,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
    maxWidth: '90%',
  },

  guideIntro: {
    color: colors.text,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 8,
    maxWidth: '92%',
  },

  guideArrow: {
    position: 'absolute',
    right: 18,
    bottom: 20,
  },

  guideRailFooter: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
  },

  guideRailLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.lineSoft,
  },

  guideRailCount: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '600',
  },

  /*
   * SITUAÇÕES
   */

  situationsSection: {
    backgroundColor: colors.cream,
    paddingTop: 86,
    paddingBottom: 104,
  },

  situationHeading: {
    marginBottom: 34,
    maxWidth: 650,
  },

  situationRail: {
    gap: 18,
    paddingBottom: 5,
  },

  situationCard: {
    minHeight: 286,
    borderRadius: 18,
    backgroundColor: colors.white,
    overflow: 'hidden',
  },

  situationCardExpanded: {
    minHeight: 455,
  },

  situationImage: {
    width: '100%',
    height: 165,
  },

  situationImageExpanded: {
    height: 195,
  },

  situationCardContent: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 18,
  },

  situationCardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },

  situationCardTitle: {
    flex: 1,
    color: colors.ink,
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '700',
  },

  situationIcon: {
    width: 36,
    height: 36,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },

  situationCardDescription: {
    color: colors.muted,
    fontSize: 12.5,
    lineHeight: 19,
    marginTop: 9,
    width: '100%',
    maxWidth: '100%',
    flexShrink: 1,
  },

  situationCardArrow: {
    position: 'absolute',
    right: 18,
    bottom: 20,
  },

  situationExpandedContent: {
    marginTop: 18,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.lineSoft,
  },

  situationExpandedTitle: {
    color: colors.ink,
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '700',
  },

  situationExpandedSummary: {
    color: colors.text,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 5,
  },

  situationActions: {
    marginTop: 13,
    gap: 8,
  },

  situationAction: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  situationActionDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 6,
    marginRight: 8,
  },

  situationActionText: {
    flex: 1,
    color: colors.text,
    fontSize: 11.5,
    lineHeight: 17,
  },

  situationGuideButton: {
    minHeight: 43,
    marginHorizontal: 20,
    marginBottom: 19,
    borderRadius: 14,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  situationGuideButtonText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '700',
  },

  /*
   * SEGURANÇA
   */

  securitySection: {
    backgroundColor: colors.white,
    paddingTop: 82,
    paddingBottom: 86,
  },

  securityLayout: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 64,
  },

  securityLayoutMobile: {
    flexDirection: 'column',
    gap: 26,
  },

  securityIntro: {
    flex: 0.8,
    maxWidth: 350,
    paddingTop: 5,
  },

  securityIntroMobile: {
    width: '100%',
    maxWidth: undefined,
  },

  securityDescription: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 24,
    marginTop: 17,
    maxWidth: 330,
  },

  securityList: {
    flex: 1.2,
    width: '100%',
    maxWidth: 670,
  },

  securityMoreLink: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 22,
    paddingVertical: 8,
  },

  securityMoreLinkText: {
    color: colors.blue,
    fontSize: 13,
    fontWeight: '700',
  },

  securityRow: {
    minHeight: 77,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.lineSoft,
    gap: 13,
  },

  securityRowPressed: {
    opacity: 0.65,
  },

  securityRowIconWrap: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },

  securityRowText: {
    flex: 1,
  },

  securityRowTitle: {
    color: colors.ink,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '700',
  },

  securityRowSubtitle: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 2,
  },

  /*
   * OFICINA
   */

  workshopSection: {
    backgroundColor: colors.blueSoft,
    paddingTop: 82,
    paddingBottom: 82,
  },

  workshop: {
    minHeight: 420,
    borderRadius: 22,
    backgroundColor: colors.white,
    overflow: 'hidden',
    flexDirection: 'row',
  },

  workshopMobile: {
    minHeight: 0,
    flexDirection: 'column',
  },

  workshopImageWrap: {
    width: '52%',
    minHeight: 440,
    overflow: 'hidden',
  },

  workshopImageWrapMobile: {
    width: '100%',
    minHeight: 240,
    height: 240,
  },

  workshopImage: {
    width: '100%',
    height: '100%',
  },

  workshopContent: {
    flex: 1,
    minWidth: 0,
    paddingHorizontal: 40,
    paddingVertical: 42,
    justifyContent: 'center',
  },

  workshopContentMobile: {
    paddingHorizontal: 24,
    paddingVertical: 30,
  },

  workshopHeading: {
    color: colors.ink,
    fontSize: 32,
    lineHeight: 38,
    fontWeight: '700',
    letterSpacing: -0.7,
    maxWidth: 390,
  },

  workshopHeadingMobile: {
    fontSize: 27,
    lineHeight: 33,
  },

  workshopDescription: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 24,
    maxWidth: 410,
    marginTop: 17,
  },

  workshopButton: {
    alignSelf: 'flex-start',
    minHeight: 45,
    paddingHorizontal: 16,
    borderRadius: 14,
    backgroundColor: colors.cream,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  workshopButtonText: {
    color: colors.ink,
    fontSize: 13,
    fontWeight: '700',
  },

  /*
   * AJUDA
   */

  helpSection: {
    backgroundColor: colors.white,
    paddingTop: 60,
    paddingBottom: 72,
  },

  help: {
    borderRadius: 20,
    backgroundColor: colors.greenSoft,
    paddingHorizontal: 30,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 24,
  },

  helpMobile: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: 22,
    paddingVertical: 24,
    gap: 20,
  },

  helpTitle: {
    maxWidth: 540,
    flex: 1,
  },

  helpHeading: {
    color: colors.ink,
    fontSize: 26,
    lineHeight: 32,
    fontWeight: '700',
    letterSpacing: -0.5,
  },

  helpDescription: {
    color: colors.text,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 6,
  },

  helpAction: {
    minHeight: 44,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: colors.ink,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    flexShrink: 0,
  },

  helpActionText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '600',
  },

  modalBackdrop: {
    flex: 1,
    backgroundColor:
      'rgba(20, 45, 60, 0.38)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  modal: {
    width: '100%',
    maxWidth: 520,
    borderRadius: 28,
    backgroundColor: colors.white,
    padding: 28,
  },

  modalMobile: {
    maxWidth: undefined,
    padding: 22,
    borderRadius: 24,
  },

  modalHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 20,
  },

  modalEyebrow: {
    color: colors.blue,
    fontSize: 9.5,
    lineHeight: 13,
    fontWeight: '800',
    letterSpacing: 1.4,
    marginBottom: 5,
  },

  modalTitle: {
    color: colors.ink,
    fontSize: 25,
    lineHeight: 31,
    fontWeight: '700',
  },

  modalClose: {
    width: 38,
    height: 38,
    borderRadius: 14,
    backgroundColor: colors.bluePale,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalDescription: {
    color: colors.text,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 12,
    maxWidth: 430,
  },

  modalLinks: {
    marginTop: 22,
  },

  modalLink: {
    minHeight: 51,
    borderBottomWidth: 1,
    borderBottomColor: colors.lineSoft,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  modalLinkPressed: {
    opacity: 0.55,
  },

  modalLinkText: {
    color: colors.ink,
    fontSize: 13,
    fontWeight: '600',
  },

  modalDone: {
    alignSelf: 'flex-start',
    minHeight: 42,
    paddingHorizontal: 17,
    borderRadius: 13,
    backgroundColor: colors.ink,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22,
  },

  modalDoneText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '700',
  },
});