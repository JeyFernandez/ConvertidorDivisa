import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
    text: string;
    type: 'title' | 'comment' | 'normal'
}

const Textos = ({ text, type }: Props) => {
    return (
        
        <Text 
            style={[
                type === 'title' ? styles.title : null,
                type === 'comment' ? styles.comment : null,
                type === 'normal' ? styles.normal : null
            ]}
        >
            {text}
        </Text>
        
    )
}

export default Textos

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        color: 'darkslategrey'
    },
    comment: {
        fontSize: 12,
        textAlign: 'center',
        color: 'darkslategrey'
    },
    normal: {
        color: 'black',
        padding: 5
    }
})
