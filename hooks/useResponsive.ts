import { useWindowDimensions } from 'react-native';

export function useResponsive() {
  const { width } = useWindowDimensions();
  return {
    width,
    isMobile: width < 760,
    isTablet: width >= 760 && width < 1040,
  };
}
