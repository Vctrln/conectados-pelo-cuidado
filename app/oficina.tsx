import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';

import { Button } from '@/components/Button';
import { Page } from '@/components/Page';
import { useResponsive } from '@/hooks/useResponsive';
import { oficinaStyles as styles } from '@/styles/pages/oficina.styles';

const workshopPhoto = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=84';

const steps = [
  {
    number: '01',
    title: 'Entender',
    description: 'Como funciona o ambiente digital e como ele faz parte do cotidiano.',
  },
  {
    number: '02',
    title: 'Reconhecer',
    description: 'Riscos, sinais de atenção e situações que merecem cuidado.',
  },
  {
    number: '03',
    title: 'Agir',
    description: 'Recursos, direitos e caminhos para buscar ajuda.',
  },
];

export default function Workshop() {
  const { isMobile } = useResponsive();

  return (
    <Page>
      {/* Apresentação */}
      <View style={[styles.hero, isMobile && styles.heroMobile]}>
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

          <View
            style={[
              styles.heroLayout,
              isMobile && styles.heroLayoutMobile,
            ]}
          >
            <View style={styles.heroCopy}>
              <Text style={styles.eyebrow}>OFICINA E MATERIAL EDUCATIVO</Text>

              <Text
                style={[
                  styles.heroTitle,
                  isMobile && styles.heroTitleMobile,
                ]}
              >
                Segurança digital para crianças e adolescentes
              </Text>

              <Text style={styles.heroDescription}>
                Um espaço para compreender experiências no ambiente digital,
                conversar sobre situações do cotidiano e conhecer caminhos de
                proteção.
              </Text>
            </View>

            <Image
              source={{ uri: workshopPhoto }}
              accessibilityLabel="Pessoas reunidas em uma conversa"
              style={[
                styles.heroImage,
                isMobile && styles.heroImageMobile,
              ]}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>

      {/* Proposta e percurso */}
      <View style={[styles.section, isMobile && styles.sectionMobile]}>
        <View
          style={[
            styles.split,
            isMobile && styles.splitMobile,
          ]}
        >
          <View style={[styles.proposal, isMobile && styles.proposalMobile]}>
            <Text style={styles.sectionEyebrow}>A PROPOSTA</Text>

            <Text
              style={[
                styles.sectionTitle,
                isMobile && styles.sectionTitleMobile,
              ]}
            >
              Da compreensão à ação.
            </Text>

            <Text style={styles.lead}>
              A segurança digital não depende apenas de conhecer ferramentas.
              Também envolve compreender o que acontece nas plataformas,
              conversar sobre experiências e saber onde procurar orientação
              quando algo não parece certo.
            </Text>
          </View>

          <View style={[styles.steps, isMobile && styles.stepsMobile]}>
            {steps.map((step) => (
              <View key={step.number} style={styles.step}>
                <Text style={styles.stepNumber}>{step.number}</Text>

                <View style={styles.stepContent}>
                  <Text style={styles.stepTitle}>{step.title}</Text>
                  <Text style={styles.stepText}>{step.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Material complementar */}
      <View style={[styles.materialSection, isMobile && styles.materialSectionMobile]}>
        <View
          style={[
            styles.container,
            styles.materialInner,
            isMobile && styles.containerMobile,
            isMobile && styles.materialInnerMobile,
          ]}
        >
          <View style={styles.materialIcon}>
            <Ionicons
              name="shield-checkmark-outline"
              size={26}
              color="#356B9E"
            />
          </View>

          <View style={styles.materialContent}>
            <Text style={styles.sectionEyebrow}>
              CONTINUE EXPLORANDO
            </Text>

            <Text style={styles.materialTitle}>
              Materiais para consultar depois da oficina
            </Text>

            <Text style={styles.materialText}>
              Encontre guias práticos, recursos oficiais e orientações para
              aprofundar os assuntos e retomar a conversa quando precisar.
            </Text>

            <View style={styles.materialButton}>
              <Button
                href="/seguranca"
                label="Acessar recursos"
              />
            </View>
          </View>
        </View>
      </View>

      {/* Relação com pesquisa e extensão */}
      <View style={[styles.research, isMobile && styles.researchMobile]}>
        <View
          style={[
            styles.container,
            isMobile && styles.containerMobile,
          ]}
        >
          <Text style={styles.sectionEyebrow}>SOBRE O PROJETO</Text>

          <Text
            style={[
              styles.researchTitle,
              isMobile && styles.sectionTitleMobile,
            ]}
          >
            Pesquisa, educação e cuidado no ambiente digital
          </Text>

          <Text style={styles.researchDescription}>
            O projeto aproxima Sistemas de Informação e educação para discutir
            a proteção de crianças e adolescentes nas plataformas digitais.
          </Text>
        </View>
      </View>
    </Page>
  );
}