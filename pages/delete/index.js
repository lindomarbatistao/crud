import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, CheckBox, Button, StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native'
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

import { db } from '../firebaseConfig'
import { doc, deleteDoc, getDocs, collection } from 'firebase/firestore'

export default function Delete({ navigation }) {
    const [page, setPage] = useState([])
    const isFocused = useIsFocused()

    function deleteItem(id) {
        deleteDoc(doc(db, "alunos", id));
        renderizar()
    }

    useEffect(() => {
        console.log("dentro do use effect")
        console.log(isFocused)
        renderizar()
    }, [isFocused])

    const renderizar = async () => {
        const querySnapshot = await getDocs(collection(db, "alunos"));
        const list = []
        querySnapshot.forEach((doc) => {
            list.push({ ...doc.data(), id: doc.id })
        });
        setPage(list)
        console.log(list)
    }

    const alterar = (id, status) => {
        console.log(id, status)
        //encontrar o item dentro da lista e alterar o seu status !status
        page.find(x => x.id == id).status = !status
        setPage([...page])
    }

    const deletarSelecionados = () => {
        page.forEach(item => {
            if (item.status) {
                deleteDoc(doc(db, "alunos", item.id));
            }
        });
        renderizar()
    }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#000" />
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>Delete</Text>
            </View>
            <FlatList
                data={page}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.pageDelete}>
                            <View style={styles.checkbox}>
                                <CheckBox
                                    value={item.status}
                                    onValueChange={() => alterar(item.id, item.status)}
                                />
                            </View>
                            <TouchableOpacity
                                style={styles.deleteItem}
                                onPress={() => { deleteItem(item.id) }}
                            >
                                <FontAwesome
                                    name='trash'
                                    size={20}
                                    color='#B22222'
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.deleteItem}
                                onPress={() => { deleteItem(item.id) }}
                            >
                                <FontAwesomeIcon
                                    icon={faPenToSquare}
                                    size={25}
                                    color='#00f'
                                />
                            </TouchableOpacity>

                            <Text
                                style={styles.txtDelete}
                                onPress={() => {
                                    navigation.navigate("Update", {
                                        id: item.id,
                                        name: item.name,
                                        email: item.email,
                                        image: item.image
                                    })
                                }}
                            >
                                {item.name}
                            </Text>

                            <Text
                                style={styles.txtDelete}
                                onPress={() => {
                                    navigation.navigate("Update", {
                                        id: item.id,
                                        name: item.name,
                                        email: item.email,
                                        image: item.image
                                    })
                                }}
                            >
                                {item.email}
                            </Text>
                        </View>
                    )
                }}


            />
            <View style={styles.btnContainer}>
                <View style={styles.btn}>
                    <TouchableOpacity onPress={deletarSelecionados}>
                        <Text style={styles.txtButton}>Apagar</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}