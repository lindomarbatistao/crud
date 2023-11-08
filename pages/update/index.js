import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button, StatusBar } from 'react-native';
import styles from './styles'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../firebaseConfig'

export default function Update({route,navigation }) {

    const [id, setId] = useState()
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [foto, setFoto] = useState()
    const [estrutura, setEstrutura] = useState()
    const [textoNome, setTextoNome] = useState()
    const [textoEmail, setTextoEmail] = useState()
    const [acesso, setAcesso] = useState()


    useEffect(() => {
        if (route.params != null) {
            setNome(route.params.name)
            setEmail(route.params.email)
            setFoto(route.params.image)
            //setAcesso(doc(db, "alunos", route.params.id))
            setEstrutura(!estrutura)
       }

    }, [])

    const salvar = async (e) => {
        await updateDoc(doc(db, "alunos", route.params.name), {name: textoNome, email: textoEmail});
    }

    const repositorio = 'https://firebasestorage.googleapis.com/v0/b/crud-completo-8e995.appspot.com/o/images%2F'
    const media = '?alt=media'

    return (
        <View style={styles.container}><Text style={styles.titulo}>Update</Text>
            <StatusBar backgroundColor="#000" />
            {estrutura ?
                <View>
                    <View style={styles.foto0}>
                        <img src={repositorio + foto + media} style={styles.foto1} />
                    </View>


                    <Text style={styles.txt}>Nome:</Text>
                    <TextInput
                        style={styles.txt1}
                        onChangeText={(e) => { setTextoNome(e) }}
                        value={textoNome}
                        placeholder={nome}
                    />

                    <Text style={styles.txt}>Email:</Text>
                    <TextInput
                        style={styles.txt1}
                        onChangeText={(e) => { setTextoEmail(e) }}
                        value={textoEmail}
                        placeholder={email}
                    />


                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.btn}>
                            <TouchableOpacity onPress={() => { salvar() }}>
                                <Text style={styles.txtButton}>SALVAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                :

                null

            }
    
        </View>
    )
}