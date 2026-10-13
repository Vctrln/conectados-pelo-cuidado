import { StyleSheet } from 'react-native';

const INK = '#173A55';
const MUTED = '#6B7884';
const BLUE = '#356B9E';
const LINE = '#DDE5E8';
const MAX = 1160;

export const headerStyles = StyleSheet.create({
  headerOuter: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.98)',
    borderBottomWidth: 1,
    borderBottomColor: LINE,
    zIndex: 100,
    elevation: 3,
    ...({ position: 'sticky', top: 0 } as any),
  },
  container: {
    width: '100%',
    maxWidth: MAX,
    alignSelf: 'center',
    minHeight: 68,
    paddingHorizontal: 28,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 22,
  },
  containerMobile: {
    minHeight: 64,
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    flexShrink: 0,
    maxWidth: '100%',
  },
  logoIcon: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#EAF3FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandName: {
    color: INK,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: -0.25,
  },
  navScroll: {
    flex: 1,
    minWidth: 0,
  },
  navScrollMobile: {
    width: '100%',
    flexBasis: '100%',
    flexGrow: 1,
  },
  mobileMenuWrap: {
    position: 'relative',
    zIndex: 20,
    alignItems: 'flex-end',
    flexShrink: 0,
  },
  menuToggle: {
    minHeight: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    paddingHorizontal: 11,
    borderRadius: 10,
    backgroundColor: '#F0F6FB',
  },
  menuToggleText: {
    color: INK,
    fontSize: 13,
    fontWeight: '600',
  },
  mobileMenuPanel: {
    position: 'absolute',
    top: 48,
    right: 0,
    width: 190,
    paddingVertical: 6,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2EAF0',
    shadowColor: '#173A55',
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 7 },
    elevation: 8,
  },
  mobileMenuItem: {
    minHeight: 44,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mobileMenuItemActive: {
    backgroundColor: '#F0F6FB',
  },
  mobileMenuItemText: {
    color: MUTED,
    fontSize: 14,
    fontWeight: '500',
  },
  mobileMenuIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: BLUE,
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 2,
    flexGrow: 1,
    justifyContent: 'center',
  },
  navMobile: {
    flexGrow: 0,
    justifyContent: 'flex-start',
    paddingRight: 12,
  },
  link: {
    minHeight: 42,
    paddingHorizontal: 11,
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  linkText: {
    color: MUTED,
    fontSize: 12,
    fontWeight: '600',
  },
  activeLink: {
    borderBottomColor: BLUE,
  },
  activeLinkText: {
    color: INK,
    fontWeight: '700',
  },
});
