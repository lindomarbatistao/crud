import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    caixa:{
        width:'80%',
        borderWidth:1,
        borderRadius: 5,
        padding:8,
        fontSize:15,
        marginTop:10,
    },
    caixaX:{
        backgroundColor:'#aaa',
        width:'80%',
        borderWidth:1,
        borderRadius: 5,
        padding:8,
        fontSize:15,
        marginTop:10,
    },
    caixaCidade:{
        backgroundColor:'#aaa',
        width:'62%',
        borderWidth:1,
        borderRadius: 5,
        padding:8,
        fontSize:15,
        marginTop:10,
    },
    caixaUF:{
        backgroundColor:'#aaa',
        width:'15%',
        marginLeft:15,
        borderWidth:1,
        borderRadius: 5,
        padding:8,
        fontSize:15,
        marginTop:10,
    },
    caixaNum:{
        width:'15%',
        marginLeft:15,
        borderWidth:1,
        borderRadius: 5,
        padding:8,
        fontSize:15,
        marginTop:10,
        alignItems:'center'
    },
    btnPesquisar:{
        backgroundColor:'#5a7bb0',
        width:'15%',
        marginLeft:15,
        borderWidth:1,
        borderRadius: 5,
        padding:8,
        fontSize:15,
        marginTop:10,
        alignItems:'center'
    },
    caixaCEP:{
        width:'62%',
        borderWidth:1,
        borderRadius: 5,
        padding:8,
        fontSize:15,
        marginTop:10,
    },
    title:{
        fontSize: 40,
        fontWeight:'bold'
    },
    caixas:{
        alignItems:'center',
        justifyContent:'center',
        padding:20,
    },
    btnOk:{
        marginTop:20,
        borderWidth:1,
        borderRadius:10,
        width:'50%',
        height:40,
        backgroundColor:'#5a7bb0',
        alignItems:'center',
        justifyContent:'center',
    },
    selectButton:{
        marginTop:20,
        borderWidth:1,
        borderRadius:10,
        width:'50%',
        height:50,
        backgroundColor:'#5a7bb0',
        alignItems:'center',
        justifyContent:'center',
    },
    uploadButton:{
        marginTop:20,
        borderWidth:1,
        borderRadius:10,
        width:'100%',
        height:50,
        backgroundColor:'#5a7bb0',
        alignItems:'center',
        justifyContent:'center',
    },
    btnBuscar:{
        backgroundColor:'#5a7bb0',
        width:'28%',
        borderWidth:1,
        borderRadius: 5,
        padding:8,
        fontSize:25,
        marginTop:10,
        marginLeft:10,
        alignItems:'center'
    },
    caixa1:{
        borderWidth:1,
        borderRadius:5,
        padding:5,
        marginVertical:10,
        width:'60%'
    }, 
    foto:{
        width:150,
        height:150,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#aaa',
        borderRadius:100,
        marginTop:20,
    }, 
    foto1:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:100,
        marginTop:20,
    }, 
    btn:{
        width:'30%',
        height:40,
        padding:5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        borderRadius:5,
        shadowColor:'#36074d',
        shadowOffset:{height:4, width:4},
        marginVertical: 10
    },
    botoes:{
        flexDirection:'row',
        justifyContent:'space-between',
        width: '35%'
    }
})

export default styles