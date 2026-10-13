import { Image, Text, View } from 'react-native';

import { Page } from '@/components/Page';
import { ResourceRow } from '@/components/ResourceRow';
import { SectionHeader } from '@/components/SectionHeader';
import { resourceGroups } from '@/data/resources';
import { useResponsive } from '@/hooks/useResponsive';
import { segurancaStyles as styles } from '@/styles/pages/seguranca.styles';

export default function Security() {
  const { isMobile } = useResponsive();

  return (
    <Page>
      {/* Apresentação */}
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
              eyebrow="RECURSOS DE SEGURANÇA"
              title="Recursos para proteger suas contas e dispositivos."
              description="Acesse configurações e orientações oficiais para os serviços que você usa."
            />
          </View>

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=82',
            }}
            accessibilityLabel="Pessoa utilizando um dispositivo digital"
            style={[
              styles.heroImage,
              isMobile && styles.heroImageMobile,
            ]}
            resizeMode="cover"
          />
        </View>
      </View>

      {/* Grupos de recursos */}
      <View style={[styles.content, isMobile && styles.contentMobile]}>
        {resourceGroups.map((group) => (
          <View
            key={group.number}
            style={[
              styles.group,
              isMobile && styles.groupMobile,
            ]}
          >
            <View
              style={[
                styles.groupIntro,
                isMobile && styles.groupIntroMobile,
              ]}
            >
              <Text style={styles.number}>{group.number}</Text>

              <Text style={styles.title}>{group.title}</Text>

              <Text style={styles.description}>
                {group.description}
              </Text>
            </View>

            <View
              style={[
                styles.resourceList,
                isMobile && styles.resourceListMobile,
              ]}
            >
              {group.items.map((item) => (
                <ResourceRow
                  key={item.title}
                  item={item}
                />
              ))}
            </View>
          </View>
        ))}
      </View>
    </Page>
  );
}