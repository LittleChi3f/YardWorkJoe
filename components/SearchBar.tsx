import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');

  return (
    <BlurView
      intensity={60}
      tint="light"
      style={{
        width: '100%',
        borderRadius: 25,
        overflow: 'hidden',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
      }}
    >
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
      }}>
        <Ionicons 
          name="search" 
          size={20} 
          color="rgba(107, 114, 128, 0.8)" 
          style={{ marginRight: 12 }}
        />
        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Search foods..."
          placeholderTextColor="rgba(107, 114, 128, 0.6)"
          style={{
            flex: 1,
            fontSize: 16,
            color: '#374151',
            fontWeight: '500',
          }}
        />
      </View>
    </BlurView>
  );
}