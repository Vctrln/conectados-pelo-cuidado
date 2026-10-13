import { StyleSheet } from 'react-native';

const INK = '#173A55';
const MUTED = '#A8B1B7';
const LINE = 'rgba(255,255,255,0.14)';

export const footerStyles = StyleSheet.create({
  footer: {
    backgroundColor: INK,
    paddingVertical: 38,
    marginTop: 0,
  },
  footerCompact: { paddingVertical: 30 },
  container: {
    width: '100%',
    maxWidth: 1160,
    alignSelf: 'center',
    paddingHorizontal: 28,
  },
  containerMobile: {
    paddingHorizontal: 20,
  },
  footerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 24,
  },
  footerTopCompact: { minHeight: 42 },
  footerTopMobile: { flexDirection: 'column', alignItems: 'flex-start', gap: 18 },
  footerBrand: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  footerLogo: {
    width: 29,
    height: 29,
    borderRadius: 6,
    backgroundColor: '#356B9E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandText: { color: '#FFFFFF', fontSize: 14, fontWeight: '700' },
  brandSubtext: { color: MUTED, fontSize: 11, marginTop: 3 },
  topButton: {
    minHeight: 36,
    paddingHorizontal: 11,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: LINE,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  topButtonPressed: { opacity: 0.7 },
  topButtonText: { color: '#FFFFFF', fontSize: 11, fontWeight: '700' },
  footerDivider: { height: 1, backgroundColor: LINE, marginVertical: 21 },
  footerBottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 24 },
  footerBottomMobile: { flexDirection: 'column', alignItems: 'flex-start', gap: 10 },
  footerNotice: { color: MUTED, fontSize: 10, lineHeight: 16, flex: 1, maxWidth: 720 },
  footerCopyright: { color: '#7F8B93', fontSize: 10 },
});
