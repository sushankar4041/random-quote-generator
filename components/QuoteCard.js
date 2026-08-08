import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Share, Alert } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Feather } from '@expo/vector-icons';

const QuoteCard = ({ 
  quote, onNewQuote, onToggleFavorite, isFavorite, theme, onFavoritesPress, onThemeToggle, isDark 
}) => {
  if (!quote) return null;

  const handleCopy = async () => {
    const text = `“${quote.text}” — ${quote.author}`;
    await Clipboard.setStringAsync(text);
    // Toast is shown from parent; we could use a callback, but we'll rely on parent to show toast via a prop.
    // For simplicity, we'll use Alert. Or we can pass a showToast prop. I'll keep it simple.
    Alert.alert('Copied!', 'Quote copied to clipboard.');
  };

  const handleShare = async () => {
    const text = `“${quote.text}” — ${quote.author}`;
    try {
      await Share.share({ message: text });
    } catch (error) {}
  };

  return (
    <View style={[styles.card, { backgroundColor: theme.card, shadowColor: theme.shadowColor }]}>
      <View style={styles.categoryBadge}>
        <Text style={styles.categoryText}>{quote.category.toUpperCase()}</Text>
      </View>
      <Text style={[styles.quoteText, { color: theme.textPrimary }]}>“{quote.text}”</Text>
      <Text style={[styles.authorText, { color: theme.textSecondary }]}>— {quote.author}</Text>

      <View style={styles.actionRow}>
        <View style={styles.actionGroup}>
          <TouchableOpacity style={[styles.actionBtn, { borderColor: theme.border }]} onPress={handleCopy}>
            <Feather name="copy" size={16} color={theme.textSecondary} />
            <Text style={[styles.actionLabel, { color: theme.textSecondary }]}>Copy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.actionBtn,
              { borderColor: isFavorite ? '#ff6b8a' : theme.border },
              isFavorite && { backgroundColor: '#ff6b8a' }
            ]}
            onPress={onToggleFavorite}
          >
            <Feather name="heart" size={16} color={isFavorite ? '#fff' : '#ff6b8a'} />
            <Text style={[styles.actionLabel, { color: isFavorite ? '#fff' : '#ff6b8a' }]}>
              {isFavorite ? 'Saved' : 'Save'}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.primaryBtn, { backgroundColor: theme.accent }]} onPress={onNewQuote}>
          <Feather name="refresh-cw" size={16} color="#fff" />
          <Text style={styles.primaryLabel}>New Quote</Text>
        </TouchableOpacity>
      </View>

      {/* Header actions are moved to App level; but we can keep them here */}
      <View style={styles.headerActions}>
        <TouchableOpacity onPress={onFavoritesPress} style={styles.iconBtn}>
          <Feather name="heart" size={24} color={theme.textPrimary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onThemeToggle} style={styles.iconBtn}>
          <Feather name={isDark ? 'sun' : 'moon'} size={24} color={theme.textPrimary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShare} style={styles.iconBtn}>
          <Feather name="share-2" size={24} color={theme.textPrimary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 24,
    borderRadius: 24,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 8,
    marginBottom: 16,
  },
  categoryBadge: {
    backgroundColor: '#6c63ff',
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 12,
  },
  categoryText: { color: '#fff', fontSize: 11, fontWeight: '600', letterSpacing: 0.5 },
  quoteText: { fontSize: 22, lineHeight: 34, fontWeight: '500', marginBottom: 10 },
  authorText: { fontSize: 16, fontWeight: '400', textAlign: 'right', marginBottom: 16 },
  actionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(108,99,255,0.06)',
    paddingTop: 16,
    gap: 10,
  },
  actionGroup: { flexDirection: 'row', gap: 10 },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderWidth: 1.5,
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  actionLabel: { fontSize: 14, fontWeight: '500' },
  primaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },
  primaryLabel: { color: '#fff', fontWeight: '600', fontSize: 14 },
  headerActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16,
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(108,99,255,0.06)',
  },
  iconBtn: { padding: 4 },
});

export default QuoteCard;