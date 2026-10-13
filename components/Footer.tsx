import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import { useResponsive } from '@/hooks/useResponsive';
import { footerStyles as styles } from '@/styles/components/footer.styles';

type Props = {
  compact?: boolean;
  onBackToTop?: () => void;
};

export function Footer({ compact = false, onBackToTop }: Props) {
  const { isMobile } = useResponsive();

  return (
    <View style={[styles.footer, compact && styles.footerCompact]}>
      <View style={[styles.container, isMobile && styles.containerMobile]}>
        <View
          style={[
            styles.footerTop,
            compact && styles.footerTopCompact,
            isMobile && styles.footerTopMobile,
          ]}
        >
          <View style={styles.footerBrand}>
            <View style={styles.footerLogo}>
              <Ionicons name="shield-checkmark" size={17} color="#FFFFFF" />
            </View>

            <View>
              <Text style={styles.brandText}>Conectados pelo Cuidado</Text>
              <Text style={styles.brandSubtext}>Educação digital, informação e cuidado.</Text>
            </View>
          </View>

          {onBackToTop && (
            <Pressable
              onPress={onBackToTop}
              style={({ pressed }) => [
                styles.topButton,
                pressed && styles.topButtonPressed,
              ]}
            >
              <Ionicons name="arrow-up" size={16} color="#FFFFFF" />
              <Text style={styles.topButtonText}>Voltar ao topo</Text>
            </Pressable>
          )}
        </View>

        <View style={styles.footerDivider} />

        <View
          style={[
            styles.footerBottom,
            isMobile && styles.footerBottomMobile,
          ]}
        >
          <Text style={styles.footerNotice}>
            Conteúdo educativo. Em casos graves ou emergências, procure os canais oficiais e as autoridades responsáveis.
          </Text>

          <Text style={styles.footerCopyright}>
            © {new Date().getFullYear()} Conectados pelo Cuidado.
          </Text>
        </View>
      </View>
    </View>
  );
}
