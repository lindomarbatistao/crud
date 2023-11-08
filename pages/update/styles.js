import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFAFA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#a020ba',
    },
    txt: {
        paddingTop: 15,
        fontSize: 15,
    },
    txt1: {
        fontSize: 15,
        color: '#333',
        paddingLeft: 15,
        borderRadius: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#000',
        borderRightWidth: 2,
        borderRightColor: '#000',
        backgroundColor: '#fff',
        height: 30,
    },
    botao: {
        width: '60%',
        height: 50,
        backgroundColor: '#555',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    btn: {
        width: '60%',
        height: 40,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: 10,
        marginTop: 30,
    },
    txtButton: {
        fontFamily: 'Verdana',
        fontSize: 15,
        color: '#EEE',
    },
    foto0: {
        padding: 10,
        alignItems: 'center',
    },
    foto1: {
        width: 150,
        height: 150,
        backgroundColor: '#834989',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
})

export default styles