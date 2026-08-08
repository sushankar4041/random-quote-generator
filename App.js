import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { useStorage } from './src/hooks/useStorage';
import { QUOTES } from './src/data/quotes';
import { getFilteredQuotes, getRandomQuote } from './src/utils/helpers';
import { lightTheme, darkTheme } from './src/styles/theme';
import QuoteCard from './src/components/QuoteCard';
import CategoryFilter from './src/components/CategoryFilter';
import FavoritesModal from './src/components/FavoritesModal';
import Toast from './src/components/Toast';

export default function App() {
  const [favorites, setFavorites] = useStorage('favorites', []);
  const [isDark, setIsDark] = useStorage('theme', false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentQuote, setCurrentQuote] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: '' });

  const theme = isDark ? darkTheme : lightTheme;

  // Load initial quote
  useEffect(() => {
    const quotes = getFilteredQuotes(QUOTES, selectedCategory);
    setCurrentQuote(getRandomQuote(quotes));
  }, [selectedCategory]);

  const handleNewQuote = () => {
    const quotes = getFilteredQuotes(QUOTES, selectedCategory);
    setCurrentQuote(getRandomQuote(quotes));
  };

  const toggleFavorite = () => {
    if (!currentQuote) return;
    const exists = favorites.some(f => f.text === currentQuote.text && f.author === currentQuote.author);
    let newFavs;
    if (exists) {
      newFavs = favorites.filter(f => !(f.text === currentQuote.text && f.author === currentQuote.author));
      showToast('Removed from favorites');
    } else {
      newFavs = [...favorites, currentQuote];
      showToast('Added to favorites ❤️');
    }
    setFavorites(newFavs);
  };

  const removeFavorite = (index) => {
    const newFavs = favorites.filter((_, i) => i !== index);
    setFavorites(newFavs);
    showToast('Removed from favorites');
  };

  const showToast = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => setToast({ visible: false, message: '' }), 2200);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={theme.background} />
      <View style={styles.content}>
        <QuoteCard
          quote={currentQuote}
          onNewQuote={handleNewQuote}
          onToggleFavorite={toggleFavorite}
          isFavorite={currentQuote ? favorites.some(f => f.text === currentQuote.text && f.author === currentQuote.author) : false}
          theme={theme}
          onCopy={() => { /* implemented inside QuoteCard */ }}
          onShare={() => { /* implemented inside QuoteCard */ }}
          onFavoritesPress={() => setModalVisible(true)}
          onThemeToggle={() => setIsDark(!isDark)}
          isDark={isDark}
        />
        <CategoryFilter
          categories={['all', ...new Set(QUOTES.map(q => q.category))]}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
          theme={theme}
        />
      </View>

      <FavoritesModal
        visible={modalVisible}
        favorites={favorites}
        onClose={() => setModalVisible(false)}
        onRemove={removeFavorite}
        theme={theme}
      />

      <Toast visible={toast.visible} message={toast.message} theme={theme} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, paddingHorizontal: 16, paddingTop: 12 },
});