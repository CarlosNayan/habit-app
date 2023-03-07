import { View, ScrollView, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'
import dayjs from 'dayjs'

import { BackButton } from '../components/BackButton';
import { Progressbar } from '../components/Progressbar';
import { Checkbox } from '../components/Checkbox';

interface Params {
    date: string;
}

export function Habit() {
    
    const route = useRoute();
    const { date } = route.params as Params;

    const parsedDate = dayjs(date);
    const dayOfWeek = parsedDate.format('dddd');
    const dayAndMonth = parsedDate.format('DD/MM/YY')

    return (
        <View className='flex-1 bg-background px-8 pt-16'>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:100}}> 

            <BackButton/>

            <Text className='mt-6 text-zinc-400  font-semibold text-base lowercase'>
                {dayOfWeek}
            </Text>

            <Text className=' text-white font-extrabold text-2xl lowercase'>
                {dayAndMonth}
            </Text>

            <Progressbar progress={30}/>

            <View className='mt-4 mb-3 text-white font-semiBold text-base'>

                <Checkbox 
                title='Beber 2L de água'
                checked={true}/>

                <Checkbox 
                title='Me exercitar'
                checked={false}/>

            </View>

        </ScrollView>

        </View>
    )
}