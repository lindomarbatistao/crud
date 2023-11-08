import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import styles from './styles'
import { auth } from '../firebaseConfig'
import { signInWithEmailAndPassword } from "firebase/auth";


export default function Login({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const logar = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigation.navigate('Home', { usuario: email })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#000" />
            <View>
                <Text style={styles.title}>Login</Text>
            </View>
            <TextInput
                placeholder='email'
                onChangeText={setEmail}
                value={email}
                style={styles.caixa}
            />
            <TextInput
                placeholder='password'
                onChangeText={setPassword}
                value={password}
                style={styles.caixa}
                secureTextEntry={true}
            />

            <TouchableOpacity
                style={styles.btnOk}
                onPress={logar}
            >
                <Text style={{ fontSize: 25 }}>Sign In</Text>
            </TouchableOpacity>
            
            <View style={styles.cadastrar}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={styles.texto}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}