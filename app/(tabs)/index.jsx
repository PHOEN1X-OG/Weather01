import React from 'react';
import { Text, View, ImageBackground, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Searchicon from '@/assets/SVG/Searchicon';
import Locationicon from '@/assets/SVG/Locationicon';
import Temperatureicon from '@/assets/SVG/Temperatureicon';
import Rainfallicon from '@/assets/SVG/Rainfallicon';
import Humidityicon from '@/assets/SVG/Humidityicon';
import Intensityicon from '@/assets/SVG/Intensityicon';
import Cloud from '@/assets/images/Cloud.jpeg'





export default function HomeScreen() {
  return (
    <SafeAreaView className="w-full h-full bg-primary flex">
      <ImageBackground className='flex justify-center items-center blur-sm' source={Cloud}>
      <ScrollView className='w-full h-full'
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className='w-full h-full px-5'>




      <View className='flex flex-row justify-center items-center my-3'>
        <Text className='font-bold text-3xl'>Weather01</Text>
      </View>
      
      <View className="w-full px-5 py-3 flex flex-row items-center bg-blue-200 text-gray-700 rounded-full">
        <Searchicon/>
        <Text className='text-xl font-light pl-2'>Search</Text>
      </View>      

      <View className='w-full p-5 mt-5 text-black bg-secondary flex flex-col justify-center items-center rounded-2xl'>
          <View className='w-full flex flex-row items-center'>
            <Locationicon className=''/>
            <Text className='text-2xl font-bold pl-1 w-full'>
            Kandi, Sangareddy
          </Text>
          </View>
      </View>

      
      <View className='w-full p-5 mt-5 text-black bg-secondary flex flex-col justify-center items-center rounded-2xl'>
      <View className='w-full flex flex-row pb-1 items-center'>
            <Temperatureicon/>
            <Text className='text-3xl pl-1 font-bold'>
              28°C
            </Text>
          </View>
          <Text className='text-sm w-full font-light'>
          Temperature
          </Text>
      </View>

      <View className='w-full flex flex-row justify-between'>
      <View className='w-[47%] p-5 mt-5 text-black bg-secondary flex flex-col justify-center items-center rounded-2xl'>
        <View className='w-full flex flex-row items-center pb-1'>
          <Rainfallicon/>
          <Text className='text-3xl font-bold w-full pl-1'>
          0mm
          </Text>
        </View>
          <Text className='text-sm w-full font-light'>
          Rainfall
          </Text>
      </View>

      <View className='w-[47%] p-5 mt-5 text-black bg-secondary flex flex-col justify-center items-center rounded-2xl'>
        <View className='w-full flex flex-row items-center pb-1'>
          <Humidityicon/>
          <Text className='text-3xl font-bold w-full pl-1'>
          75%
          </Text>
        </View>   
          <Text className='text-sm w-full font-light'>
          Humidity
          </Text>
      </View>
      </View>

      <View className='w-full p-5 mt-5 text-black bg-secondary flex flex-col justify-center items-center rounded-2xl'>
      <View className='w-full flex flex-row pb-1 items-center'>
            <Rainfallicon/>
            <Text className='text-3xl pl-1 font-bold'>
              5mm/hr
            </Text>
          </View>
          <Text className='text-sm w-full font-light'>
          Rainfall Intensity
          </Text>
      </View>


        </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}