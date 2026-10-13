import { Ionicons } from '@expo/vector-icons';
import { Image, Text, View } from 'react-native';

import { Page } from '@/components/Page';
import { ResourceRow } from '@/components/ResourceRow';
import { SectionHeader } from '@/components/SectionHeader';
import { helpChannels } from '@/data/resources';
import { useResponsive } from '@/hooks/useResponsive';
import { ajudaStyles as styles } from '@/styles/pages/ajuda.styles';

const helpPhoto =
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1100&q=82';

export default function Help() {
  const { isMobile } = useResponsive();

  return (
    <Page>
      <View style={styles.hero}>
        <View
          style={[
            styles.heroInner,
            isMobile && styles.heroInnerMobile,
          ]}
        >
          <View style={styles.heroCopy}>
            <SectionHeader
              mobile={isMobile}
              eyebrow="Preciso de ajuda"
              title="Aconteceu alguma coisa? Comece por aqui."
              description="Veja orientações iniciais e encontre canais confiáveis para procurar apoio."
            />
          </View>

          <Image
            source={{ uri: helpPhoto }}
            accessibilityLabel="Pessoas conversando e oferecendo apoio"
            style={[
              styles.heroImage,
              isMobile && styles.heroImageMobile,
            ]}
            resizeMode="cover"
          />
        </View>
      </View>

      <View style={[styles.content, isMobile && styles.contentMobile]}>
        <View style={styles.notice}>
          <Ionicons
            name="information-circle-outline"
            size={23}
            color="#947300"
          />

          <View style={styles.noticeContent}>
            <Text style={styles.noticeTitle}>Antes de apagar</Text>
            <Text style={styles.noticeText}>
              Se for seguro, preserve mensagens, imagens, links, perfis e
              comprovantes. Esses registros podem ajudar ao procurar orientação.
            </Text>
          </View>
        </View>
      </View>

      <View nativeID="canais" style={styles.channels}>
        <View
          style={[
            styles.channelInner,
            isMobile && styles.channelInnerMobile,
          ]}
        >
          <SectionHeader
            mobile={isMobile}
            eyebrow="Canais oficiais"
            title="Onde procurar ajuda"
            description="Escolha um canal adequado à situação e siga as orientações oficiais."
          />

          <View style={styles.channelList}>
            {helpChannels.map((item) => (
              <ResourceRow key={item.title} item={item} />
            ))}
          </View>
        </View>
      </View>
    </Page>
  );
}
