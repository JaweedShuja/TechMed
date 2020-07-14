import React, {useState} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'
import styles from './styles/KeypadStyle'
import BackspaceIcon from '../../src/res/images/backspaceIcon.png'

let numbers = [
    [1,2,3],
    [4,5,6],
    [6,7,8],
    [-1,0,-2]
]
let alphabate = [
    [    '', 'ABC',  'DEF'],
    [ 'GHI', 'JKL',  'MNO'],
    ['PQRS', 'TUV', 'WXYZ'],
    ['', '', ''],
]
let rows = []
for(let i = 0; i < 4; i++){
    rows.push(
        <View
        style={styles.row}
        >
            {getColomn(numbers[i], alphabate[i])}
        </View>
    )
}

function getColomn(numbers,  alphabate){
    let columns = []
    for(let i = 0; i < 3; i++){
        numbers[i] < 0 ?
        columns.push(
            
            <TouchableOpacity style={styles.darkColomn}>
                    { numbers[i] == -2 ? 
                    <Image
                        style={styles.backspaceIcon}
                        source={BackspaceIcon}
                    />
                     : null}
                    
            </TouchableOpacity> 
        ) : 
        columns.push(
            
            <TouchableOpacity style={styles.colomn}>
                    { numbers[i] < 0 ? null :
                    <View><Text style={styles.columnText}>
                        {numbers[i]}
                    </Text>
                    <Text style={styles.alphabate}>{alphabate[i]}</Text>
                    </View>
                    }
                    
            </TouchableOpacity> 
        ) 
    }
    return columns
}

function Keypad(){
    return <View style={styles.container}>
        {/* <FlatList
            data={numbers}
            renderItem={({item}) => {
                return (<View style={styles.row}>
                    <FlatList
                        horizontal
                        data={item}

                        renderItem={({item}) => {
                            return(
                            <View style={styles.colomn}>
                                <Text>{item}</Text>
                            </View>)
                        }}
                    />
                </View>)
            }}
        /> */}
        {rows}
    </View>
}

export default Keypad