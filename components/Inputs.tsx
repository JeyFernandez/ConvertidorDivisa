import React from 'react'
import { TextInput, View } from 'react-native'
import { Text, StyleSheet } from 'react-native'

interface Props {
    defaultValue: string,
    errorMessage?: string,
    handleError?: boolean,
    onChangeText: (text: string) => void
}

const Inputs = ({ defaultValue, errorMessage = 'Error', handleError = false, onChangeText }: Props) => {
    return (
        <View>
            <TextInput 
            defaultValue={defaultValue}
            style={styles.input}
            onChangeText={text => onChangeText(text)} 
            />
            {
                handleError
                    ?
                    (
                        <Text style={styles.label}>
                            {errorMessage}
                        </Text>
                    )
                    :null
            }
        </View>
    )
}

export default Inputs

const styles = StyleSheet.create({
    label: {
        color: 'red'
    },
    input: {
        margin:4,
        borderColor: '#4fc3f7',
        borderWidth: 2,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        textAlign: 'center',
    }
})
