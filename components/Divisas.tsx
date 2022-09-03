import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native';
import ButtonCalculate from './ButtonCalculate';
import Textos from './Textos';
import Inputs from './Inputs'

const Divisas = () => {

    const [origen, setOrigen] = useState<string>('')
    const [destino, setDestino] = useState<string>('')
    const [convertir, setConvertir] = useState<number>(0)
    const [cambio, setCambio] = useState<number>(0);
    const [resultado, setResultado] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)

    const Moneda = (texto: string) => {
        setOrigen(texto)
    }
    const MonedaAConversion = (texto: string) => {
        setDestino(texto)
    }
    const TasaCambio = (numero: number) => {
        setCambio(numero);
      }
    const handleChangeConvertir = (texto: string) => {
        const number = parseFloat(texto)
        if (isNaN(number)) {
            setError(true)
        } else {
            setError(false)
        }
        setConvertir(number)
    }
    const handleCalcular = () => {
        if (origen === 'USD' && destino === 'NIO') {
            const result = convertir * cambio
            setResultado(result)
        } else if (origen === 'USD' && destino === 'EUR') {
            const result = convertir * cambio
            setResultado(result)
        } else if (origen === 'EUR' && destino === 'NIO') {
            const result = convertir * cambio
            setResultado(result)
        } else if (origen === 'EUR' && destino === 'USD') {
            const result = convertir * cambio
            setResultado(result)
        } else if (origen === 'NIO' && destino === 'USD') {
            const result = convertir * 	cambio
            setResultado(result)
        } else if (origen === 'NIO' && destino === 'EUR') {
            const result = convertir * cambio
            setResultado(result)
        } else {
            alert(
                'Error, asegurese de usar argumentos válidos'
            )
        }
    }

    return (

        <View style={styles.container}>
            <Textos text='Convertidor Divisas' type='title'/>
            <View>
            <Textos text='Modena' type='normal'/>
            <Inputs 
                defaultValue={origen}
                errorMessage='Solo se admite clave de la moneda'
                onChangeText={setOrigen}
            />

            <Textos text='Moneda a convertir' type='normal'/>
            <Inputs 
                defaultValue={destino}
                errorMessage='Solo se admite clave de la moneda'
                onChangeText={setDestino}
            />
            <Textos text='Tasa de cambio' type='normal'/>
            <Inputs 
                defaultValue={cambio.toString()}
                 errorMessage='Solo se admite clave de la moneda'
                onChangeText={TasaCambio}
            />

            <Textos text='Cantidad' type='normal'/>
            <Inputs 
                defaultValue={convertir.toString()}
                errorMessage='solo se admiten numeros'
                onChangeText={handleChangeConvertir}
                handleError={error}
            />

            <ButtonCalculate
                color='dark'
                text='Convertir'
                onPress={handleCalcular}
                disabled={error}
            />

            <Textos text='Resultado:' type='normal'/>
            <Text style={styles.result}>
                {resultado.toString()}
            </Text>
            </View>
        </View>
    )
}

export default Divisas

const styles = StyleSheet.create({
    result: {
        backgroundColor:'white',
        margin:4,
        fontSize: 40,
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',   
        borderRadius: 5,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
    },
    container: {
        borderWidth:2,
        borderRadius:8,
        padding:20,
        margin:30,
        marginTop:90,
        marginBottom:90,
        borderColor:'#4caf50',
        flex: 1,
        justifyContent: 'center',
    },
})
