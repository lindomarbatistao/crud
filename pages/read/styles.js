import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFAFA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoCabecalho: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#0a5ad1',
    },
    txtButton: {
        fontFamily: 'Verdana',
        fontSize: 30,
        color: '#DDD',
    },
    pageLista: {
        marginTop: 10,
        width: width / 2.8,
        padding: 5,
    },
    txtLista: {
        width: 150,
        alignItems: "center",
        color: '#444',
        fontSize: 10,
        padding: 1,
    },
    fotoFundo: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#eee',
        borderRadius: 10,
        borderBottomColor: '#bbb',
        borderRightColor: '#bbb',    
        borderBottomWidth:2,
        borderRightWidth:2,
        width: 150,
        height: 150
    },
    foto: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    }
})

export default styles