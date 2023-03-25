import { View, Text, TouchableOpacity, Image, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/solid'
import * as Progress from 'react-native-progress';
import NativeMap from '../components/NativeMap'
import WebMap from '../components/WebMap'
//  import MapView, { Marker } from 'react-native-maps' 
// Platform.OS !== "web" && import("'mapbox-gl/dist/mapbox-gl.j")



const DeliveryScreen = () => {
    const [mapState, setMapState] = useState('')
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const MapComponent = Platform.select({
        native:()=> NativeMap,
        default:()=> WebMap,
      })();
    return (
        <View className='bg-[#00CCBB] flex-1'>
            <SafeAreaView className='z-50'>
                <View className='flex-row justify-between items-center p-5'>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}   >
                        <XMarkIcon color='white' size={30} />
                    </TouchableOpacity>
                    <Text className='font-light text-white text-lg'>
                        Order Help
                    </Text>
                </View>

                <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md '>
                    <View className='flex-row justify-between'>
                        <View>
                            <Text className='text-lg text-gray-400 '>Estimated Arrival</Text>
                            <Text className='text-4xl font-bold'>40-55 Minutes</Text>
                        </View>
                        <Image
                            source={{
                                uri: 'https://links.papareact.com/fls'
                            }}
                            className='h-20 w-20'
                        />
                    </View>
                    <Progress.Bar size={30} indeterminate={true} color='#00CCBB' />
                    <Text className='mt-3 text-gray-500'>
                        Your Order at {restaurant.title} is being prepared
                    </Text>
                </View>
            </SafeAreaView>
           
                <MapComponent/>
            <SafeAreaView className='bg-white flex-row items-center space-x-5 h-32'>
                <Image
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className='h-12 w-12 bg-gray-300 p-4 rounded-full  ml-5'
                />
                <View className='flex-1 mb-4'>
                    <Text className='text-lg'>Munazar Ali</Text>
                    <Text className='text-gray-400'>Your Rider</Text>
                </View>
                <Text className='text-[#00CCBB] text-lg mr-5 font-bold'>Call</Text>
            </SafeAreaView>
        </View>
    )
}

export default DeliveryScreen