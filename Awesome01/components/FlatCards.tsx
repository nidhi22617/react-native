import { Text, StyleSheet, View } from 'react-native'
import React from 'react'

export default function FlatCards (){
    return (
      <View>
        <Text style = {styles.headingText}>Flat Cards</Text>
            <View style = {styles.container}>
                <View style = {[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style = {[styles.card, styles.cardTwo]}>
                    <Text>Blue</Text>
                </View>
                <View style = {[styles.card, styles.cardThree]}>
                    <Text>Green</Text>
                </View>
                <View style = {[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
            </View>
      </View>
    )
  }


const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        
    },
    container:{
        flex: 1,
        flexDirection: 'row',
        padding:8,
        // justifyContent: 'space-between'

    },
    card : {
        flex: 1,
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
        color:  '#000000'
    },
    cardOne: {
        backgroundColor: '#EF5354'
    },
    cardTwo: {
        backgroundColor: '#152085'
    },
    cardThree: {
        backgroundColor: '#35b035'
    }
})