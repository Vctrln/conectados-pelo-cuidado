import { PropsWithChildren } from 'react';
import { usePathname } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Background } from '@/components/Background';
import { AppHeader } from '@/components/AppHeader';
import { Footer } from '@/components/Footer';

export function Page({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const activeSection = pathname === '/ajuda' ? 'ajuda' : 'inicio';

  return (
    <Background>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        <AppHeader activeSection={activeSection} />
        {children}
        <Footer />
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  scroll: {
    width: '100%',
    flexGrow: 1,
    paddingBottom: 20,
  },
});
