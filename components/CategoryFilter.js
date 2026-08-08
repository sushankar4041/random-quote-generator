import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CategoryFilter = ({ categories, selected, onSelect, theme }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {categories.map(cat => (
        <TouchableOpacity
          key={cat}
          style={[
            styles.catBtn,
            selected === cat && { backgroundColor: theme.accent, borderColor: theme.accent },
            { borderColor: theme.border }
          ]}
          onPress={() => onSelect(cat)}
        >
          <Text style={[
            styles.catLabel,
            { color: selected === cat ? '#fff' : theme.textSecondary }
          ]}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 8 },
  catBtn: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 50,
    borderWidth: 1.5,
    marginRight: 8,
  },
  catLabel: { fontSize: 13, fontWeight: '500' },
});

export default CategoryFilter;