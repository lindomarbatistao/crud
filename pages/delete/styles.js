import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFAFA',
    },
    titulo: {
        color: '#B22222',
        fontSize: 50,
        fontWeight: 'bold',
    },
    cabecalho: {
        alignItems: 'center',
    },
    botao: {
        width: '60%',
        height: 50,
        backgroundColor: '#555',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    btnContainer: {
        pading: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100
    },
    btn: {
        width: '50%',
        height: 50,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#32a852',
        borderRadius: 5,
        shadowOffset: { height: 4, width: 4 },
        shadowColor: '#b1f2c3',
    },
    txtButton: {
        fontFamily: 'Verdana',
        fontSize: 15,
        color: '#333',
    },
    pageDelete: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        alignItems: "center"
    },
    deleteItem: {
        justifyContent: 'center',
        padding: 4,
        paddingLeft: 10,
    },
    txtDelete: {
        width: '50%',
        height: 25,
        backgroundColor: '#eee',
        padding: 2,
        borderRadius: 5,
        color: '#222',
        marginLeft: 5,
        fontSize: 11,
        paddingLeft: 6,
    },
    checkbox: {
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 20,
    }


})

export default styles