import { Ionicons } from '@expo/vector-icons';
import { Link, useLocalSearchParams } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';

import { Button } from '@/components/Button';
import { Page } from '@/components/Page';
import { getGuide } from '@/data/guides';
import { colors } from '@/styles/theme';
import { useResponsive } from '@/hooks/useResponsive';
import { guiaSlugStyles as styles } from '@/styles/pages/guiaSlug.styles';

const guideImagesBySlug: Record<string, string> = {
  'proteger-conta': 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1100&q=82',
  golpe: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1100&q=82',
  'privacidade-instagram': 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1100&q=82',
  'conversa-adolescente': 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1100&q=82',
  imagem: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=82',
  grooming: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1100&q=82',
};

export default function GuideArticle() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const guide = getGuide(slug);
  const { isMobile } = useResponsive();

  if (!guide) {
    return (
      <Page>
        <View style={styles.notFound}>
          <Ionicons
            name="document-text-outline"
            size={30}
            color={colors.blue}
          />

          <Text style={styles.notFoundTitle}>
            Não encontramos este guia.
          </Text>

          <Text style={styles.notFoundText}>
            Volte à lista de guias para encontrar outra orientação.
          </Text>

          <Button href="/guias" label="Ver todos os guias" />
        </View>
      </Page>
    );
  }

  return (
    <Page>
      <View style={styles.page}>
        {/* Cabeçalho do artigo */}
        <View style={styles.articleHeader}>
          <View style={styles.container}>
            <Link href="/guias" asChild>
              <Pressable
                accessibilityRole="button"
                style={styles.back}
              >
                <Ionicons
                  name="arrow-back"
                  size={16}
                  color={colors.blue}
                />
                <Text style={styles.backText}>Todos os guias</Text>
              </Pressable>
            </Link>

            <View
              style={[
                styles.headerLayout,
                isMobile && styles.headerLayoutMobile,
              ]}
            >
              <View style={styles.headerCopy}>
                <View style={styles.meta}>
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>{guide.tag}</Text>
                  </View>
                </View>

                <Text
                  style={[
                    styles.title,
                    isMobile && styles.titleMobile,
                  ]}
                >
                  {guide.title}
                </Text>

                <Text style={styles.intro}>{guide.intro}</Text>
              </View>

              <Image
                source={{
                  uri:
                    guideImagesBySlug[guide.slug] ??
                    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=82',
                }}
                accessibilityLabel={`Imagem relacionada ao assunto: ${guide.title}`}
                style={[
                  styles.articleImage,
                  isMobile && styles.articleImageMobile,
                ]}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>

        {/* Conteúdo e orientação complementar */}
        <View style={styles.contentArea}>
          <View
            style={[
              styles.container,
              isMobile && styles.containerMobile,
              styles.layout,
              isMobile && styles.layoutMobile,
            ]}
          >
            <View style={styles.body}>
              {guide.sections.map((section, index) => (
                <View
                  key={section.title}
                  style={[
                    styles.section,
                    index > 0 && styles.sectionSeparated,
                  ]}
                >
                  <Text style={styles.sectionNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </Text>

                  <View style={styles.sectionContent}>
                    <Text style={styles.sectionTitle}>
                      {section.title}
                    </Text>

                    {'bullets' in section ? (
                      <View style={styles.bullets}>
                        {section.bullets.map((bullet) => (
                          <View key={bullet} style={styles.bulletRow}>
                            <Ionicons
                              name="checkmark"
                              size={17}
                              color={colors.blue}
                              style={styles.bullet}
                            />

                            <Text style={styles.bodyText}>{bullet}</Text>
                          </View>
                        ))}
                      </View>
                    ) : (
                      <Text style={styles.bodyText}>{section.text}</Text>
                    )}
                  </View>
                </View>
              ))}

              {/* Encaminhamento para ajuda */}
              <View style={styles.tip}>
                <View style={styles.tipHeading}>
                  <Ionicons
                    name="chatbubble-ellipses-outline"
                    size={20}
                    color={colors.blue}
                  />

                  <Text style={styles.tipTitle}>
                    Quando procurar apoio
                  </Text>
                </View>

                <Text style={styles.tipText}>
                  Em casos de ameaça, perseguição, exposição de imagem ou possível
                  exploração de criança ou adolescente, preserve os registros
                  quando for seguro e procure apoio de confiança ou um canal oficial.
                </Text>

              </View>
            </View>
          </View>
        </View>
      </View>
    </Page>
  );
}