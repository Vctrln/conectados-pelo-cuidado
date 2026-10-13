import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  View,
  StyleSheet,
  type LayoutChangeEvent,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useResponsive } from '@/hooks/useResponsive';
import { headerStyles as styles } from '@/styles/components/header.styles';

export type HomeSection =
  | 'inicio'
  | 'guias'
  | 'situacoes'
  | 'seguranca'
  | 'oficina'
  | 'ajuda';

const links: { id: HomeSection; label: string }[] = [
  { id: 'guias', label: 'Guias' },
  { id: 'situacoes', label: 'Situações' },
  { id: 'seguranca', label: 'Segurança' },
  { id: 'oficina', label: 'Oficina' },
  { id: 'ajuda', label: 'Ajuda' },
];

type Props = {
  activeSection?: HomeSection;
  onSectionPress?: (section: Exclude<HomeSection, 'ajuda'>) => void;
  onHeightChange?: (height: number) => void;
};

export function AppHeader({
  activeSection = 'inicio',
  onSectionPress,
  onHeightChange,
}: Props) {
  const { isMobile } = useResponsive();
  const insets = useSafeAreaInsets();
  const [menuOpen, setMenuOpen] = useState(false);

  const goToSection = (section: HomeSection) => {
    setMenuOpen(false);
    if (section === 'ajuda') {
      router.push('/ajuda');
      return;
    }
    if (onSectionPress) {
      onSectionPress(section);
      return;
    }

    router.push({
      pathname: '/',
      params: { section },
    });
  };

  const handleHeaderLayout = (event: LayoutChangeEvent) => {
    onHeightChange?.(event.nativeEvent.layout.height);
  };



  return (
    <View
      onLayout={handleHeaderLayout}
      style={[
        styles.headerOuter,
        insets.top > 0 && { paddingTop: insets.top },
      ]}
    >
      <View
        style={StyleSheet.flatten([
          styles.container,
          isMobile && styles.containerMobile,
        ])}
      >
        <Pressable
          onPress={() => goToSection('inicio')}
          style={styles.brand}
          accessibilityRole="button"
          accessibilityLabel="Conectados pelo Cuidado, início"
        >
          <View style={styles.logoIcon}>
            <Ionicons name="shield-checkmark" size={19} color="#356B9E" />
          </View>

          <Text style={styles.brandName}>Conectados pelo Cuidado</Text>
        </Pressable>

        {isMobile ? (
          <View style={styles.mobileMenuWrap}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              accessibilityState={{ expanded: menuOpen }}
              onPress={() => setMenuOpen((open) => !open)}
              style={styles.menuToggle}
            >

              <Ionicons
                name={menuOpen ? 'close' : 'menu'}
                size={22}
                color="#243447"
              />
              <Text style={styles.menuToggleText}>Seções</Text>

            </Pressable>

            {menuOpen && (
              <View style={styles.mobileMenuPanel}>
                {links.map((item) => {
                  const active = activeSection === item.id;
                  return (
                    <Pressable
                      key={item.id}
                      onPress={() => goToSection(item.id)}
                      accessibilityRole="button"
                      accessibilityState={{ selected: active }}
                      style={[styles.mobileMenuItem, active && styles.mobileMenuItemActive]}
                    >
                      <Text style={[styles.mobileMenuItemText, active && styles.activeLinkText]}>
                        {item.label}
                      </Text>
                      {active && <View style={styles.mobileMenuIndicator} />}
                    </Pressable>
                  );
                })}
              </View>
            )}
          </View>
        ) : (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.navScroll}
            contentContainerStyle={styles.nav}
          >
            {links.map((item) => {
              const active = activeSection === item.id;
              return (
                <Pressable
                  key={item.id}
                  onPress={() => goToSection(item.id)}
                  accessibilityRole="button"
                  accessibilityState={{ selected: active }}
                  style={[styles.link, active && styles.activeLink]}
                >
                  <Text style={[styles.linkText, active && styles.activeLinkText]}>{item.label}</Text>
                </Pressable>
              );
            })}
          </ScrollView>
        )}
      </View>
    </View>
  );
}
