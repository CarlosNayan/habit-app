import { useState } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'

import { BackButton } from '../components/BackButton'
import { Checkbox } from '../components/Checkbox'

const avaliableWeekDays = ['Domingo', 'Segunda,feira', 'Terça-feira', 'Quarta-Feira', 'Quinta-feira', 'Sexta-Feira', 'Sábado']

export function New() {

    const [weekDays, setWeekDays] = useState<number[]>([]);

    function handleToggleWeekDay(weekDayIndex: number){
        if(weekDays.includes(weekDayIndex)){
            setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex));

        } else {
            setWeekDays(prevState => [...prevState, weekDayIndex])
        }
    }

    return (
        <View className='flex-1 bg-background px-8 pt-16'>
            <ScrollView 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 100}}>

                <BackButton/>

                <Text className='mt-6 text-white font-extrabold text-3xl'>
                    Criar Hábito
                </Text>

                <Text className='mt-6 text-white font-semiBold text-base'>
                Qual hábito quer adicionar?
                </Text>

                <TextInput
                className='h-12 pl-4 rounded-lg mt-3 bg-zinc-900 border-2 border-zinc-800 focus:border-2 focus:border-green-600 text-white'
                placeholder='Exercicios, Beber água, etc...'
                placeholderTextColor={colors.zinc[400]}
                />

                <Text className='mt-4 mb-3 text-white font-semiBold text-base'>
                    Qual a recorrência?
                </Text>

                {
                    avaliableWeekDays.map((weekDay, index) => (
                        <Checkbox
                            key={weekDay} 
                            title={weekDay}
                            checked={weekDays.includes(index)}
                            onPress={() => handleToggleWeekDay(index)}
                        />
                        
                    ))
                }

                <TouchableOpacity
                    className='mt-4 w-full h-14 flex flex-row rounded-md items-center justify-center bg-green-600'
                    activeOpacity={0.7}>
                    <Feather
                        name='check'
                        size={20}
                        color={colors.white}/>
                    <Text className='text-white font-semibold text-base ml-2'>
                        Confirmar
                    </Text>
                </TouchableOpacity>


            </ScrollView>
        </View>
    )
}