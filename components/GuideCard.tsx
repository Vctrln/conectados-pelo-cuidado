import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, Pressable } from 'react-native';
import { colors } from '@/styles/theme';
import { guideCardStyles as styles, getGuideCardStyle } from '@/styles/components/guideCard.styles';

type Props = { slug: string; tag: string; title: string; description: string; accent?: boolean };

export function GuideCard({ slug, tag, title, description, accent }: Props) {
  return (
    <Link href={{ pathname: '/guia/[slug]', params: { slug } }} asChild>
      <Pressable style={getGuideCardStyle(accent)}>
        <View style={styles.top}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
          <Ionicons name="arrow-redo-outline" size={18} color={colors.blue} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </Pressable>
    </Link>
  );
}