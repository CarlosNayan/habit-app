import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './App.routes'

export function Routes() {
    return (
        <View className='flex-1 bg-background'>

            <AppRoutes/>

        </View>
    )
}