import { StyleSheet } from 'react-native';
import { colors, maxWidth } from '../theme';

export const ajudaStyles = StyleSheet.create({
  hero: {
    width: '100%',
    backgroundColor: '#EEF5FB',
    paddingTop: 38,
    paddingBottom: 42,
  },

  heroInner: {
    width: '100%',
    maxWidth,
    alignSelf: 'center',
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 38,
  },

  heroInnerMobile: {
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
    width: 330,
    height: 225,
    borderRadius: 14,
    flexShrink: 0,
    backgroundColor: '#EAF3FA',
  },

  heroImageMobile: {
    width: '100%',
    height: 185,
    borderRadius: 12,
  },

  content: {
    width: '100%',
    maxWidth,
    alignSelf: 'center',
    paddingHorizontal: 32,
    paddingTop: 30,
    paddingBottom: 36,
  },

  contentMobile: {
    width: '100%',
    paddingHorizontal: 18,
    paddingTop: 24,
    paddingBottom: 28,
  },

  notice: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 13,
    padding: 18,
    borderRadius: 14,
    backgroundColor: '#FFF8E5',
  },

  noticeContent: {
    flex: 1,
    minWidth: 0,
  },

  noticeTitle: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: '700',
  },

  noticeText: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 21,
    marginTop: 5,
  },

  channels: {
    width: '100%',
    backgroundColor: '#F5F8FA',
    paddingVertical: 54,
  },

  channelInner: {
    width: '100%',
    maxWidth,
    alignSelf: 'center',
    paddingHorizontal: 32,
  },

  channelInnerMobile: {
    width: '100%',
    paddingHorizontal: 18,
  },

  channelList: {
    width: '100%',
    maxWidth: 800,
    marginTop: 24,
  },
});
