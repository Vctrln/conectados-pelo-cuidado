import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/styles/theme';
import { Resource } from '@/data/resources';

export function ResourceRow({ item }: { item: Resource }) {
  return (
    <Pressable onPress={() => Linking.openURL(item.url)} style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
      <View style={styles.copy}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <Ionicons name="open-outline" size={18} color={colors.blue} style={styles.icon} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { width: '100%', minWidth: 0, minHeight: 70, paddingVertical: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12, borderBottomWidth: 1, borderBottomColor: colors.line },
  pressed: { opacity: 0.62 },
  icon: { flexShrink: 0 },
  copy: { flex: 1, minWidth: 0 },
  title: { maxWidth: '100%', flexShrink: 1, color: colors.ink, fontSize: 14, fontWeight: '700' },
  description: { maxWidth: '100%', flexShrink: 1, color: colors.muted, fontSize: 12, lineHeight: 18, marginTop: 3 },
});