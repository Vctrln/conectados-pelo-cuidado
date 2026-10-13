import {
  Linking,
  Modal,
  Pressable,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import type { SecurityCategory } from '@/data/home';
import { homeStyles as styles } from '@/styles/pages/home.styles';

type SecurityModalProps = {
  category: SecurityCategory | null;
  isMobile: boolean;
  onClose: () => void;
};

function openExternal(url: string) {
  void Linking.openURL(url);
}

export function SecurityModal({
  category,
  isMobile,
  onClose,
}: SecurityModalProps) {
  return (
    <Modal
      visible={Boolean(category)}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalBackdrop}>
        <View
          style={[
            styles.modal,
            isMobile &&
              styles.modalMobile,
          ]}
        >
          {category && (
            <>
              <View style={styles.modalHeader}>
                <View>
                  <Text
                    style={styles.modalEyebrow}
                  >
                    CANAIS OFICIAIS
                  </Text>

                  <Text
                    style={styles.modalTitle}
                  >
                    {category.title}
                  </Text>
                </View>

                <Pressable
                  onPress={onClose}
                  style={styles.modalClose}
                  accessibilityRole="button"
                  accessibilityLabel="Fechar"
                >
                  <Ionicons
                    name="close"
                    size={21}
                    color="#425A68"
                  />
                </Pressable>
              </View>

              <Text
                style={styles.modalDescription}
              >
                {category.subtitle}
              </Text>

              <View
                style={styles.modalLinks}
              >
                {category.items.map(
                  (item) => (
                    <Pressable
                      key={item.title}
                      onPress={() =>
                        openExternal(
                          item.url,
                        )
                      }
                      style={({
                        pressed,
                      }) => [
                        styles.modalLink,
                        pressed &&
                          styles.modalLinkPressed,
                      ]}
                    >
                      <Text
                        style={
                          styles.modalLinkText
                        }
                      >
                        {item.title}
                      </Text>

                      <Ionicons
                        name="arrow-forward"
                        size={17}
                        color={
                          category.color
                        }
                      />
                    </Pressable>
                  ),
                )}
              </View>

              <Pressable
                onPress={onClose}
                style={({ pressed }) => [
                  styles.modalDone,
                  pressed &&
                    styles.buttonPressed,
                ]}
              >
                <Text
                  style={
                    styles.modalDoneText
                  }
                >
                  Fechar
                </Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
}