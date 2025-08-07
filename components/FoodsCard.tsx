import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

interface Food {
  id: number;
  name: string;
  calories?: number;
  image?: string;
  description?: string;
}

interface FoodsCardProps {
  food: Food;
}

export default function FoodsCard({ food }: FoodsCardProps) {
  return (
    <BlurView
      intensity={60}
      tint="light"
      style={{
        borderRadius: 16,
        overflow: 'hidden',
        marginBottom: 12,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
      }}
    >
      <TouchableOpacity
        style={{
          padding: 16,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        activeOpacity={0.8}
      >
        {/* Food Image or Placeholder */}
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 12,
            backgroundColor: 'rgba(156, 163, 175, 0.3)',
            marginRight: 16,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0.2)',
          }}
        >
          {food.image ? (
            <Image 
              source={{ uri: food.image }} 
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 12,
              }}
              resizeMode="cover"
            />
          ) : (
            <Ionicons name="restaurant" size={24} color="rgba(107, 114, 128, 0.7)" />
          )}
        </View>

        {/* Food Info */}
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#374151',
              marginBottom: 4,
            }}
          >
            {food.name}
          </Text>
          {food.description && (
            <Text
              style={{
                fontSize: 14,
                color: 'rgba(107, 114, 128, 0.8)',
                marginBottom: 4,
              }}
              numberOfLines={2}
            >
              {food.description}
            </Text>
          )}
          {food.calories && (
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: '#059669',
              }}
            >
              {food.calories} calories
            </Text>
          )}
        </View>

        {/* Add Button */}
        <TouchableOpacity
          style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            borderWidth: 1,
            borderColor: 'rgba(59, 130, 246, 0.3)',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 12,
          }}
        >
          <Ionicons name="add" size={20} color="#2563EB" />
        </TouchableOpacity>
      </TouchableOpacity>
    </BlurView>
  );
}