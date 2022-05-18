import { StyleSheet } from 'react-native'
import { COLOR } from '../../utils'
export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLOR.dark
    },
    status:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding:16
    }
})