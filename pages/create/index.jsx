import React, { useState } from 'react'
import {
    View, Text, TextInput, TouchableOpacity, Image,
    ActivityIndicator, SafeAreaView, ScrollView, StatusBar
} from 'react-native'
import styles from './styles'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import { app, db } from '../firebaseConfig';
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection } from 'firebase/firestore'


export default function Create({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [product, setProduct] = useState('')
    const [description, setDescription] = useState('')
    const [number, setNumber] = useState('')
    const [item1Description, setItem1Description] = useState('')
    const [item2Description, setItem2Description] = useState('')
    const [item3Description, setItem3Description] = useState('')
    const [item4Description, setItem4Description] = useState('')
    const [item5Description, setItem5Description] = useState('')
    const [item6Description, setItem6Description] = useState('')
    const [item7Description, setItem7Description] = useState('')
    const [item8Description, setItem8Description] = useState('')
    const [item9Description, setItem9Description] = useState('')
    const [item10Description, setItem10Description] = useState('')
    const [item11Description, setItem11Description] = useState('')
    const [item12Description, setItem12Description] = useState('')
    const [item13Description, setItem13Description] = useState('')
    const [item14Description, setItem14Description] = useState('')
    const [item15Description, setItem15Description] = useState('')


    const [image, setImage] = useState(null)
    const [imagem, setImagem] = useState(null)
    const [blob, setBlob] = useState(null)

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
    /** @type {any} */
    const metadata = {
        contentType: 'image/jpeg'
    };

    const uploadingImage = () => {
        console.log("Data: ", Date.now())
        const storageRef = ref(storage, 'products/' + imagem);
        const uploadTask = uploadBytesResumable(storageRef, blob, metadata);
    }

    async function adicionar() {
        await addDoc(collection(db, 'products'), {
            product: product,
            email: email,
            description: descricao,
            number: number,
            item1Description: item1Description,
            item2Description: item2Description,
            item3Description: item3Description,
            item4Description: item4Description,
            item5Description: item5Description,
            item6Description: item6Description,
            item7Description: item7Description,
            item8Description: item8Description,
            item9Description: item9Description,
            item10Description: item10Description,
            item11Description: item11Description,
            item12Description: item12Description,
            item13Description: item13Description,
            item14Description: item14Description,
            item15Description: item15Description,
            foto: email + '_' + imagem
        })
    }

    const signup = (e) => {
        e.preventDefault()

        const file = imagem

        if (!file) {
            console.log('Faltou imagem...')
            return
        }
        if (!product) {
            console.log('Faltou product...')
            return
        }
        if (!email) {
            console.log('Faltou email...')
            return
        }

        if (imagem == null) return
        adicionar()
        uploadingImage()
    }


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#000" />
            <ScrollView style={{ width: '100%' }}>
                <View>
                    <Text style={styles.title}>Produto</Text>
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
                    placeholder='product'
                    onChangeText={(e) => { setProduct(e) }}
                    value={product}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='description'
                    onChangeText={(e) => { setDescription(e) }}
                    value={description}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='item1'
                    onChangeText={(e) => setItem1Description(e)}
                    value={item1Description}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='item2'
                    onChangeText={(e) => setItem2Description(e)}
                    value={item2Description}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='item3'
                    onChangeText={(e) => setItem3Description(e)}
                    value={item3Description}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='item4'
                    onChangeText={(e) => setItem4Description(e)}
                    value={item4Description}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='item5'
                    onChangeText={(e) => setItem5Description(e)}
                    value={item5Description}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='item6'
                    onChangeText={(e) => setItem6Description(e)}
                    value={item6Description}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='item7'
                    onChangeText={(e) => setItem7Description(e)}
                    value={item7Description}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='item8'
                    onChangeText={(e) => setItem8Description(e)}
                    value={item8Description}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='item9'
                    onChangeText={(e) => setItem9Description(e)}
                    value={item9Description}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='item10'
                    onChangeText={(e) => setItem10Description(e)}
                    value={item10Description}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='item11'
                    onChangeText={(e) => setItem11Description(e)}
                    value={item11Description}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='item12'
                    onChangeText={(e) => setItem12Description(e)}
                    value={item12Description}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='item13'
                    onChangeText={(e) => setItem13Description(e)}
                    value={item13Description}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='item14'
                    onChangeText={(e) => setItem14Description(e)}
                    value={item14Description}
                    style={styles.caixa}
                />
                <TextInput
                    placeholder='item15'
                    onChangeText={(e) => setItem15Description(e)}
                    value={item15Description}
                    style={styles.caixa}
                />


                <TouchableOpacity
                    style={styles.btnOk}
                    onPress={signup}
                >
                    <Text style={{ fontSize: 25 }}>Ok</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.btnOk}
                    onPress={navigation.navigate('Home')}
                >
                    <Text style={{ fontSize: 25 }}>Cancelar</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    )
}

