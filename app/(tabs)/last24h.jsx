import React from 'react';
import { Text, View, ImageBackground, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Locationicon from '@/assets/SVG/Locationicon';
import Temperatureicon from '@/assets/SVG/Temperatureicon';
import Rainfallicon from '@/assets/SVG/Rainfallicon';
import Humidityicon from '@/assets/SVG/Humidityicon';
import Cloud from '@/assets/images/Cloud.jpeg'

export default function HomeScreen() {
  return (
    <SafeAreaView className="w-full h-full bg-primary flex-1">
      <ImageBackground className='flex-1 justify-center items-center' source={Cloud}>
      <ScrollView className='w-full h-full'
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className='w-full h-full px-5'>


          



      <View className='w-full flex flex-row justify-center items-center my-3'>
        <Text className='font-bold text-3xl'>Past 24 Hr Data</Text>
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
              Temperature
            </Text>
          </View>
          <View className=' w-full h-[30vh] flex flex-col justify-center items-center'>
            <Text className='text-sm font-light'>Temp Graph comes here</Text>
          </View>
      </View>

      <View className='w-full p-5 mt-5 text-black bg-secondary flex flex-col justify-center items-center rounded-2xl'>
      <View className='w-full flex flex-row pb-1 items-center'>
            <Rainfallicon/>
            <Text className='text-3xl pl-1 font-bold'>
              Rainfall
            </Text>
          </View>
          <View className=' w-full h-[30vh] flex flex-col justify-center items-center'>
            <Text className='text-sm font-light'>Rainfall Graph comes here</Text>
          </View>
      </View>

      <View className='w-full p-5 mt-5 text-black bg-secondary flex flex-col justify-center items-center rounded-2xl'>
      <View className='w-full flex flex-row pb-1 items-center'>
            <Humidityicon/>
            <Text className='text-3xl pl-1 font-bold'>
              Humidity
            </Text>
          </View>
          <View className=' w-full h-[30vh] flex flex-col justify-center items-center'>
            <Text className='text-sm font-light'>Humidity Graph comes here</Text>
          </View>
      </View>




      </View>
      </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}