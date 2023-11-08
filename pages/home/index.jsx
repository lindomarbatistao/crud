import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import styles from './styles'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AntDesign, FontAwesome } from '@expo/vector-icons'

export default function Home({ navigation }) {
    const [codigo, setCodigo] = useState('')
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const usuario = user.email
            setCodigo(usuario)
        } else {
        }
    });

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#000" />
            <Text style={styles.txt}>Página Home</Text>
            <Text>{codigo}</Text>
            <View>
                <View>
                    <TouchableOpacity>
                        <Text>Pagamentos</Text>
                        <FontAwesome name='barcode' size={40} color={'#000'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
