import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native'
import { COLORS, windowHeight } from '../constants/themes'

export default function Container({style,children}) {
    return (
        <SafeAreaView style={{...style,width:"100%",height:windowHeight,alignItems:"center",position:"relative"}}>
            <StatusBar backgroundColor={COLORS.strongPrimary} animated={true} hidden={true} />
            {children}
        </SafeAreaView>
    )
}
