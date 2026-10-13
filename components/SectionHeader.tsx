import { Text, View } from 'react-native';
import {
  sectionHeaderStyles as styles,
  getSectionHeaderEyebrowStyle,
  getSectionHeaderTitleStyle,
  getSectionHeaderDescriptionStyle,
} from '@/styles/components/sectionHeader.styles';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  mobile?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
  mobile = false,
}: SectionHeaderProps) {
  return (
    <View style={styles.wrap}>
      {eyebrow && (
        <Text style={getSectionHeaderEyebrowStyle(light)}>{eyebrow}</Text>
      )}
      <Text
        style={[
          getSectionHeaderTitleStyle(light),
          mobile && styles.titleMobile,
        ]}
      >
        {title}
      </Text>
      {description && (
        <Text
          style={[
            getSectionHeaderDescriptionStyle(light),
            mobile && styles.descriptionMobile,
          ]}
        >
          {description}
        </Text>
      )}
    </View>
  );
}