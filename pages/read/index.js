import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView, StatusBar } from 'react-native';
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons'
import { db } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore';

export default function Read({ navigation }) {
    const [page, setPage] = useState([])

    useEffect(async () => {
        const querySnapshot = await getDocs(collection(db, "alunos"));
        const list = []
        querySnapshot.forEach((doc) => {
            list.push({ 
                ...doc.data(), 
                name: doc.data().name, 
                email: doc.data().email, 
                image: doc.data().image
            })
        });
        setPage(list)
    }, [])

    const repositorio = 'https://firebasestorage.googleapis.com/v0/b/crud-completo-8e995.appspot.com/o/images%2F'
    const media = '?alt=media'

    return (
        <View style={styles.container}><Text style={styles.textoCabecalho}>Read</Text>
            <StatusBar backgroundColor="#000" />
            <FlatList
                numColumns={2}
                data={page}
                renderItem={({ item }) => {
                    return (
                        <ScrollView style={styles.pageLista}>
                            <View style={styles.fotoFundo}>
                                <img src={repositorio + item.image + media} style={styles.foto} />
                                <TouchableOpacity
                                    style={styles.txtLista}
                                    onPress={() => {
                                        navigation.navigate("Update", {
                                            id: item.id,
                                            name: item.name,
                                            email: item.email,
                                            image: item.image
                                        })
                                    }}
                                >
                                    <Text>{item.name}</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    )
                }}
            />
        </View>
    )
}