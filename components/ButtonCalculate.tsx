import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Textos from './Textos'

interface Props {
    color?: 'light' | 'dark';
    text: string;
    onPress: () => void
    disabled: boolean;
}

const ButtonCalculate = ({ color, text, onPress, disabled }: Props) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[
                styles.button,
                color === 'dark' ? styles.dark : null,
            ]}
        >
            <Textos text={text} type='normal'/>
        </TouchableOpacity>
    )
}

export default ButtonCalculate

const styles = StyleSheet.create({
    button: {
        marginLeft:100,
        margin: 10,
        top: 5,
        borderRadius: 5,
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dark: {
        backgroundColor:'#79ccfc',
        borderColor: 'white',
        color:'white',
        borderWidth: 2,
        borderRadius: 5,
        paddingVertical: 2,
        paddingHorizontal: 10,
        textAlign: 'center',
    },
})
