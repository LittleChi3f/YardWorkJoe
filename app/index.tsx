import React from "react";
import { Text, View, TouchableOpacity, ImageBackground, FlatList, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import FoodsCard from "@/components/FoodsCard";
import SearchBar from "@/components/SearchBar";
import { fetchFoods } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  const {
    data: foods,
    loading: foodsLoading,
    error: foodsError
  } = useFetch(() => fetchFoods({ query: '' }));

  return (
    <ImageBackground
      source={require('@/assets/images/bg.png')} // Ensure this path is correct
      className="flex-1"
      resizeMode="cover"
    >
      <View className="flex-1 items-center pt-20 px-4">
        {/* Header */}
        <Text className="text-white text-2xl font-bold text-center mb-2">
          Visualize Your Goals{"\n"}One Step At A Time
        </Text>
        <Text className="text-white text-lg mb-8">Hi user</Text>

        {/* Calorie Tracker Circle with Glassmorphism */}
        <BlurView
          intensity={80}
          tint="light"
          style={{
            width: 144,
            height: 144,
            borderRadius: 72,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0.2)',
          }}
        >
          <Text className="text-white text-3xl font-bold">5,248</Text>
          <Text className="text-white text-sm">Remaining</Text>
        </BlurView>

        {/* Calories Card with Enhanced Glassmorphism */}
        <BlurView
          intensity={60}
          tint="light"
          style={{
            width: '100%',
            borderRadius: 12,
            overflow: 'hidden',
            marginBottom: 20,
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0.3)',
          }}
        >
          <View className="p-5 items-center">
            <Text className="text-gray-800 text-lg font-bold mb-2">Calories</Text>
            <TouchableOpacity 
              style={{
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                paddingHorizontal: 20,
                paddingVertical: 8,
                borderRadius: 6,
                borderWidth: 1,
                borderColor: 'rgba(59, 130, 246, 0.3)',
              }}
            >
              <Text className="text-blue-700 font-bold">Add Food</Text>
            </TouchableOpacity>
            <Text className="mt-2 font-bold text-gray-700">+0 food</Text>
          </View>
        </BlurView>

        {/* Steps Cards with Glassmorphism */}
        <View className="flex-row justify-between w-full mb-5">
          <BlurView
            intensity={60}
            tint="light"
            style={{
              flex: 1,
              borderRadius: 12,
              overflow: 'hidden',
              marginHorizontal: 4,
              borderWidth: 1,
              borderColor: 'rgba(255, 255, 255, 0.3)',
            }}
          >
            <View className="p-4 items-center">
              <Ionicons name="walk" size={24} color="deeppink" />
              <Text className="mt-1 text-center text-gray-700 text-xs">Connect to track steps</Text>
            </View>
          </BlurView>

          <BlurView
            intensity={60}
            tint="light"
            style={{
              flex: 1,
              borderRadius: 12,
              overflow: 'hidden',
              marginHorizontal: 4,
              borderWidth: 1,
              borderColor: 'rgba(255, 255, 255, 0.3)',
            }}
          >
            <View className="p-4 items-center">
              <Ionicons name="walk" size={24} color="deeppink" />
              <Text className="mt-1 text-center text-gray-700">Steps</Text>
            </View>
          </BlurView>
        </View>

        {/* Food List Header */}
        <Text className="text-white text-xl font-bold mb-2">Your Foods</Text>
        <SearchBar />

        {foodsLoading ? (
          <ActivityIndicator size="large" color="#ffffff" />
        ) : foodsError ? (
          <Text className="text-red-500">Error loading foods.</Text>
        ) : (
          <FlatList
            data={foods}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <FoodsCard food={item} />}
            className="w-full mt-4"
          />
        )}
      </View>
    </ImageBackground>
  )
}