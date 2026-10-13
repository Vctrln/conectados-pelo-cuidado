import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  Animated,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';

import { guides } from '@/data/guides';
import {
  guideColors,
  guideImages,
  securityCategories,
  situations,
} from '@/data/home';
import { homeStyles as styles } from '@/styles/pages/home.styles';

export type SectionId =
  | 'inicio'
  | 'guias'
  | 'situacoes'
  | 'seguranca'
  | 'oficina';

type HomeSectionsProps = {
  isMobile: boolean;
  width: number;

  setSelectedSecurityCategory: (
    value: (typeof securityCategories)[number],
  ) => void;

  scrollToSection: (id: SectionId) => void;

  setSectionPosition: (
    id: SectionId,
    y: number,
  ) => void;
};

type SectionFrameProps = {
  id: SectionId;
  children: ReactNode;
  onLayout: (id: SectionId, y: number) => void;
  style?: object;
};

function SectionFrame({
  id,
  children,
  onLayout,
  style,
}: SectionFrameProps) {
  return (
    <View
      nativeID={id}
      onLayout={(event) =>
        onLayout(id, event.nativeEvent.layout.y)
      }
      style={style}
    >
      {children}
    </View>
  );
}

const heroPhotos = [
  'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=84',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=84',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=84',
  'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=84',
];

function HeroPhotoCarousel({ isMobile }: { isMobile: boolean }) {
  const [photoIndices, setPhotoIndices] = useState<[number, number]>([0, 0]);

  const photoIndicesRef = useRef<[number, number]>([0, 0]);
  const activeLayerRef = useRef<0 | 1>(0);
  const pendingLayerRef = useRef<0 | 1 | null>(null);
  const transitioningRef = useRef(false);
  const mountedRef = useRef(false);

  const opacityA = useRef(new Animated.Value(1)).current;
  const opacityB = useRef(new Animated.Value(0)).current;

  const animationRef = useRef<Animated.CompositeAnimation | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    let cancelled = false;
    mountedRef.current = true;

    async function initializeCarousel() {
      await Promise.all(
        heroPhotos.map((uri) => Image.prefetch(uri).catch(() => false)),
      );

      if (cancelled) return;

      intervalRef.current = setInterval(() => {
        if (cancelled || transitioningRef.current) return;

        const outgoingLayer = activeLayerRef.current;
        const incomingLayer = (1 - outgoingLayer) as 0 | 1;

        const currentPhoto = photoIndicesRef.current[outgoingLayer];
        const nextPhoto = (currentPhoto + 1) % heroPhotos.length;

        const nextIndices: [number, number] = [
          photoIndicesRef.current[0],
          photoIndicesRef.current[1],
        ];

        nextIndices[incomingLayer] = nextPhoto;

        transitioningRef.current = true;
        pendingLayerRef.current = incomingLayer;

        photoIndicesRef.current = nextIndices;
        setPhotoIndices(nextIndices);
      }, 5600);
    }

    initializeCarousel();

    return () => {
      cancelled = true;
      mountedRef.current = false;

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }

      animationRef.current?.stop();
      animationRef.current = null;

      pendingLayerRef.current = null;
      transitioningRef.current = false;
    };
  }, []);

  function handleLayerLoad(layer: 0 | 1) {
    if (
      !mountedRef.current ||
      pendingLayerRef.current !== layer ||
      !transitioningRef.current
    ) {
      return;
    }

    const outgoingLayer = activeLayerRef.current;

    if (outgoingLayer === layer) return;

    pendingLayerRef.current = null;

    const incomingOpacity = layer === 0 ? opacityA : opacityB;
    const outgoingOpacity = outgoingLayer === 0 ? opacityA : opacityB;

    animationRef.current?.stop();

    incomingOpacity.setValue(0);

    animationRef.current = Animated.parallel([
      Animated.timing(incomingOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(outgoingOpacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]);

    animationRef.current.start(({ finished }) => {
      if (!mountedRef.current) return;

      if (finished) {
        activeLayerRef.current = layer;
      }

      animationRef.current = null;
      transitioningRef.current = false;
    });
  }

  function handleLayerError(layer: 0 | 1) {
    if (pendingLayerRef.current !== layer) return;
    pendingLayerRef.current = null;
    transitioningRef.current = false;
  }

  return (
    <View
      style={[
        styles.heroImageShape,
        isMobile && styles.heroImageShapeMobile,
      ]}
    >
      <Animated.View
        pointerEvents="none"
        style={[
          styles.heroImageOverlay,
          { opacity: opacityA },
        ]}
      >
        <Image
          source={{ uri: heroPhotos[photoIndices[0]] }}
          accessibilityLabel="Fotografia de pessoas e tecnologia no cotidiano"
          style={styles.heroImage}
          resizeMode="cover"
          fadeDuration={0}
          onLoad={() => handleLayerLoad(0)}
          onError={() => handleLayerError(0)}
        />
      </Animated.View>

      <Animated.View
        pointerEvents="none"
        style={[
          styles.heroImageOverlay,
          { opacity: opacityB },
        ]}
      >
        <Image
          source={{ uri: heroPhotos[photoIndices[1]] }}
          accessibilityLabel="Outra cena cotidiana relacionada à vida digital"
          style={styles.heroImage}
          resizeMode="cover"
          fadeDuration={0}
          onLoad={() => handleLayerLoad(1)}
          onError={() => handleLayerError(1)}
        />
      </Animated.View>
    </View>
  );
}

/*
 * HERO
 */

function HeroSection({
  isMobile,
  scrollToSection,
  setSectionPosition,
}: Pick<
  HomeSectionsProps,
  'isMobile' | 'scrollToSection' | 'setSectionPosition'
>) {
  return (
    <SectionFrame
      id="inicio"
      onLayout={setSectionPosition}
      style={[styles.heroSection, isMobile && styles.heroSectionMobile]}
    >
      <View style={[styles.container, isMobile && { paddingHorizontal: 0 }]}>
        <View
          style={[
            styles.hero,
            isMobile && styles.heroMobile,
          ]}
        >
          <View
            style={[
              styles.heroContent,
              isMobile && styles.heroContentMobile,
            ]}
          >
            <Text style={[styles.heroTitle, isMobile && styles.heroTitleMobile, isMobile && styles.heroTitleOnImage]}>
              Segurança digital para a vida real.
            </Text>

            <Text style={[styles.heroDescription, isMobile && styles.heroDescriptionOnImage]}>
              Guias simples para entender situações, proteger suas contas e saber o que fazer quando alguma coisa acontece.
            </Text>

            {!isMobile && (
              <View style={styles.heroActions}>
                <Pressable
                  onPress={() => scrollToSection('guias')}
                  style={({ pressed }) => [styles.primaryButton, pressed && styles.buttonPressed]}
                >
                  <Text style={styles.primaryButtonText}>Explorar os guias</Text>
                  <Ionicons name="arrow-forward" size={17} color="#FFFFFF" />
                </Pressable>

                <Pressable
                  onPress={() => scrollToSection('situacoes')}
                  style={({ pressed }) => [styles.secondaryButton, pressed && styles.buttonPressed]}
                >
                  <Text style={styles.secondaryButtonText}>Aconteceu alguma coisa?</Text>
                </Pressable>
              </View>
            )}

            {isMobile && (
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Rolar para ver mais conteúdo"
                onPress={() => scrollToSection('guias')}
                style={styles.heroScrollCue}
              >
                <Ionicons name="arrow-down" size={23} color="#FFFFFF" />
              </Pressable>
            )}
          </View>

          <View
            pointerEvents="none"
            style={[styles.heroVisual, isMobile && styles.heroVisualMobile]}
          >
            <HeroPhotoCarousel isMobile={isMobile} />
            {isMobile && <View style={styles.heroImageShade} />}
          </View>
        </View>
      </View>
    </SectionFrame>
  );
}

/*
 * GUIAS
 */

function GuidesSection({
  isMobile,
  width,
  setSectionPosition,
}: Pick<
  HomeSectionsProps,
  'isMobile' | 'width' | 'setSectionPosition'
>) {
  const quickGuides = useMemo(
    () =>
      guides.map((guide, index) => ({
        ...guide,
        image: guideImages[index % guideImages.length],
        color: guideColors[index % guideColors.length],
      })),
    [],
  );

  const guideCardWidth = isMobile
    ? Math.min(width * 0.82, 360)
    : 325;

  return (
    <SectionFrame
      id="guias"
      onLayout={setSectionPosition}
      style={styles.guidesSection}
    >
      <View style={[styles.container, isMobile && styles.containerMobile]}>
        <View style={styles.sectionHeading}>
          <View style={styles.sectionHeadingText}>
            <Text style={styles.eyebrow}>GUIAS</Text>

            <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>
              Quer entender alguma coisa?
            </Text>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[
            styles.guideRail,
            {
              paddingRight: isMobile ? 24 : 32,
            },
          ]}
          decelerationRate="fast"
        >
          {quickGuides.map((guide) => (
            <Pressable
              key={guide.slug}
              onPress={() => router.push(`/guia/${guide.slug}`)}
              style={({ pressed }) => [
                styles.guideCard,
                { width: guideCardWidth },
                pressed && styles.cardPressed,
              ]}
            >
              <View style={styles.guideImageWrap}>
                <Image
                  source={{ uri: guide.image }}
                  style={styles.guideImage}
                  resizeMode="cover"
                />

              </View>

              <View style={styles.guideBody}>
                <Text
                  style={styles.guideTitle}
                  numberOfLines={2}
                >
                  {guide.title}
                </Text>

                <Text
                  style={styles.guideIntro}
                  numberOfLines={2}
                >
                  {guide.intro}
                </Text>

              </View>
            </Pressable>
          ))}
        </ScrollView>

        <View style={styles.guideRailFooter}>
          <View style={styles.guideRailLine} />

          <Text style={styles.guideRailCount}>
            {quickGuides.length} orientações
          </Text>
        </View>
      </View>
    </SectionFrame>
  );
}

const situationImageFallback =
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=82';

function SituationPhoto({
  uri,
  label,
  style,
}: {
  uri: string;
  label: string;
  style: object;
}) {
  const [sourceUri, setSourceUri] = useState(uri);
  const [retried, setRetried] = useState(false);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <View style={[style, { backgroundColor: '#E7F0EB', alignItems: 'center', justifyContent: 'center' }]}>
        <Ionicons name="shield-checkmark-outline" size={30} color="#4B7B70" />
      </View>
    );
  }

  return (
    <Image
      source={{ uri: sourceUri }}
      accessibilityLabel={label}
      style={style}
      resizeMode="cover"
      onError={() => {
        if (!retried) {
          setRetried(true);
          setSourceUri(situationImageFallback);
        } else {
          setFailed(true);
        }
      }}
    />
  );
}

/*
 * SITUAÇÕES
 *
 * Os cards têm tamanho fixo.
 * Não há estado de expansão ou minimização.
 * Cada card abre diretamente o guia correspondente.
 */

function SituationsSection({
  isMobile,
  width,
  setSectionPosition,
}: Pick<
  HomeSectionsProps,
  'isMobile' | 'width' | 'setSectionPosition'
>) {
  const situationCardWidth = isMobile
    ? Math.min(width * 0.78, 340)
    : 325;

  return (
    <SectionFrame
      id="situacoes"
      onLayout={setSectionPosition}
      style={styles.situationsSection}
    >
      <View style={[styles.container, isMobile && styles.containerMobile]}>
        <View style={styles.situationHeading}>
          <Text style={styles.eyebrow}>
            ACONTECEU ALGUMA COISA?
          </Text>

          <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>
            Comece pelo que aconteceu.
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.situationRail}
          decelerationRate="fast"
        >
          {situations.map((situation, index) => (
            <Pressable
              key={`${situation.id}-${index}`}
              onPress={() => {
                if (situation.guideSlug) {
                  router.push(`/guia/${situation.guideSlug}`);
                  return;
                }
                router.push('/ajuda');
              }}
              accessibilityRole="button"
              accessibilityLabel={`Ver orientação: ${situation.label}`}
              style={({ pressed }) => [
                styles.situationCard,
                {
                  width: situationCardWidth,
                  alignSelf: 'flex-start',
                },
                pressed && styles.cardPressed,
              ]}
            >
              <SituationPhoto
                uri={situation.image}
                label={`Imagem relacionada a: ${situation.label}`}
                style={styles.situationImage}
              />

              <View style={styles.situationCardContent}>
                <View style={styles.situationCardTop}>
                  <Text style={styles.situationCardTitle}>
                    {situation.label}
                  </Text>

                  <Ionicons
                    name={situation.icon as any}
                    size={18}
                    color={situation.color}
                  />
                </View>

                <Text style={styles.situationCardDescription}>
                  {situation.description?.trim() || (situation.id === 'ameaca' ? 'Há pressão, ameaça ou tentativa de chantagem.' : 'Veja os primeiros passos para lidar com essa situação.')}
                </Text>

              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </SectionFrame>
  );
}

/*
 * SEGURANÇA
 */

function SecuritySection({
  isMobile,
  setSelectedSecurityCategory,
  setSectionPosition,
}: Pick<
  HomeSectionsProps,
  'isMobile' | 'setSelectedSecurityCategory' | 'setSectionPosition'
>) {
  return (
    <SectionFrame
      id="seguranca"
      onLayout={setSectionPosition}
      style={styles.securitySection}
    >
      <View style={[styles.container, isMobile && styles.containerMobile]}>
        <View style={[styles.securityLayout, isMobile && styles.securityLayoutMobile]}>
          <View style={[styles.securityIntro, isMobile && styles.securityIntroMobile]}>
            <Text style={styles.eyebrow}>SEGURANÇA</Text>

            <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>
              Deixe o básico em ordem.
            </Text>

            <Text style={styles.securityDescription}>
              Acesse diretamente as configurações e canais
              oficiais dos serviços que você usa.
            </Text>
          </View>

          <View style={styles.securityList}>
            {securityCategories.map((category) => (
              <Pressable
                key={category.id}
                onPress={() =>
                  setSelectedSecurityCategory(category)
                }
                style={({ pressed }) => [
                  styles.securityRow,
                  pressed && styles.securityRowPressed,
                ]}
              >
                <View
                  style={[
                    styles.securityRowIconWrap,
                    {
                      backgroundColor: `${category.color}18`,
                    },
                  ]}
                >
                  <Ionicons
                    name={category.icon as any}
                    size={20}
                    color={category.color}
                  />
                </View>

                <View style={styles.securityRowText}>
                  <Text style={styles.securityRowTitle}>
                    {category.title}
                  </Text>

                  <Text
                    style={styles.securityRowSubtitle}
                    numberOfLines={1}
                  >
                    {category.subtitle}
                  </Text>
                </View>

                <Ionicons
                  name="arrow-forward"
                  size={18}
                  color="#84929A"
                />
              </Pressable>
            ))}
          </View>
          <Pressable
            onPress={() => router.push('/seguranca')}
            accessibilityRole="button"
            style={({ pressed }) => [styles.securityMoreLink, pressed && styles.buttonPressed]}
          >
            <Text style={styles.securityMoreLinkText}>Ver todos os recursos de segurança</Text>
            <Ionicons name="arrow-forward" size={16} color="#356B9E" />
          </Pressable>
        </View>
      </View>
    </SectionFrame>
  );
}

/*
 * OFICINA
 */

const workshopImage =
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=84';

function WorkshopSection({
  isMobile,
  setSectionPosition,
}: Pick<
  HomeSectionsProps,
  'isMobile' | 'setSectionPosition'
>) {
  return (
    <SectionFrame
      id="oficina"
      onLayout={setSectionPosition}
      style={styles.workshopSection}
    >
      <View style={[styles.container, isMobile && styles.containerMobile]}>
        <View
          style={[
            styles.workshop,
            isMobile && styles.workshopMobile,
          ]}
        >
          <View
            style={[
              styles.workshopImageWrap,
              isMobile && styles.workshopImageWrapMobile,
            ]}
          >
            <Image
              source={{ uri: workshopImage }}
              accessibilityLabel="Pessoas reunidas em uma conversa"
              style={styles.workshopImage}
              resizeMode="cover"
            />
          </View>

          <View style={[styles.workshopContent, isMobile && styles.workshopContentMobile]}>
            <Text style={styles.eyebrow}>OFICINA</Text>

            <Text style={[styles.workshopHeading, isMobile && styles.workshopHeadingMobile]}>
              Conectados pelo cuidado.
            </Text>

            <Text style={styles.workshopDescription}>
              Uma atividade educativa para conversar sobre
              plataformas digitais, relações e o cuidado
              com quem cresce conectado.
            </Text>

            <Pressable
              onPress={() => router.push('/oficina')}
              style={({ pressed }) => [
                styles.workshopButton,
                pressed && styles.buttonPressed,
              ]}
            >
              <Text style={styles.workshopButtonText}>
                Conhecer a oficina
              </Text>

              <Ionicons
                name="arrow-forward"
                size={17}
                color="#173A55"
              />
            </Pressable>
          </View>
        </View>
      </View>
    </SectionFrame>
  );
}

/*
 * COMPOSIÇÃO DA HOME
 */

export function HomeSections({
  isMobile,
  width,
  setSelectedSecurityCategory,
  scrollToSection,
  setSectionPosition,
}: HomeSectionsProps) {
  return (
    <>
      <HeroSection
        isMobile={isMobile}
        scrollToSection={scrollToSection}
        setSectionPosition={setSectionPosition}
      />

      <GuidesSection
        isMobile={isMobile}
        width={width}
        setSectionPosition={setSectionPosition}
      />

      <SituationsSection
        isMobile={isMobile}
        width={width}
        setSectionPosition={setSectionPosition}
      />

      <SecuritySection
        isMobile={isMobile}
        setSelectedSecurityCategory={setSelectedSecurityCategory}
        setSectionPosition={setSectionPosition}
      />

      <WorkshopSection
        isMobile={isMobile}
        setSectionPosition={setSectionPosition}
      />

    </>
  );
}