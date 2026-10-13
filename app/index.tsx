import { useLocalSearchParams } from 'expo-router';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import { useEffect, useRef, useState } from 'react';

import { AppHeader } from '@/components/AppHeader';
import { Background } from '@/components/Background';
import { Footer } from '@/components/Footer';
import {
  HomeSections,
  type SectionId,
} from '@/components/home/HomeSections';
import { SecurityModal } from '@/components/home/SecurityModal';
import type { SecurityCategory } from '@/data/home';
import { useResponsive } from '@/hooks/useResponsive';
import { homeStyles as styles } from '@/styles/pages/home.styles';

const sectionIds: SectionId[] = [
  'inicio',
  'guias',
  'situacoes',
  'seguranca',
  'oficina',
];

export default function HomeScreen() {
  const { isMobile } = useResponsive();
  const { width } = useWindowDimensions();

  const { section } =
    useLocalSearchParams<{ section?: string }>();

  const scrollRef = useRef<ScrollView>(null);

  const sectionPositions = useRef<
    Partial<Record<SectionId, number>>
  >({});

  const pendingSection = useRef<SectionId | null>(null);

  const [activeSection, setActiveSection] =
    useState<SectionId>('inicio');
  const [headerHeight, setHeaderHeight] = useState(isMobile ? 100 : 68);

  const [
    selectedSecurityCategory,
    setSelectedSecurityCategory,
  ] = useState<SecurityCategory | null>(null);

  const setSectionPosition = (
    id: SectionId,
    y: number,
  ) => {
    sectionPositions.current[id] = y;

    if (
      pendingSection.current === id &&
      scrollRef.current
    ) {
      const targetY = Math.max(y - headerHeight - 8, 0);

      pendingSection.current = null;

      requestAnimationFrame(() => {
        scrollRef.current?.scrollTo({
          y: targetY,
          animated: true,
        });
      });
    }
  };

  const scrollToSection = (id: SectionId) => {
    const position = sectionPositions.current[id];

    if (
      position === undefined ||
      !scrollRef.current
    ) {
      pendingSection.current = id;
      return;
    }

    scrollRef.current.scrollTo({
      y: Math.max(position - headerHeight - 8, 0),
      animated: true,
    });
  };

  const handleScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const marker = offsetY + headerHeight + 20;

    let current: SectionId = 'inicio';

    for (const id of sectionIds) {
      const position = sectionPositions.current[id];

      if (
        position !== undefined &&
        position <= marker
      ) {
        current = id;
      }
    }

    const { layoutMeasurement, contentSize } = event.nativeEvent;
    if (offsetY + layoutMeasurement.height >= contentSize.height - 24) {
      current = 'oficina';
    }

    if (current !== activeSection) {
      setActiveSection(current);
    }
  };

  useEffect(() => {
    if (!section) return;

    const requestedSection =
      sectionIds.includes(section as SectionId)
        ? (section as SectionId)
        : null;

    if (!requestedSection) return;

    pendingSection.current = requestedSection;

    requestAnimationFrame(() => {
      scrollToSection(requestedSection);
    });
  }, [section, headerHeight]);

  return (
    <Background>
      <ScrollView
        ref={scrollRef}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={handleScroll}
        contentContainerStyle={styles.scrollContent}
      >
        <AppHeader
          activeSection={activeSection}
          onSectionPress={scrollToSection}
          onHeightChange={setHeaderHeight}
        />

        <HomeSections
          isMobile={isMobile}
          width={width}
          setSelectedSecurityCategory={
            setSelectedSecurityCategory
          }
          scrollToSection={scrollToSection}
          setSectionPosition={setSectionPosition}
        />

        <Footer
          compact
          onBackToTop={() => scrollToSection('inicio')}
        />
      </ScrollView>

      <SecurityModal
        category={selectedSecurityCategory}
        isMobile={isMobile}
        onClose={() => setSelectedSecurityCategory(null)}
      />
    </Background>
  );
}