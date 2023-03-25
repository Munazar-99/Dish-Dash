import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'


const BasketScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems)
    const basketTotal = useSelector(selectBasketTotal)
    const dispatch = useDispatch()
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item)
            return results
        }, {})

        setGroupedItemsInBasket(groupedItems)
    }, [items])
    return (
        <SafeAreaView className='flex-1 bg-white'>
            <View className='flex-1 bg-gray-100'>
                <View className='p-5 border-b border-[#00CCBB] bg-white shadow-xs'>
                    <View>
                        <Text className='text-lg font-bold text-center'>Basket</Text>
                        <Text className='text-center text-gray-400'>{restaurant.title}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className='rounded-full bg-gray-100 absolute top-3 right-5'
                    >
                        <XCircleIcon size={50} color='#00CCBB' />
                    </TouchableOpacity>
                </View>
                <View className='flex-row items-center space-x-4 px-4 py-4 bg-white my-5'>
                    <Image
                        source={{
                            uri: 'https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450',
                        }}
                        className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                    />
                    <Text className='flex-1'>Deliver in 50-75 mins</Text>
                    <TouchableOpacity>
                        <Text className='text-[#00CCBB]'>Change</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView className='divide-y divide-gray-200'>
                    {Object.entries(groupedItemsInBasket).map(([key, items]) => {
                        return <View key={key} className='flex-row items-center space-x-3 bg-white py-2 px-5'>
                            <Text className='text-[#00CCBB]'>{items.length} * </Text>
                            <Image
                                source={{
                                    uri: urlFor(items[0]?.image).url(),
                                }}
                                className='h-12 w-12 rounded-full'
                            />
                            <Text className='flex-1'>{items[0]?.title}</Text>
                            <Text className='text-gray-600'> SEK {items[0]?.price}</Text>

                            <TouchableOpacity>
                                <Text
                                    className='text-[#00CCBB] text-xs'
                                    onPress={() => dispatch(removeFromBasket({ id: key }))}
                                >
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    })}
                </ScrollView>
                <View className='p-5 bg-white mt-5  space-y-4'>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-400'>SubTotal</Text>
                        <Text className='text-gray-400'>SEK  {basketTotal}</Text>
                    </View>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-400'>Delivery Fee</Text>
                        <Text className='text-gray-400'>SEK  59</Text>
                    </View>
                    <View className='flex-row justify-between'>
                        <Text >Order Total</Text>
                        <Text className='text-gray-400 font-extrabold'>SEK  {basketTotal + 59}</Text>
                    </View>
                    <TouchableOpacity onPress={()=> navigation.navigate('PreparingOrderScreen')} className='rounded-lg bg-[#00CCBB] p-4'>
                        <Text className='text-center text-white text-lg font-bold'>Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default BasketScreen