import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const FavoritesModal = ({
  visible,
  favorites,
  onClose,
  onRemove,
  theme,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={[styles.modal, { backgroundColor: theme.card }]}>
          <View style={styles.header}>
            <View style={styles.titleRow}>
              <Feather name="heart" size={22} color={theme.accent} />
              <Text style={[styles.title, { color: theme.textPrimary }]}>
                Your Favorites
              </Text>
            </View>

            <TouchableOpacity onPress={onClose}>
              <Feather name="x" size={24} color={theme.textPrimary} />
            </TouchableOpacity>
          </View>

          {favorites.length === 0 ? (
            <View style={styles.empty}>
              <Feather
                name="heart"
                size={48}
                color={theme.textSecondary}
                style={{ opacity: 0.3 }}
              />
              <Text
                style={[styles.emptyText, { color: theme.textSecondary }]}
              >
                No favorites yet.{'\n'}Start saving quotes you love!
              </Text>
            </View>
          ) : (
            <FlatList
              data={favorites}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View
                  style={[styles.item, { borderColor: theme.border }]}
                >
                  <View style={styles.itemText}>
                    <Text
                      style={[styles.quote, { color: theme.textPrimary }]}
                    >
                      “{item.text}”
                    </Text>

                    <Text
                      style={[
                        styles.author,
                        { color: theme.textSecondary },
                      ]}
                    >
                      — {item.author}
                    </Text>
                  </View>

                  <TouchableOpacity
                    onPress={() => onRemove(index)}
                    style={styles.removeBtn}
                  >
                    <Feather
                      name="trash-2"
                      size={18}
                      color="#ff6b8a"
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  modal: {
    width: '100%',
    maxHeight: '80%',
    borderRadius: 24,
    padding: 24,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
  },

  empty: {
    alignItems: 'center',
    paddingVertical: 40,
  },

  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 22,
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    gap: 12,
  },

  itemText: {
    flex: 1,
  },

  quote: {
    fontSize: 15,
    lineHeight: 22,
  },

  author: {
    fontSize: 13,
    marginTop: 4,
  },

  removeBtn: {
    padding: 6,
  },
});

export default FavoritesModal;