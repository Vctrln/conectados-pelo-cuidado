import { Ionicons } from '@expo/vector-icons';
import { Href, Link } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';

import { Page } from '@/components/Page';
import { guides } from '@/data/guides';
import { guideImages } from '@/data/home';
import { useResponsive } from '@/hooks/useResponsive';
import { guiasStyles as styles } from '@/styles/pages/guias.styles';

export default function Guides() {
  const { isMobile } = useResponsive();

  const featuredGuide = guides[0];
  const remainingGuides = guides.slice(1);

  return (
    <Page>
      <View style={styles.page}>
        {/* Introdução */}
        <View style={styles.hero}>
          <View
            style={[
              styles.container,
              isMobile && styles.containerMobile,
            ]}
          >
            <Link href="/" asChild>
              <Pressable style={styles.backLink} accessibilityRole="button">
                <Ionicons name="arrow-back" size={16} color="#356B9E" />
                <Text style={styles.backLinkText}>Início</Text>
              </Pressable>
            </Link>

            <Text style={styles.eyebrow}>GUIAS PRÁTICOS</Text>

            <Text
              style={[
                styles.title,
                isMobile && styles.titleMobile,
              ]}
            >
              Dúvidas sobre a vida digital?
            </Text>

            <Text style={styles.description}>
              Orientações para entender situações comuns na internet,
              reconhecer riscos e descobrir quais podem ser os próximos passos.
            </Text>
          </View>
        </View>

        {/* Guia em destaque */}
        {featuredGuide && (
          <View style={styles.featuredSection}>
            <View
              style={[
                styles.container,
                isMobile && styles.containerMobile,
              ]}
            >
              <Text style={styles.sectionEyebrow}>PARA COMEÇAR</Text>

              <Link
                href={`/guia/${featuredGuide.slug}` as Href}
                asChild
              >
                <Pressable
                  accessibilityRole="button"
                  style={({ pressed }) => [
                    styles.featured,
                    isMobile && styles.featuredMobile,
                    pressed && styles.pressed,
                  ]}
                >
                  <Image
                    source={{ uri: guideImages[0] }}
                    style={[
                      styles.featuredImage,
                      isMobile && styles.featuredImageMobile,
                    ]}
                    resizeMode="cover"
                    accessibilityLabel="Pessoa utilizando um dispositivo para consultar informações"
                  />

                  <View style={[styles.featuredContent, isMobile && styles.featuredContentMobile]}>
                    <Text style={styles.featuredTag}>
                      {featuredGuide.tag}
                    </Text>

                    <Text style={styles.featuredTitle}>
                      {featuredGuide.title}
                    </Text>

                    <Text style={styles.featuredDescription}>
                      {featuredGuide.intro}
                    </Text>

                    <View style={styles.readLink}>
                      <Text style={styles.readLinkText}>
                        Ler este guia
                      </Text>
                      <Ionicons
                        name="arrow-forward"
                        size={17}
                        color="#356B9E"
                      />
                    </View>
                  </View>

                </Pressable>
              </Link>
            </View>
          </View>
        )}

        {/* Todos os guias */}
        {remainingGuides.length > 0 && (
          <View style={styles.guidesSection}>
            <View
              style={[
                styles.container,
                isMobile && styles.containerMobile,
              ]}
            >
              <View style={styles.sectionHeader}>
                <View style={styles.sectionHeading}>
                  <Text style={styles.sectionEyebrow}>
                    CONSULTAR OUTROS ASSUNTOS
                  </Text>

                  <Text
                    style={[
                      styles.sectionTitle,
                      isMobile && styles.sectionTitleMobile,
                    ]}
                  >
                    Encontre uma orientação
                  </Text>
                </View>

                <Text style={styles.count}>
                  {guides.length} {guides.length === 1 ? 'guia' : 'guias'}
                </Text>
              </View>

              <View style={styles.guideList}>
                {remainingGuides.map((guide, index) => (
                  <Link
                    key={guide.slug}
                    href={`/guia/${guide.slug}` as Href}
                    asChild
                  >
                    <Pressable
                      accessibilityRole="button"
                      style={({ pressed }) => [
                        styles.guide,
                        pressed && styles.pressed,
                      ]}
                    >
                      <Image
                        source={{ uri: guideImages[(index + 1) % guideImages.length] }}
                        style={styles.guideThumbnail}
                        resizeMode="cover"
                        accessibilityLabel={`Imagem relacionada ao guia: ${guide.title}`}
                      />

                      <View style={styles.guideContent}>
                        <Text style={styles.guideTag}>
                          {guide.tag}
                        </Text>

                        <Text style={styles.guideTitle}>
                          {guide.title}
                        </Text>

                        <Text
                          style={styles.guideDescription}
                          numberOfLines={3}
                        >
                          {guide.intro}
                        </Text>
                      </View>

                      <Ionicons
                        name="arrow-forward"
                        size={18}
                        color="#356B9E"
                        style={styles.guideArrow}
                      />
                    </Pressable>
                  </Link>
                ))}
              </View>
            </View>
          </View>
        )}

      </View>
    </Page>
  );
}