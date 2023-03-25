import { View, Text, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'

const NativeMap = () => {
    const [mapState, setMapState] = useState('')
    const restaurant = useSelector(selectRestaurant)
    console.log(mapState)
    useEffect(() => {
        Platform.OS !== 'web' &&
            import('react-native-maps').then(({ default: MapView, Marker }) => {
                setMapState(
                    <MapView
                        initialRegion={{
                            latitude: restaurant.lat,
                            longitude: restaurant.long,
                            latitudeDelta: 0.003,
                            longitudeDelta: 0.003,
                        }}
                        className='flex-1 z-0 -mt-20'
                        mapType='mutedStandard'
                    >
                        <Marker
                            coordinate={{
                                latitude: restaurant.lat,
                                longitude: restaurant.long,
                            }}
                            title={restaurant.title}
                            description={restaurant.short_description}
                            identifier='origin'
                            pinColor='red'
                        />
                    </MapView>
                )
            })
    }, [])
    return mapState
}

export default NativeMap