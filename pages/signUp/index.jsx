import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, 
    Alert, ActivityIndicator, StatusBar } from 'react-native'
import styles from './styles'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import { app, db } from '../firebaseConfig';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import { addDoc, collection } from 'firebase/firestore'


export default function Login({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nome, setNome] = useState('')
    const [cep, setCep] = useState('')
    const [num, setNum] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [localidade, setLocalidade] = useState('')
    const [bairro, setBairro] = useState('')
    const [uf, setUf] = useState('')
    const [image, setImage] = useState(null)
    const [imagem, setImagem] = useState(null)
    const [blob, setBlob] = useState(null)
    const auth = getAuth(app)

    // Converte em binário para enviar ao Storage
    const getBlobFroUri = async (uri) => {
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                reject(new TypeError("Network request failed"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", uri, true);
            xhr.send(null);
        });

        return setBlob(blob);
    };

    const camera = async () => {
        try {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.canceled) {
                getBlobFroUri(result.assets[0].uri)
                setImage(result.assets[0].uri)
                const path = result.assets[0].uri
                setImagem(path.substring(path.lastIndexOf('/') + 1, path.length))
            }
        } catch (E) {
            console.log(E);
        }
    };
    const gallery = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.canceled) {
                getBlobFroUri(result.assets[0].uri)
                setImage(result.assets[0].uri)
                const path = result.assets[0].uri
                setImagem(path.substring(path.lastIndexOf('/') + 1, path.length))
            }
        } catch (E) {
            console.log(E);
        }
    };

    const storage = getStorage(app);
    // Create the file metadata
    /** @type {any} */
    const metadata = {
        contentType: 'image/jpeg'
    };

    const uploadingImage = () => {
        console.log("Data: ", Date.now())
        // Upload file and metadata to the object 'images/mountains.jpg'
        // const storageRef = ref(storage, 'images/' + Date.now());
        const storageRef = ref(storage, 'images/' + imagem);
        const uploadTask = uploadBytesResumable(storageRef, blob, metadata);


        // console.log(storageRef)
        // Listen for state changes, errors, and completion of the upload.
        // uploadTask.on('state_changed',
        //     (snapshot) => {
        //         // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        //         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //         console.log('Upload is ' + progress + '% done');
        //         switch (snapshot.state) {
        //             case 'paused':
        //                 console.log('Upload is paused');
        //                 break;
        //             case 'running':
        //                 console.log('Upload is running');
        //                 break;
        //         }
        //     },
        //     (error) => {
        //         // A full list of error codes is available at
        //         // https://firebase.google.com/docs/storage/web/handle-errors
        //         switch (error.code) {
        //             case 'storage/unauthorized':
        //                 // User doesn't have permission to access the object
        //                 break;
        //             case 'storage/canceled':
        //                 // User canceled the upload
        //                 break;

        //             // ...

        //             case 'storage/unknown':
        //                 // Unknown error occurred, inspect error.serverResponse
        //                 break;
        //         }
        //     },
        //     () => {
        //         // Upload completed successfully, now we can get the download URL
        //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        //             console.log('File available at', downloadURL);
        //         });
        //     }

        // );
    }

    async function adicionar() {
        await addDoc(collection(db, 'users'), {
            nome: nome,
            email: email,
            cep: cep,
            num: num,
            logradouro: logradouro,
            localidade: localidade,
            bairro: bairro,
            uf: uf,
            foto: email + '_' + imagem
        })
    }

    const pesquisar = () => {
        console.log(cep)
        axios.get('https://viacep.com.br/ws/' + cep + '/json/')
            .then((res) => {
                setLogradouro(res.data.logradouro)
                setLocalidade(res.data.localidade)
                setBairro(res.data.bairro)
                setUf(res.data.uf)
            })
    }

    const signup = (e) => {
        e.preventDefault()

        const file = imagem

        if (!file) {
            console.log('Faltou imagem...')
            return
        }
        if (!nome) {
            console.log('Faltou nome...')
            return
        }
        if (!email) {
            console.log('Faltou email...')
            return
        }

        if (imagem == null) return

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('Entrou')
                adicionar()
                navigation.navigate('SignIn')
            })
            .catch((error) => {
                console.log("Auth", auth)
                console.log("email", email)
                console.log("senha", senha)
                console.log('não entrou')
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        uploadingImage()
    }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#000" />
            <View>
                <Text style={styles.title}>Cadastrar</Text>
            </View>
            <View style={styles.foto}>
                {image && (
                    <>
                        <Image source={{ uri: image }} style={styles.foto1} />
                    </>
                )}
                {Image && <ActivityIndicator />}
            </View>
            <View style={styles.botoes}>
                <TouchableOpacity
                    onPress={gallery}
                >
                    <FontAwesome
                        name='image'
                        size={40}
                        color={'#000'}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={camera}
                >
                    <AntDesign
                        name='camera'
                        size={40}
                        color={'#000'}
                    />
                </TouchableOpacity>
            </View>

            <TextInput
                placeholder='nome'
                onChangeText={(e) => { setNome(e) }}
                value={nome}
                style={styles.caixa}
            />
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    placeholder='cep'
                    onChangeText={(e) => { setCep(e) }}
                    value={cep}
                    style={styles.caixaCEP}
                />
                <TouchableOpacity
                    onPress={pesquisar}
                    style={styles.btnPesquisar}
                >
                    <AntDesign
                        name='search1'
                        size={30}
                        color={'#000'}
                    />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.caixaCidade}>{logradouro}</Text>
                <TextInput
                    placeholder='nº'
                    onChangeText={(e) => setNum(e)}
                    value={num}
                    style={styles.caixaNum}
                />
            </View>

            <Text style={styles.caixaX}>{bairro}</Text>

            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.caixaCidade}>{localidade}</Text>
                <Text style={styles.caixaUF}>{uf}</Text>
            </View>

            <TextInput
                placeholder='email'
                onChangeText={(e) => setEmail(e)}
                value={email}
                style={styles.caixa}
            />
            <TextInput
                placeholder='password'
                onChangeText={(e) => setPassword(e)}
                value={password}
                style={styles.caixa}
                secureTextEntry={true}
            />

            <TouchableOpacity
                style={styles.btnOk}
                onPress={signup}
            >
                <Text style={{ fontSize: 20 }}>Ok</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnOk}
                onPress={() => {navigation.navigate('Home')}}
            >
                <Text style={{ fontSize: 20 }}>Cancelar</Text>
            </TouchableOpacity>
            
        </View>
    )
}

